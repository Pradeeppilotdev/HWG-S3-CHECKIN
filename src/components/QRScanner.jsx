import React, { useEffect, useState } from 'react';
import { Html5Qrcode } from 'html5-qrcode';

function QRScanner({ onCheckIn, checkInTypes }) {
  const [scanner, setScanner] = useState(null);
  const [isScanning, setIsScanning] = useState(false);
  const [selectedCheckInType, setSelectedCheckInType] = useState('first-checkin');
  const [lastScanned, setLastScanned] = useState(null);

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
            setTimeout(() => setLastScanned(null), 2000);
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
    try {
      const [participantId, participantName] = qrData.split('|');
      if (!participantId || !participantName) {
        alert('Invalid QR code format!');
        return;
      }
      onCheckIn(participantId, participantName, selectedCheckInType);
    } catch (error) {
      console.error('Error processing QR code:', error);
      alert('Error processing QR code!');
    }
  };

  return (
    <div className="scanner-container">
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

      <div className="scanner-hint">
        <strong>QR format:</strong> participantId|participantName<br />
        Example: 101|John Doe
      </div>
    </div>
  );
}

export default QRScanner;
