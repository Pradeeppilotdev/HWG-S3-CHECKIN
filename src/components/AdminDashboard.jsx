import React, { useState, useEffect } from 'react';
import { db } from '../firebase';
import { collection, query, orderBy, getDocs, where, Timestamp } from 'firebase/firestore';

function AdminDashboard({ checkInTypes }) {
  const [checkins, setCheckins] = useState([]);
  const [stats, setStats] = useState({
    total: 0,
    today: 0,
    firstCheckin: 0,
    dinner: 0
  });
  const [loading, setLoading] = useState(true);
  const [filterType, setFilterType] = useState('all');

  useEffect(() => {
    fetchCheckins();
  }, []);

  const fetchCheckins = async () => {
    try {
      setLoading(true);
      const q = query(collection(db, 'checkins'), orderBy('timestamp', 'desc'));
      const querySnapshot = await getDocs(q);
      
      const checkinsData = [];
      querySnapshot.forEach((doc) => {
        checkinsData.push({ id: doc.id, ...doc.data() });
      });

      setCheckins(checkinsData);
      calculateStats(checkinsData);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching check-ins:', error);
      setLoading(false);
    }
  };

  const calculateStats = (data) => {
    const today = new Date().toLocaleDateString();
    
    const stats = {
      total: data.length,
      today: data.filter(c => c.date === today).length,
      firstCheckin: data.filter(c => c.checkInType === 'first-checkin').length,
      dinner: data.filter(c => c.checkInType?.includes('dinner')).length
    };

    setStats(stats);
  };

  const filteredCheckins = filterType === 'all' 
    ? checkins 
    : checkins.filter(c => c.checkInType === filterType);

  const exportToCSV = () => {
    const headers = ['Participant ID', 'Name', 'Check-in Type', 'Date', 'Time'];
    const rows = checkins.map(c => [
      c.participantId,
      c.participantName,
      c.checkInType,
      c.date,
      c.time
    ]);

    const csv = [
      headers.join(','),
      ...rows.map(row => row.join(','))
    ].join('\n');

    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `checkins-${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
  };

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h2>Dashboard</h2>
        <div className="dashboard-actions">
          <button className="btn btn-secondary btn-sm" onClick={fetchCheckins}>
            Refresh
          </button>
          <button className="btn btn-primary btn-sm" onClick={exportToCSV}>
            Export CSV
          </button>
        </div>
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <h3>{stats.total}</h3>
          <p>Total Check-ins</p>
        </div>
        <div className="stat-card">
          <h3>{stats.today}</h3>
          <p>Today</p>
        </div>
        <div className="stat-card">
          <h3>{stats.firstCheckin}</h3>
          <p>First Check-ins</p>
        </div>
        <div className="stat-card">
          <h3>{stats.dinner}</h3>
          <p>Dinner</p>
        </div>
      </div>

      <div className="checkin-list">
        <div className="checkin-list-header">
          <h3>Recent</h3>
          <select
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
          >
            <option value="all">All Types</option>
            {checkInTypes.map(type => (
              <option key={type.value} value={type.value}>{type.label}</option>
            ))}
          </select>
        </div>

        {loading ? (
          <div className="spinner"></div>
        ) : filteredCheckins.length === 0 ? (
          <div className="empty-state">No check-ins yet</div>
        ) : (
          <div>
            {filteredCheckins.map((checkin) => (
              <div key={checkin.id} className="checkin-item">
                <div className="checkin-item-left">
                  <div className="checkin-item-name">
                    {checkin.participantName} <span className="checkin-item-id">#{checkin.participantId}</span>
                  </div>
                  <div className="checkin-item-type">{checkin.checkInType}</div>
                </div>
                <div className="checkin-item-time">
                  <div>{checkin.date}</div>
                  <div>{checkin.time}</div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default AdminDashboard;
