# How to Run ProfiVault (`how_to_run.md`)

This guide explains how to set up, run, and test both the **ProfiVault Website** (`d:\ProfiVault Web`) and the **ProfiVault Chrome Extension & Backend Monorepo** (`d:\ProfiVault`).

---

## 🗂️ Project Repositories Overview

| Repository Path | Description | Tech Stack |
|---|---|---|
| `d:\ProfiVault Web` | **Official Website & Landing Page** | React 19, TypeScript, Vite, Tailwind CSS v4, Lucide Icons |
| `d:\ProfiVault` | **Chrome Extension & Express Backend** | Chrome Extension Manifest V3, React, Express, MongoDB |

---

## 🌐 Part 1: Running the ProfiVault Website (`ProfiVault Web`)

### 1. Prerequisites
- **Node.js**: v18.0.0 or higher
- **npm**: v9.0.0 or higher

### 2. Installation
Open your terminal in the website directory:

```bash
cd "d:\ProfiVault Web"
npm install
```

### 3. Run Development Server
```bash
npm run dev
```

The Vite dev server will start locally:
- **Local URL**: `http://localhost:5173/`

### 4. Available Pages & Routes
- Home Landing Page: `http://localhost:5173/`
- Privacy Policy: `http://localhost:5173/privacy`
- Terms of Service: `http://localhost:5173/terms`
- Support Hub: `http://localhost:5173/support`
- About Page: `http://localhost:5173/about`

### 5. Build Verification
```bash
npm run build
```
This runs TypeScript compilation (`tsc -b`) and bundles the static web files into the `dist/` directory.

---

## 🔌 Part 2: Running the Chrome Extension (`ProfiVault Extension`)

The ProfiVault Chrome Extension is located in `d:\ProfiVault\extension`.

### 1. Installation & Build
```bash
cd "d:\ProfiVault\extension"
npm install
npm run build
```

### 2. Loading Unpacked Extension in Chrome
1. Open Google Chrome and navigate to `chrome://extensions`.
2. Toggle **Developer mode** ON in the top right corner.
3. Click **Load unpacked** in the top left toolbar.
4. Select the directory: `d:\ProfiVault\extension\dist` (or `d:\ProfiVault\extension\public`).
5. The ProfiVault extension icon will appear in your Chrome toolbar. Click the puzzle icon to pin it.

### 3. Running Extension Dev Watcher
```bash
cd "d:\ProfiVault\extension"
npm run dev
```

---

## ⚙️ Part 3: Running the Backend API Server (`ProfiVault Backend`)

The Express backend API server is located in `d:\ProfiVault\backend`. It handles optional Google OAuth user authentication and cloud link synchronization.

### 1. Environment Setup
Make sure you have a `.env` file in `d:\ProfiVault\backend`:

```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/ProfiVault
JWT_SECRET=your_jwt_secret_key
GOOGLE_CLIENT_ID=your_google_client_id
```

### 2. Install & Run Backend Server
```bash
cd "d:\ProfiVault\backend"
npm install
npm run dev
```

The Express server will start on:
- **Server URL**: `http://localhost:5000`

---

## 🧪 Part 4: Testing & Troubleshooting

### Interactive Extension Simulator on Website
You can test the functional extension UI mockup right on the website homepage without installing Chrome extension binaries:
1. Open `http://localhost:5173/`.
2. Scroll to the **Hero Section** or **Product Demo** section.
3. Click **"Copy"** on any sample profile link (LinkedIn, GitHub, Portfolio, Resume, LeetCode).
4. Verify that visual copy feedback ("Copied!") and the floating toast notification appear.

### Common Troubleshooting

- **Port 5173 already in use?**
  Vite will automatically attempt the next available port (e.g. `http://localhost:5174/`). Check your terminal output.
- **Chrome extension permissions warning?**
  ProfiVault uses standard Manifest V3 permissions (`storage`, `clipboardWrite`, `identity`, `activeTab`). Ensure Developer Mode is enabled in `chrome://extensions`.
- **Google Sign-In offline fallback?**
  If the backend API is offline during local extension testing, ProfiVault falls back to local storage Guest mode so you can continue using all features offline.
