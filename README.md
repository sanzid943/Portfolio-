# Sanzid's Portfolio (Vite + React)

A React portfolio site for Md. Sanzid Mostofa, built with Vite + Tailwind CSS.

## Run it locally

```bash
npm install
npm run dev
```

Open the URL shown in the terminal (usually `http://localhost:5173`).

## Deploy to GitHub Pages

You have two easy options. **Option A (recommended)** deploys automatically
every time you push to `main`. **Option B** deploys manually whenever you run
one command.

### Option A — Automatic deploy with GitHub Actions

1. Create a new repository on GitHub (e.g. `sanzid-portfolio`) and push this
   project to it:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<your-repo>.git
   git push -u origin main
   ```
2. On GitHub, go to **Settings → Pages**.
3. Under **Build and deployment → Source**, choose **GitHub Actions**.
4. Push any change to `main` (or re-run the workflow from the **Actions** tab).
   The included workflow at `.github/workflows/deploy.yml` will build the
   site and publish it automatically.
5. Your site will be live at:
   `https://<your-username>.github.io/<your-repo>/`

### Option B — Manual deploy with `gh-pages`

1. Push the project to a GitHub repository (same as step 1 above).
2. Run:
   ```bash
   npm install
   npm run deploy
   ```
   This builds the site and pushes the `dist` folder to a `gh-pages` branch.
3. On GitHub, go to **Settings → Pages** and set the source to the
   `gh-pages` branch.
4. Your site will be live at:
   `https://<your-username>.github.io/<your-repo>/`

## Notes

- `vite.config.js` uses a relative base (`base: "./"`), so the build works
  correctly no matter what the repository name is — no need to edit it.
- The profile photo is embedded directly in `src/App.jsx` as a base64 image,
  so there's no separate image file to manage or lose track of.
- To update text content (projects, skills, education, contact info), edit
  the data arrays near the top of `src/App.jsx`.
