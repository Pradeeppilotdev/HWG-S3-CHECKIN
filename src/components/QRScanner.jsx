import React, { useEffect, useState } from 'react';
import { Html5Qrcode } from 'html5-qrcode';
import { findParticipantById } from '../data/participants';
import CheckInTypeDropdown from './CheckInTypeDropdown';

function QRScanner({ onCheckIn, checkInTypes }) {
  const [scanner, setScanner] = useState(null);
  const [isScanning, setIsScanning] = useState(false);
  const [selectedCheckInType, setSelectedCheckInType] = useState('first-checkin');
  const [lastScanned, setLastScanned] = useState(null);
  const [scannedParticipant, setScannedParticipant] = useState(null);

  useEffect(() => {
    return () => {
      if (scanner) {
        scanner.stop().catch(err => console.error('Error stopping scanner:', err));
      }
    };
  }, [scanner]);

  const startScanning = async () => {
    try {
      const html5QrCode = new Html5Qrcode('qr-reader');
      setScanner(html5QrCode);

      await html5QrCode.start(
        { facingMode: 'environment' },
        { fps: 10, qrbox: { width: 250, height: 250 } },
        (decodedText) => {
          if (decodedText !== lastScanned) {
            setLastScanned(decodedText);
            handleQRCodeScanned(decodedText);
            setTimeout(() => setLastScanned(null), 3000);
          }
        },
        () => {}
      );
      setIsScanning(true);
    } catch (err) {
      console.error('Error starting scanner:', err);
      alert('Failed to start camera. Please ensure camera permissions are granted.');
    }
  };

  const stopScanning = async () => {
    if (scanner) {
      try {
        await scanner.stop();
        setIsScanning(false);
        setScanner(null);
      } catch (err) {
        console.error('Error stopping scanner:', err);
      }
    }
  };

  const handleQRCodeScanned = (qrData) => {
    const id = qrData.trim();
    const participant = findParticipantById(id);

    if (!participant) {
      setScannedParticipant(null);
      alert(`Unknown ID: ${id}\nNot found in participant list.`);
      return;
    }

    setScannedParticipant(participant);
    onCheckIn(participant.id, participant.name, selectedCheckInType);
  };

  return (
    <div className="scanner-container">
      <div className="input-group">
        <label>Check-in type</label>
        <CheckInTypeDropdown
          checkInTypes={checkInTypes}
          value={selectedCheckInType}
          onChange={setSelectedCheckInType}
        />
      </div>

      <div id="qr-reader"></div>

      <div className="scanner-actions">
        {!isScanning ? (
          <button className="btn btn-primary" onClick={startScanning} style={{ flex: 1 }}>
            Start Scanning
          </button>
        ) : (
          <button className="btn btn-secondary" onClick={stopScanning} style={{ flex: 1 }}>
            Stop Scanning
          </button>
        )}
      </div>

      {scannedParticipant && (
        <div className="scanned-info">
          <strong>{scannedParticipant.name}</strong>
          <span className="scanned-team">{scannedParticipant.team}</span>
          <span className="scanned-id">{scannedParticipant.id}</span>
          {scannedParticipant.isLead && <span className="lead-badge">Team Lead</span>}
        </div>
      )}

      <div className="scanner-hint">
        Point camera at participant QR badge
      </div>
    </div>
  );
}

export default QRScanner;
