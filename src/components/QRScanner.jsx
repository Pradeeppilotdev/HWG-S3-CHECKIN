import React, { useEffect, useState, useRef } from 'react';
import { Html5Qrcode } from 'html5-qrcode';
import { findParticipantById } from '../data/participants';
import CheckInTypeDropdown from './CheckInTypeDropdown';

function QRScanner({ onCheckIn, checkInTypes }) {
  const [scanner, setScanner] = useState(null);
  const [isScanning, setIsScanning] = useState(false);
  const [selectedCheckInType, setSelectedCheckInType] = useState('first-checkin');
  const [pendingParticipant, setPendingParticipant] = useState(null);
  const [processing, setProcessing] = useState(false);
  const scanLockRef = useRef(false);

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
          if (!scanLockRef.current) {
            scanLockRef.current = true;
            handleQRCodeScanned(decodedText);
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
        scanLockRef.current = false;
        setPendingParticipant(null);
      } catch (err) {
        console.error('Error stopping scanner:', err);
      }
    }
  };

  const handleQRCodeScanned = (qrData) => {
    const id = qrData.trim();
    const participant = findParticipantById(id);

    if (!participant) {
      setPendingParticipant(null);
      alert(`Unknown ID: ${id}\nNot found in participant list.`);
      scanLockRef.current = false;
      return;
    }

    // Show confirmation popup instead of immediately checking in
    setPendingParticipant(participant);
  };

  const handleConfirm = async () => {
    if (!pendingParticipant || processing) return;
    setProcessing(true);
    await onCheckIn(pendingParticipant.id, pendingParticipant.name, selectedCheckInType);
    setProcessing(false);
    setPendingParticipant(null);
    // Unlock scanning after a brief delay to prevent instant re-scan
    setTimeout(() => { scanLockRef.current = false; }, 1500);
  };

  const handleDecline = () => {
    setPendingParticipant(null);
    // Unlock scanning after a brief delay
    setTimeout(() => { scanLockRef.current = false; }, 500);
  };

  const checkInLabel = checkInTypes.find(t => t.value === selectedCheckInType)?.label || selectedCheckInType;

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

      {/* ── Confirmation Popup ── */}
      {pendingParticipant && (
        <div className="confirm-overlay" onClick={handleDecline}>
          <div className="confirm-card" onClick={e => e.stopPropagation()}>
            <div className="confirm-header">Confirm Check-in</div>
            <div className="confirm-body">
              <div className="confirm-name">{pendingParticipant.name}</div>
              <div className="confirm-detail">{pendingParticipant.team}</div>
              <div className="confirm-detail">{pendingParticipant.id}</div>
              <div className="confirm-badges">
                {pendingParticipant.isLead && <span className="lead-badge">Team Lead</span>}
                {pendingParticipant.snacksOnly && <span className="lead-badge" style={{ background: '#e67e22' }}>Snacks Only</span>}
              </div>
              <div className="confirm-prefs">
                <span>{pendingParticipant.food === 'veg' ? '🟢 Veg' : '🔴 Non-Veg'}</span>
                <span style={{ marginLeft: 12 }}>
                  {pendingParticipant.bev === 'coffee' ? '☕ Coffee' : pendingParticipant.bev === 'tea' ? '🍵 Tea' : '— None'}
                </span>
              </div>
              <div className="confirm-checkin-type">→ {checkInLabel}</div>
            </div>
            <div className="confirm-actions">
              <button className="btn btn-secondary" onClick={handleDecline} disabled={processing}>
                Decline
              </button>
              <button className="btn btn-primary" onClick={handleConfirm} disabled={processing}>
                {processing ? 'Processing…' : 'Confirm ✓'}
              </button>
            </div>
          </div>
        </div>
      )}

      {!pendingParticipant && (
        <div className="scanner-hint">
          Point camera at participant QR badge
        </div>
      )}
    </div>
  );
}

export default QRScanner;
