# Genesis Patient Gateway — Vercel & GitHub Deployment Package

**Organization:** Genesis Healthcare and Medical Tourism J.S.C (*شركة جنيسيس للرعاية الصحية والسياحة العلاجية ش.م.م*)  
**Official Website Reference:** [https://www.genesisegypt.com/](https://www.genesisegypt.com/)  

This archive contains the complete, ready-to-deploy Vite + React + Tailwind CSS source code for the **Genesis Patient Gateway** prototype, pre-configured for **1-click deployment on Vercel** or **automatic deployment on GitHub Pages**.

---

## Option A: Deploy to Vercel (Fastest — 2 Minutes)

### Method 1: Via GitHub + Vercel Dashboard (Recommended for sharing with Genesis Management)
1. Unzip this folder on your computer.
2. Create a new repository on [GitHub](https://github.com/new) (e.g. `genesis-patient-gateway`).
3. Inside the unzipped folder, open a terminal and push the files to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Genesis Patient Gateway prototype"
   git branch -M main
   git remote add origin https://github.com/<your-username>/genesis-patient-gateway.git
   git push -u origin main
   ```
4. Go to [https://vercel.com/new](https://vercel.com/new), sign in with GitHub, and click **Import** next to `genesis-patient-gateway`.
5. Vercel will automatically detect **Vite** (`vercel.json` is already included). Click **Deploy** — within ~45 seconds you will receive a live shareable `https://genesis-patient-gateway.vercel.app` link!

### Method 2: Direct Upload via Vercel CLI (No GitHub required)
1. Unzip this folder and open a terminal inside it.
2. Run:
   ```bash
   npx vercel
   ```
3. Follow the prompts in your terminal to get an instant live preview link.

---

## Option B: Deploy to GitHub Pages (Automatic via Included GitHub Action)

We have included `.github/workflows/deploy.yml` and set `base: './'` in `vite.config.js` so GitHub Pages works automatically:

1. Push this unzipped folder to a GitHub repository on the `main` branch (steps 1–3 above).
2. In your GitHub repository, go to **Settings → Pages**.
3. Under **Build and deployment → Source**, select **GitHub Actions**.
4. The workflow will automatically build the app and publish it to `https://<your-username>.github.io/<repo-name>/`.

---

## Option C: Run Locally on Your Computer

```bash
# 1. Install dependencies (Requires Node.js 18+)
npm install

# 2. Start local development server
npm run dev

# 3. Build production bundle (outputs to ./dist)
npm run build
```

---

## Included Project Structure

```text
├── .github/workflows/deploy.yml   # Automated GitHub Pages deployment action
├── .gitignore                     # Standard Node/Vite gitignore
├── index.html                     # HTML entry point with Manrope & Cairo fonts
├── package.json                   # React 18, Vite 5, Tailwind CSS, Lucide icons
├── postcss.config.js              # PostCSS configuration
├── tailwind.config.js             # Genesis brand design tokens (#01A9A0, #F79321, #0B1C30)
├── vercel.json                    # Vercel SPA routing & build configuration
├── vite.config.js                 # Vite bundler config with relative base path
├── README.md                      # Deployment & handover documentation
└── src/
    ├── App.jsx                    # Complete Genesis Patient Gateway application (with embedded images)
    ├── index.css                  # Tailwind CSS imports
    └── main.jsx                   # React DOM root mount
```
