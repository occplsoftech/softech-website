# OCCPL SOFTECH website

Angular 22, prerendered to static HTML (standalone components, Reactive Forms, lazy routes, SCSS). No runtime dependencies beyond Angular.

Routes: `/`, `/products`, `/products/logistics`, `/solutions`, `/about`, `/contact`, `/privacy`, `/terms` (+ 404).

## Run / build / test
```
npm install
npm start          # http://localhost:4200
npm run build      # -> dist/softech-website/browser
npm test
```

## Configuration (no rebuild needed)
Edit `public/config.json` (served as `/config.json`, never cached). Nothing here may be a secret.

| Key | Meaning |
|---|---|
| `enquiryEndpoint` | URL that accepts the enquiry JSON POST. **Empty = form refuses to send and says so.** |
| `turnstileSiteKey` | Cloudflare Turnstile *public* site key. Empty = widget off. |
| `contactEmail` | Shown on /contact as a mailto link. Empty = hidden. |

Build-time constants (site URL, product name, nav, legal date) are in `src/app/core/site.config.ts`.
Set `SITE.product.brandName` when the product gets a final name.

## Contact form
- Client validation, accessible labels/errors, loading / success / failure states.
- Success is shown **only** after the endpoint returns 2xx. Unconfigured, offline, 4xx/5xx and 429 all show a failure message.
- Spam strategy: hidden honeypot field (`website`), minimum-fill-time check, and the platform's rate limit (5 per minute per IP).
- Consent checkbox links to /privacy. The platform's public lead intake has no consent field, so the consent time is not stored with the lead.

### How enquiries reach the OCCPL platform
The form posts to `/api/leads` on this site (`enquiryEndpoint` in `public/config.json`). Caddy on the server forwards that to the
platform's public lead intake, `POST /api/v1/public/leads` (see `docs/LEADS_API.md` in the OCCPL repository). It needs no token, creates a
`NEW` lead with source `Website` and emails the sender a confirmation. Body sent by `EnquiryService`:
```json
{ "companyName": "", "contactName": "", "email": "", "phone": "optional", "productInterest": "Product Demo", "message": "" }
```
`202` = received, `400` = invalid, `429` = more than 5 per minute from one IP.

Caddy block (in the `www` site block of the platform's `Caddyfile`, before the static `file_server`):
```
@leads { path /api/leads
         method POST }
handle @leads {
	request_body { max_size 20KB }
	rewrite * /api/v1/public/leads
	reverse_proxy core-platform:8080
}
```

## Deployment
Fully static site: every route is prerendered to HTML (`/about/index.html`, etc.), so no server code and no SPA fallback are needed. Any static host works (S3/CloudFront, Netlify, Cloudflare Pages, nginx). Configure the host to serve `404.html` for missing paths.
- Docker: `docker build -t softech-site . && docker run -p 8080:80 softech-site` (nginx.conf included, SPA fallback + caching).
- EC2 (automatic): `.github/workflows/deploy.yml` builds on every push to `main` and rsyncs `dist/softech-website/browser` to `/opt/occpl/site/` on the server, where Caddy serves it. Needs repo secrets `EC2_HOST`, `EC2_USER`, `EC2_SSH_KEY` and `EC2_KNOWN_HOSTS`.
- GitHub Pages (manual alternative): run `.github/workflows/deploy-pages.yml` from the Actions tab after setting **Settings → Pages → Source: GitHub Actions**.
- Otherwise upload the contents of `dist/softech-website/browser`.
- Domain: canonical/sitemap/OG URLs assume `https://www.occplsoftech.com` (`SITE.url`, `src/index.html`, `public/sitemap.xml`, `public/robots.txt`). Change all of them if different; point DNS at the host and enable HTTPS.

## Updating content
- Logistics page copy, features, FAQs, screenshots: `src/app/pages/logistics/logistics.content.ts`. Set `src` on a screen to swap a mockup for a real image in `public/images/`.
- Solutions and process: `src/app/core/solutions.data.ts`.
- Per-page title/description: `data.seo` in `src/app/app.routes.ts`.
- Social image: `public/og-image.png` (1200x630).

## Known gaps / to confirm
- Form endpoint, Turnstile key and contact email are unset.
- Logistics feature list is derived from the product's modules; confirm before publishing and add pricing/deployment only when decided.
- Legal pages are standard drafts; have them reviewed. No analytics installed; add only behind a consent banner, then track `enquiry success` events.
- All interface visuals are labelled illustrative mockups.
