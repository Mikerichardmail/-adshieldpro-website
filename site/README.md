# Chrome Extension Website

This is a small static marketing website for a Chrome extension.

## Pages

- `index.html` (landing)
- `privacy.html`
- `support.html`

## Customize

Search and replace these placeholders:

- `Your Extension Name`
- `support@example.com`
- `https://github.com/your/repo/issues`
- Chrome Web Store link: `https://chromewebstore.google.com/`

## Preview locally

Option 1: open `index.html` directly in your browser.

Option 2 (recommended): run a local static server from this folder.

Example (Python):

```bash
python -m http.server 5173
```

Then open:

- http://localhost:5173/

## Deploy

Because this is a static site, you can deploy it to:

- GitHub Pages
- Netlify
- Vercel
- Cloudflare Pages

Upload the contents of this folder as the site root.
