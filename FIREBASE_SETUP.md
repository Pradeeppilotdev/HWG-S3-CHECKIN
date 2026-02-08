# Firebase Setup Instructions

## Step 1: Create Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Add project"
3. Enter project name: `hackathon-checkin` (or your preferred name)
4. Disable Google Analytics (optional for this project)
5. Click "Create project"

## Step 2: Set Up Firestore Database

1. In the Firebase Console, click "Firestore Database" in the left sidebar
2. Click "Create database"
3. Select "Start in test mode" (for development)
4. Choose a location closest to your event
5. Click "Enable"

## Step 3: Configure Firestore Rules

1. Go to the "Rules" tab in Firestore
2. Replace the existing rules with:

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

3. Click "Publish"

**⚠️ Important:** These rules allow anyone to read/write. For production:
- Implement Firebase Authentication
- Update rules to require authentication
- Add data validation

## Step 4: Get Firebase Configuration

1. Click the gear icon (⚙️) next to "Project Overview"
2. Select "Project settings"
3. Scroll down to "Your apps"
4. Click the web icon (`</>`) to add a web app
5. Register app with nickname: "Hackathon Check-In Web"
6. Copy the Firebase configuration object

## Step 5: Update Your App

1. Open `src/firebase.js` in your project
2. Replace the placeholder values with your Firebase config:

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

## Step 6: Test the Connection

1. Run your app: `npm run dev`
2. Try creating a check-in (use manual entry)
3. Go back to Firebase Console → Firestore Database
4. You should see a new collection called `checkins` with your test data

## Firestore Data Structure

Your check-ins will be stored with this structure:

```
checkins (collection)
  └── [auto-generated-id] (document)
      ├── participantId: "101"
      ├── participantName: "John Doe"
      ├── checkInType: "first-checkin"
      ├── timestamp: Timestamp
      ├── date: "2/13/2026"
      └── time: "3:45:23 PM"
```

## Production Security Rules (Recommended)

For production, use these more secure rules:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /checkins/{checkinId} {
      // Allow admins to read/write (requires Authentication)
      allow read, write: if request.auth != null && 
                           request.auth.token.admin == true;
      
      // Allow anyone to create check-ins
      allow create: if request.resource.data.keys().hasAll([
        'participantId', 'participantName', 'checkInType', 'timestamp'
      ]);
    }
  }
}
```

## Enable Authentication (Optional)

For admin dashboard security:

1. Go to "Authentication" in Firebase Console
2. Click "Get started"
3. Enable "Email/Password" provider
4. Create admin users in the "Users" tab
5. Set custom claims for admin users using Firebase Admin SDK

## Monitoring Usage

- Go to "Usage" tab in Firestore to monitor reads/writes
- Free tier includes:
  - 50K reads per day
  - 20K writes per day
  - 20K deletes per day
  - 1 GB storage

## Backup Your Data

To export data:
1. Use the export feature in Firestore Console
2. Or use the CSV export button in the app's dashboard

---

🎉 Your Firebase setup is complete! The app is now ready to use.
