# Showroom Ventures — Landing site

A considered, restrained landing page for Showroom Ventures. Built as static HTML/CSS/JS with no build step, designed to be hosted on GitHub Pages and eventually moved to a proper hosting setup with the `showroom.ventures` domain.

## What's here

```
showroom-ventures-site/
├── index.html      The page
├── styles.css      All styling
├── script.js       Light interactions (fade-up on scroll, active nav)
└── README.md       This file
```

## How to deploy to GitHub Pages

1. **Create a new GitHub repository** — e.g., `showroom-ventures` under your user account.
2. **Upload these files** to the repository root. The structure should be:
   ```
   /index.html
   /styles.css
   /script.js
   ```
   (If you copy the whole `showroom-ventures-site` folder, either flatten the contents to the repo root, or set Pages to serve from `/showroom-ventures-site` — see step 3.)
3. **Enable GitHub Pages**:
   - Repository → Settings → Pages
   - Source: Deploy from a branch
   - Branch: `main` (or `master`), folder: `/ (root)` or `/showroom-ventures-site` depending on where you put the files
   - Save
4. **Wait 2–3 minutes** for the first deployment. GitHub will give you a URL like `https://your-username.github.io/showroom-ventures/`.

## Using the showroom.ventures domain

Once you've registered the domain:

1. In your DNS provider, add these records pointing to GitHub Pages:
   - `A` records for `@` (apex domain) pointing to:
     - `185.199.108.153`
     - `185.199.109.153`
     - `185.199.110.153`
     - `185.199.111.153`
   - `CNAME` record for `www` pointing to `your-username.github.io`
2. In the repository, add a file called `CNAME` (no extension) at the root containing just:
   ```
   showroom.ventures
   ```
3. In GitHub Pages settings, add the custom domain `showroom.ventures` and enable "Enforce HTTPS".
4. Allow 24 hours for DNS to propagate and certificates to issue.

## Editing the content

All text lives in `index.html`. The structure is:
- Hero — top of page, the headline and lede
- Section 01 — The thesis (problem and motivation)
- Section 02 — The Showroom Path (four phases)
- Section 03 — Partnership (with TYIF)
- Section 04 — Principles (six core commitments)
- Section 05 — Contact (email + status)
- Footer — Acknowledgment of Country and meta

Edit text directly in `index.html`. The visual style adapts to most reasonable content changes without needing CSS edits.

## Editing the design

`styles.css` is documented and uses CSS custom properties at the top for:
- Colours (background, ink, accent rust, rules)
- Typography (font families, sizing)
- Layout (max width, gutters, section padding)

To change the accent colour, edit `--accent` and `--accent-deep` at the top of `styles.css`.

To change the fonts, update the Google Fonts `<link>` in `index.html` and the `--font-serif` / `--font-sans` variables in `styles.css`.

## Honest considerations before publishing

A few things worth being deliberate about before this site goes live on the public internet:

1. **TYIF approval.** The page references "in partnership with The Youth Impact Foundation" prominently. TYIF hasn't yet formally approved this partnership. Either:
   - Hold off on publishing until TYIF has formally endorsed at least the Phase 1 pilot, or
   - Soften the partnership references to something like "in development with TYIF support" or "exploring partnership with TYIF" until the Framework Agreement is formally agreed.
2. **Email address.** `hello@showroom.ventures` is referenced as the contact. You'll need to either set this up (via Google Workspace, Fastmail, or similar — about $6–10 AUD/month) or change it to a personal email or contact form before publishing.
3. **Public visibility while pre-incorporation.** The footer notes that this is early-stage development and not yet an incorporated entity. That's honest and protective. Keep that disclosure visible until incorporation is complete.
4. **Your TYIF employment relationship.** Publishing a public-facing Showroom Ventures site while you are a TYIF employee is something to be deliberate about, ideally with TYIF's knowledge and blessing. Consider whether to publish privately (a non-indexed page accessible by direct link only) for the first 3–6 months while you have those conversations.

## Recommended next steps for the site itself

Once the v1 is live and the partnership is formalised:

- Add an "About" page with the thesis in long form.
- Add a "Partnership" page describing the Framework Agreement at appropriate depth.
- Add real founder stories (Phase 3 founders, once they exist), with consent and editorial protection.
- Add an Annual Impact Report download once the first one is produced.
- Add a careers page when hiring begins.
- Move from static HTML to a content management setup (Eleventy, Astro, or Hugo) once the editing workload justifies it.

For now, the v1 above does the job: it establishes the brand, articulates the thesis, and gives you a concrete artefact to share in early conversations.
