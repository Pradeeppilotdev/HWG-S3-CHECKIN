import React, { useState } from 'react';
import { findParticipantsByName, findParticipantById } from '../data/participants';
import CheckInTypeDropdown from './CheckInTypeDropdown';

function ManualEntry({ onCheckIn, checkInTypes }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [selectedParticipant, setSelectedParticipant] = useState(null);
  const [selectedCheckInType, setSelectedCheckInType] = useState('first-checkin');

  const handleSearch = (value) => {
    setSearchQuery(value);
    if (value.length >= 2) {
      const results = findParticipantsByName(value).slice(0, 10);
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  };

  const selectParticipant = (participant) => {
    setSelectedParticipant(participant);
    setSearchQuery(participant.name);
    setSearchResults([]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedParticipant) {
      // Try looking up by ID if user typed an ID directly
      const byId = findParticipantById(searchQuery.trim().toUpperCase());
      if (byId) {
        onCheckIn(byId.id, byId.name, selectedCheckInType);
        setSearchQuery('');
        setSelectedParticipant(null);
        return;
      }
      alert('Please search and select a participant first.');
      return;
    }
    onCheckIn(selectedParticipant.id, selectedParticipant.name, selectedCheckInType);
    setSearchQuery('');
    setSelectedParticipant(null);
  };

  return (
    <form onSubmit={handleSubmit} className="manual-entry">
      <div className="input-group">
        <label>Search participant</label>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => {
            handleSearch(e.target.value);
            if (selectedParticipant) setSelectedParticipant(null);
          }}
          placeholder="Name, team, or ID (e.g. HWGDG-001)"
          autoComplete="off"
        />
        {searchResults.length > 0 && (
          <div className="search-dropdown">
            {searchResults.map(p => (
              <div
                key={p.id}
                className="search-result-item"
                onClick={() => selectParticipant(p)}
              >
                <span className="search-result-name">{p.name}</span>
                <span className="search-result-meta">{p.team} &middot; {p.id}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {selectedParticipant && (
        <div className="selected-participant">
          <strong>{selectedParticipant.name}</strong>
          <span>{selectedParticipant.team} &middot; {selectedParticipant.id}</span>
          {selectedParticipant.isLead && <span className="lead-badge">Lead</span>}
        </div>
      )}

      <div className="input-group">
        <label>Check-in type</label>
        <CheckInTypeDropdown
          checkInTypes={checkInTypes}
          value={selectedCheckInType}
          onChange={setSelectedCheckInType}
        />
      </div>

      <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
        Check In
      </button>
    </form>
  );
}

export default ManualEntry;
