# Vishal Singh — Portfolio

A playful, minimal portfolio for graphic designer Vishal Singh. Built with React, Vite and Framer Motion.

## Run it

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # static site in dist/
```

## Edit content

Everything you might want to change is in `src/data.js`:

- `profile`: name, email, resume link, quote
- `experience`: roles (add the internship companies and dates here)
- `projects`: title, category, blurb, slide images (`public/work/sNN.jpg` = page NN of the PDF deck)
- `archive`: Google Drive folders
- `stickers`: the draggable work stickers in the hero

`dist/` can be deployed to any static host (Vercel, Netlify, GitHub Pages).
