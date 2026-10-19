/**
 * Static, non-secret site constants. Anything that differs per environment
 * (enquiry endpoint, Turnstile site key, contact email) lives in
 * `public/config.json` so it can change without a rebuild.
 */
export const SITE = {
  name: 'OCCPL SOFTECH',
  url: 'https://skra.in',
  tagline: 'Software solutions for a smarter tomorrow',
  /** Descriptive product name. Swap `brandName` once a final name is chosen. */
  product: {
    descriptiveName: 'Courier & Logistics Management Software',
    brandName: '' as string,
  },
  nav: [
    { label: 'Home', path: '/' },
    { label: 'Products', path: '/products' },
    { label: 'Solutions', path: '/solutions' },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' },
  ],
  legalUpdated: '11 October 2026',
} as const;

export function productName(): string {
  return SITE.product.brandName || SITE.product.descriptiveName;
}

export const ENQUIRY_TYPES = [
  { value: 'product-demo', label: 'Product Demo' },
  { value: 'custom-software', label: 'Custom Software' },
  { value: 'saas-development', label: 'SaaS Development' },
  { value: 'integration', label: 'Integration' },
  { value: 'other', label: 'Other' },
] as const;

export type EnquiryType = (typeof ENQUIRY_TYPES)[number]['value'];
