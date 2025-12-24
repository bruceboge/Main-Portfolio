# Portfolio Deployment Guide

Your portfolio is now ready for deployment! It is a **Static Website**, meaning it consists purely of HTML, CSS, and JavaScript.

## Files to Deploy

When deploying, make sure to upload or include the following files and folders from your project root:

- `index.html` (Main entry point)
- `style.css` (Styles)
- `script.js` (Logic)
- `images/` (Folder containing all your images)

## How to Deploy

### Option 1: GitHub Pages (Recommended)

1. Push this folder to a GitHub repository.
2. Go to **Settings > Pages**.
3. Select the `main` branch as the source.
4. Your site will be live at `https://your-username.github.io/repo-name`.

### Option 2: Netlify / Vercel

1. Drag and drop this folder into the Netlify or Vercel dashboard.
2. It will deploy instantly.

### Option 3: Traditional Hosting (cPanel/FTP)

1. Upload the files listed above to your `public_html` folder using File Manager or FTP.

## Updating Content

To add new projects or blog posts in the future:

1. Edit `index.html` directly.
2. Locate the project or blog list.
3. Copy an existing `<li>` item and update the text and image links.
4. Redeploy `index.html`.
