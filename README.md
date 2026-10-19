# SKRA Tech website

Angular 22, prerendered to static HTML (standalone components, Reactive Forms, lazy routes, SCSS). No runtime dependencies beyond Angular.

Routes: `/`, `/products`, `/products/logistics`, `/solutions`, `/about`, `/contact`, `/privacy`, `/terms` (+ 404).

## Run / build / test
```
npm install
npm start          # http://localhost:4200
npm run build      # -> dist/skra-tech-website/browser
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
- Spam strategy: hidden honeypot field, minimum-fill-time check, optional Turnstile, plus server-side rate limiting (required).
- Consent checkbox links to /privacy; `consentAt` is sent with the lead.

### Server contract
`POST <enquiryEndpoint>` with `Content-Type: application/json`:
```json
{ "fullName": "", "company": "", "email": "", "phone": "", "enquiryType": "product-demo|custom-software|saas-development|integration|other",
  "message": "", "consent": true, "consentAt": "ISO-8601", "source": "contact", "turnstileToken": "optional" }
```
Return `2xx` only once the lead is stored/forwarded; `429` when rate limited; any other non-2xx is treated as failure.
The server MUST re-validate every field, verify `turnstileToken` with Cloudflare's siteverify using the *secret* key (kept server-side), and allow CORS from the site origin.
The backend in the courier repo (`/api/v1/leads`) is tied to the Amazing Logistics tenant and its own request shape, so it is **not** reused; either add a SKRA endpoint or use a form provider (e.g. Formspree) that accepts JSON.

## Deployment
Fully static site: every route is prerendered to HTML (`/about/index.html`, etc.), so no server code and no SPA fallback are needed. Any static host works (S3/CloudFront, Netlify, Cloudflare Pages, nginx). Configure the host to serve `404.html` for missing paths.
- Docker: `docker build -t skra-site . && docker run -p 8080:80 skra-site` (nginx.conf included, SPA fallback + caching).
- Otherwise upload the contents of `dist/skra-tech-website/browser`.
- Domain: canonical/sitemap/OG URLs assume `https://skra.in` (`SITE.url`, `public/sitemap.xml`, `public/robots.txt`). Change all three if different; point DNS at the host and enable HTTPS.

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
