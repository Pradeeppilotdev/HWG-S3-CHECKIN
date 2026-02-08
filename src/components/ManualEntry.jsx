import React, { useState } from 'react';

function ManualEntry({ onCheckIn, checkInTypes }) {
  const [participantId, setParticipantId] = useState('');
  const [participantName, setParticipantName] = useState('');
  const [selectedCheckInType, setSelectedCheckInType] = useState('first-checkin');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!participantId || !participantName) {
      alert('Please fill in all fields!');
      return;
    }
    onCheckIn(participantId, participantName, selectedCheckInType);
    setParticipantId('');
    setParticipantName('');
  };

  return (
    <form onSubmit={handleSubmit} className="manual-entry">
      <div className="input-group">
        <label>Participant ID</label>
        <input
          type="text"
          value={participantId}
          onChange={(e) => setParticipantId(e.target.value)}
          placeholder="e.g. 101"
          required
        />
      </div>

      <div className="input-group">
        <label>Name</label>
        <input
          type="text"
          value={participantName}
          onChange={(e) => setParticipantName(e.target.value)}
          placeholder="e.g. John Doe"
          required
        />
      </div>

      <div className="input-group">
        <label>Check-in type</label>
        <select
          value={selectedCheckInType}
          onChange={(e) => setSelectedCheckInType(e.target.value)}
        >
          {checkInTypes.map(type => (
            <option key={type.value} value={type.value}>{type.label}</option>
          ))}
        </select>
      </div>

      <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
        Check In
      </button>
    </form>
  );
}

export default ManualEntry;
