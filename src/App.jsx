import React, { useState } from 'react';
import { db } from './firebase';
import { collection, addDoc, Timestamp } from 'firebase/firestore';
import QRScanner from './components/QRScanner';
import ManualEntry from './components/ManualEntry';
import AdminDashboard from './components/AdminDashboard';
import './App.css';

/* Inline SVG doodle for the header */
const HeaderDoodle = () => (
  <svg className="header-doodle" width="320" height="72" viewBox="0 0 320 72" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* laptop doodle */}
    <rect x="110" y="10" width="100" height="60" rx="6" stroke="#1a1a2e" strokeWidth="2" fill="none" strokeLinejoin="round" />
    <rect x="118" y="16" width="84" height="42" rx="2" stroke="#1a1a2e" strokeWidth="1.5" fill="none" />    
    <path d="M100 68 Q160 76, 220 68" stroke="#1a1a2e" strokeWidth="2" fill="none" strokeLinecap="round"/>
    {/* code lines inside screen */}
    <line x1="126" y1="26" x2="152" y2="26" stroke="#1a1a2e" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>
    <line x1="130" y1="33" x2="162" y2="33" stroke="#1a1a2e" strokeWidth="1.5" strokeLinecap="round" opacity="0.35"/>
    <line x1="130" y1="40" x2="155" y2="40" stroke="#1a1a2e" strokeWidth="1.5" strokeLinecap="round" opacity="0.35"/>
    <line x1="126" y1="47" x2="148" y2="47" stroke="#1a1a2e" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>
    {/* coffee cup */}
    <path d="M56 38 L56 58 Q56 64, 62 64 L76 64 Q82 64, 82 58 L82 38" stroke="#1a1a2e" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
    <path d="M82 44 Q92 44, 92 52 Q92 58, 82 58" stroke="#1a1a2e" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
    <path d="M64 34 Q66 26, 62 20" stroke="#1a1a2e" strokeWidth="1" fill="none" strokeLinecap="round" opacity="0.4"/>
    <path d="M72 32 Q74 24, 70 18" stroke="#1a1a2e" strokeWidth="1" fill="none" strokeLinecap="round" opacity="0.4"/>
    {/* stars / sparkles */}
    <path d="M240 20 L242 16 L244 20 L248 22 L244 24 L242 28 L240 24 L236 22Z" stroke="#1a1a2e" strokeWidth="1" fill="none" opacity="0.4"/>
    <path d="M260 44 L261 41 L262 44 L265 45 L262 46 L261 49 L260 46 L257 45Z" stroke="#1a1a2e" strokeWidth="1" fill="none" opacity="0.3"/>
    {/* QR code doodle */}
    <rect x="244" y="54" width="16" height="16" rx="1" stroke="#1a1a2e" strokeWidth="1.2" fill="none" opacity="0.5"/>
    <rect x="247" y="57" width="4" height="4" stroke="#1a1a2e" strokeWidth="0.8" fill="#1a1a2e" opacity="0.3"/>
    <rect x="253" y="57" width="4" height="4" stroke="#1a1a2e" strokeWidth="0.8" fill="none" opacity="0.3"/>
    <rect x="247" y="63" width="4" height="4" stroke="#1a1a2e" strokeWidth="0.8" fill="none" opacity="0.3"/>
    <rect x="253" y="63" width="4" height="4" stroke="#1a1a2e" strokeWidth="0.8" fill="#1a1a2e" opacity="0.3"/>
    {/* arrow */}
    <path d="M30 50 Q38 32, 50 38" stroke="#1a1a2e" strokeWidth="1" fill="none" strokeLinecap="round" opacity="0.25"/>
    <path d="M48 34 L50 38 L46 38" fill="#1a1a2e" opacity="0.25"/>
    {/* circle accent */}
    <circle cx="280" cy="30" r="8" stroke="#1a1a2e" strokeWidth="1" fill="none" strokeDasharray="3 3" opacity="0.25"/>
  </svg>
);

function App() {
  const [activeTab, setActiveTab] = useState('scan');
  const [statusMessage, setStatusMessage] = useState(null);

  const checkInTypes = [
    { value: 'first-checkin', label: 'First Check-in (Feb 13)' },
    { value: 'dinner-feb13', label: 'Dinner (Feb 13)' },
    { value: 'room-entry', label: 'Room Entry' },
    { value: 'room-exit', label: 'Room Exit' },
    { value: 'registration', label: 'Registration & Welcome' },
    { value: 'kickoff', label: 'Hackathon Kick-off' },
    { value: 'breakfast-feb14', label: 'Breakfast (Feb 14)' },
    { value: 'lunch-feb14', label: 'Lunch (Feb 14)' },
    { value: 'dinner-feb14', label: 'Dinner (Feb 14)' },
    { value: 'breakfast-feb15', label: 'Breakfast (Feb 15)' },
    { value: 'other', label: 'Other' }
  ];

  const handleCheckIn = async (participantId, participantName, checkInType) => {
    try {
      const checkInData = {
        participantId,
        participantName,
        checkInType,
        timestamp: Timestamp.now(),
        date: new Date().toLocaleDateString(),
        time: new Date().toLocaleTimeString()
      };

      await addDoc(collection(db, 'checkins'), checkInData);
      
      const label = checkInTypes.find(t => t.value === checkInType)?.label || checkInType;
      setStatusMessage({
        type: 'success',
        message: `${participantName} checked in — ${label}`
      });
      setTimeout(() => setStatusMessage(null), 3000);
    } catch (error) {
      console.error('Error checking in:', error);
      setStatusMessage({
        type: 'error',
        message: `Error: ${error.message}`
      });
      setTimeout(() => setStatusMessage(null), 5000);
    }
  };

  return (
    <div className="app-container">
      <div className="header">
        <HeaderDoodle />
        <h1>Hackathon <span className="hl">Check-In</span></h1>
        <p className="header-sub">Feb 13 – 15, 2026</p>
      </div>

      <div className="main-card">
        <div className="tabs">
          <button
            className={`tab-button ${activeTab === 'scan' ? 'active' : ''}`}
            onClick={() => setActiveTab('scan')}
          >
            QR Scan
          </button>
          <button
            className={`tab-button ${activeTab === 'manual' ? 'active' : ''}`}
            onClick={() => setActiveTab('manual')}
          >
            Manual
          </button>
          <button
            className={`tab-button ${activeTab === 'admin' ? 'active' : ''}`}
            onClick={() => setActiveTab('admin')}
          >
            Dashboard
          </button>
        </div>

        {statusMessage && (
          <div className={`status-message ${statusMessage.type}`}>
            {statusMessage.message}
          </div>
        )}

        {activeTab === 'scan' && (
          <QRScanner onCheckIn={handleCheckIn} checkInTypes={checkInTypes} />
        )}
        {activeTab === 'manual' && (
          <ManualEntry onCheckIn={handleCheckIn} checkInTypes={checkInTypes} />
        )}
        {activeTab === 'admin' && (
          <AdminDashboard checkInTypes={checkInTypes} />
        )}
      </div>
    </div>
  );
}

export default App;
