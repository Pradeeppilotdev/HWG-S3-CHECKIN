# 🚀 Deployment Guide

## Quick Deployment Options

### Option 1: Firebase Hosting (Recommended)

Firebase Hosting is free and integrates seamlessly with your Firebase project.

1. **Install Firebase CLI:**
   ```bash
   npm install -g firebase-tools
   ```

2. **Login to Firebase:**
   ```bash
   firebase login
   ```

3. **Initialize Firebase in your project:**
   ```bash
   firebase init
   ```
   - Select "Hosting"
   - Choose your existing Firebase project
   - Set public directory to: `dist`
   - Configure as single-page app: `Yes`
   - Set up automatic builds: `No`

4. **Build your app:**
   ```bash
   npm run build
   ```

5. **Deploy:**
   ```bash
   firebase deploy
   ```

Your app will be live at: `https://your-project-id.web.app`

### Option 2: Vercel

1. **Install Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

2. **Deploy:**
   ```bash
   npm run build
   vercel --prod
   ```

Follow the prompts to complete deployment.

### Option 3: Netlify

1. **Install Netlify CLI:**
   ```bash
   npm install -g netlify-cli
   ```

2. **Build and deploy:**
   ```bash
   npm run build
   netlify deploy --prod --dir=dist
   ```

### Option 4: GitHub Pages

1. **Install gh-pages:**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Add to package.json scripts:**
   ```json
   {
     "scripts": {
       "deploy": "npm run build && gh-pages -d dist"
     }
   }
   ```

3. **Update vite.config.js:**
   ```javascript
   export default defineConfig({
     base: '/your-repo-name/',
     // ... rest of config
   })
   ```

4. **Deploy:**
   ```bash
   npm run deploy
   ```

## Pre-Deployment Checklist

- [ ] Firebase configuration updated in `src/firebase.js`
- [ ] Firestore rules configured properly
- [ ] Test all features locally
- [ ] Generate QR codes for all participants
- [ ] Test QR scanning with real devices
- [ ] Check mobile responsiveness
- [ ] Test on different browsers
- [ ] Export test data to verify CSV export works

## HTTPS Requirement

⚠️ **Important:** Camera access requires HTTPS. All the deployment options above provide HTTPS by default.

For local testing:
- `localhost` works without HTTPS
- Use `ngrok` for external device testing:
  ```bash
  npm install -g ngrok
  npm run dev
  # In another terminal:
  ngrok http 3000
  ```

## Environment Variables (Optional)

For better security, use environment variables:

1. **Create `.env` file:**
   ```
   VITE_FIREBASE_API_KEY=your_api_key
   VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
   VITE_FIREBASE_PROJECT_ID=your_project_id
   ```

2. **Update `src/firebase.js`:**
   ```javascript
   const firebaseConfig = {
     apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
     authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
     // ... etc
   };
   ```

3. **Add environment variables to your hosting platform**

## Production Optimizations

### 1. Enable Caching
Add to `firebase.json`:
```json
{
  "hosting": {
    "headers": [{
      "source": "**/*.@(jpg|jpeg|gif|png|svg|webp|js|css|woff2)",
      "headers": [{
        "key": "Cache-Control",
        "value": "max-age=31536000"
      }]
    }]
  }
}
```

### 2. Add Custom Domain (Firebase Hosting)
```bash
firebase hosting:channel:deploy live --only hosting
```

Then add your custom domain in Firebase Console.

### 3. Performance Monitoring
Add Firebase Performance Monitoring:
```bash
npm install firebase
```

Update `src/firebase.js`:
```javascript
import { getPerformance } from 'firebase/performance';
const perf = getPerformance(app);
```

## Monitoring & Analytics

### View Check-ins in Real-time
Access the admin dashboard at: `your-domain.com`

### Export Data
Use the CSV export button in the dashboard.

### Firebase Console
Monitor usage and data at: https://console.firebase.google.com

## Troubleshooting Deployment

**Build fails:**
- Check for TypeScript/ESLint errors
- Ensure all dependencies are installed
- Verify Firebase config is correct

**Camera doesn't work on deployed site:**
- Ensure site is served over HTTPS
- Check browser permissions
- Test on different devices

**Firestore connection fails:**
- Verify Firebase config
- Check Firestore rules
- Ensure project ID matches

## Post-Deployment

1. **Test checklist:**
   - [ ] QR scanning works
   - [ ] Manual entry works
   - [ ] Dashboard displays data
   - [ ] CSV export works
   - [ ] Mobile responsive
   - [ ] Works on multiple browsers

2. **Share the URL** with your check-in staff

3. **Print QR codes** for all participants

4. **Backup plan:** Manual entry is always available

## Day-of-Event Checklist

- [ ] Staff devices fully charged
- [ ] App URL bookmarked on all devices
- [ ] Test check-in before event starts
- [ ] Backup device ready
- [ ] QR codes printed and organized
- [ ] Admin credentials available
- [ ] Dashboard accessible for monitoring

---

🎉 Ready to rock your hackathon check-in system!
