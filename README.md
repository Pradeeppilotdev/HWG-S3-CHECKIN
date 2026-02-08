# 🎉 Hackathon Check-In App

A QR code-based check-in system for hackathon events with a Google Doodle-inspired UI and Firebase backend.

## ✨ Features

- 📱 **QR Code Scanning**: Quick check-in using camera
- ✍️ **Manual Entry**: Backup entry method
- 📊 **Admin Dashboard**: Real-time statistics and check-in list
- 🎨 **Google Doodle Theme**: Beautiful, playful UI
- ⏱️ **Timestamp Logging**: Precise time tracking for all check-ins
- 📥 **CSV Export**: Download check-in data
- 🔥 **Firebase Integration**: Real-time database

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- Firebase account
- Modern web browser with camera support

### Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Configure Firebase:**
   - Go to [Firebase Console](https://console.firebase.google.com/)
   - Create a new project
   - Enable Firestore Database
   - Copy your Firebase configuration
   - Update `src/firebase.js` with your config:

   ```javascript
   const firebaseConfig = {
     apiKey: "YOUR_API_KEY",
     authDomain: "YOUR_AUTH_DOMAIN",
     projectId: "YOUR_PROJECT_ID",
     storageBucket: "YOUR_STORAGE_BUCKET",
     messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
     appId: "YOUR_APP_ID"
   };
   ```

3. **Set up Firestore Rules:**
   Go to Firestore Database → Rules and add:
   ```
   rules_version = '2';
   service cloud.firestore {
     match /databases/{database}/documents {
       match /checkins/{document=**} {
         allow read, write: if true;
       }
     }
   }
   ```
   *Note: For production, implement proper security rules*

4. **Start the development server:**
   ```bash
   npm run dev
   ```

5. **Open your browser:**
   Navigate to `http://localhost:3000`

## 📋 Check-In Types

The app supports the following check-in types:

### Main Check-ins:
- **Feb 13 - First Check-in**: Initial participant registration
- **Feb 13 - Dinner Check**: Dinner attendance tracking

### Optional Check-ins:
- **Room Entry/Exit**: Track room access (can be enabled/disabled)

### Event-Specific:
- Registration & Welcome
- Hackathon Kick-off
- Breakfast (Day 2 & 3)
- Lunch (Day 2)
- Dinner (Day 2)

## 📱 Usage

### For Participants:

1. Generate QR codes using the format: `participantId|participantName`
   - Example: `101|John Doe`
   - You can use the QR code generator tool (see below)

2. Present QR code at check-in stations

### For Organizers:

1. **QR Scan Tab:**
   - Select check-in type
   - Click "Start Scanning"
   - Point camera at participant's QR code

2. **Manual Entry Tab:**
   - Enter participant ID and name
   - Select check-in type
   - Click "Check In"

3. **Dashboard Tab:**
   - View real-time statistics
   - Filter by check-in type
   - Export data to CSV
   - Refresh to see latest data

## 🎨 QR Code Generator

Create a simple HTML file to generate QR codes for participants:

```html
<!DOCTYPE html>
<html>
<head>
  <title>QR Code Generator</title>
  <script src="https://cdn.jsdelivr.net/npm/qrcode@1.5.3/build/qrcode.min.js"></script>
</head>
<body>
  <h1>Participant QR Code Generator</h1>
  <input type="text" id="participantId" placeholder="Participant ID">
  <input type="text" id="participantName" placeholder="Participant Name">
  <button onclick="generate()">Generate QR Code</button>
  <div id="qrcode"></div>
  
  <script>
    function generate() {
      const id = document.getElementById('participantId').value;
      const name = document.getElementById('participantName').value;
      const data = `${id}|${name}`;
      
      document.getElementById('qrcode').innerHTML = '';
      QRCode.toCanvas(document.createElement('canvas'), data, { width: 300 }, function (error, canvas) {
        if (error) console.error(error);
        document.getElementById('qrcode').appendChild(canvas);
      });
    }
  </script>
</body>
</html>
```

## 🏗️ Project Structure

```
checkin/
├── src/
│   ├── components/
│   │   ├── QRScanner.jsx       # QR code scanning component
│   │   ├── ManualEntry.jsx     # Manual check-in form
│   │   └── AdminDashboard.jsx  # Admin dashboard
│   ├── App.jsx                 # Main app component
│   ├── App.css                 # Google Doodle themed styles
│   ├── firebase.js             # Firebase configuration
│   └── main.jsx                # Entry point
├── index.html
├── package.json
└── vite.config.js
```

## 🎯 Hackathon Schedule

**Day 1 - Feb 13, 2026:**
- 3:00 PM - Registration & Welcome
- 8:00 PM - Problem Statement Breakdown
- 8:10 PM - Dinner
- 9:00 PM - Hackathon Kick-off

**Day 2 - Feb 14, 2026:**
- 8:00 AM - Breakfast
- 9:30 AM - Progress Review 1
- 1:00 PM - Lunch
- 8:00 PM - Dinner

**Day 3 - Feb 15, 2026:**
- 6:00 AM - Progress Review 2 (Final Judging Starts)
- 8:00 AM - Breakfast
- 9:00 PM - Hackathon Ends & Judging Continues

## 🔐 Security Notes

⚠️ **Important:** The default Firestore rules allow public access for easy setup. For production:

1. Implement authentication
2. Add proper security rules
3. Validate data on the server
4. Use environment variables for Firebase config

## 🛠️ Technologies Used

- **React** - UI framework
- **Vite** - Build tool
- **Firebase/Firestore** - Backend & database
- **html5-qrcode** - QR code scanning
- **CSS3** - Google Doodle themed styling

## 📱 Browser Compatibility

- Chrome/Edge (Recommended)
- Firefox
- Safari (iOS 11+)
- Requires camera permissions for QR scanning

## 🐛 Troubleshooting

**Camera not working?**
- Ensure browser has camera permissions
- Use HTTPS (required for camera access)
- Try a different browser

**Check-ins not appearing?**
- Check Firebase configuration
- Verify Firestore rules
- Check browser console for errors

**QR codes not scanning?**
- Ensure good lighting
- Hold QR code steady
- Try manual entry as backup

## 📄 License

MIT License - Feel free to use for your hackathon!

## 🤝 Support

For issues or questions, check the browser console for error messages and verify your Firebase setup.

---

Built with ❤️ for an amazing hackathon experience!
