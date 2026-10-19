import { MockupVariant } from '../../shared/mockup';

/**
 * All copy for /products/logistics lives here so content can change without touching the page.
 *
 * RULES FOR EDITING
 *  - Only list a feature in `features` once it exists in the shipped product.
 *  - Do not add pricing, integrations, certifications or deployment claims until confirmed.
 *  - To use a real screenshot, set `src` (file under public/images/) and `alt`; the mockup is then replaced.
 */
export interface Feature { icon: string; title: string; text: string }
export interface Screen { variant: MockupVariant; title: string; caption: string; src?: string; alt?: string }

export const LOGISTICS = {
  intro: {
    eyebrow: 'Product',
    title: 'Courier & Logistics Management Software',
    lead: 'Smarter courier operations. Better business visibility. Software built around the way logistics companies work.',
    body: 'One system for the daily work of a courier business: booking shipments, moving them through branches and hubs, running deliveries and recording proof of delivery. It is already operating at a client business.',
  },
  problems: [
    { title: 'Work scattered across tools', text: 'Bookings in one place, manifests in another and delivery updates over the phone make it hard to know where a consignment is.' },
    { title: 'Little visibility across branches', text: 'Owners and managers struggle to see what is happening at each branch and hub without chasing people for updates.' },
    { title: 'Manual paperwork', text: 'Receipts, load sheets and delivery run sheets prepared by hand are slow to produce and easy to get wrong.' },
    { title: 'Delivery disputes', text: 'Without recorded proof of delivery, resolving a "was it delivered?" question takes time and goodwill.' },
  ],
  features: [
    { icon: 'box', title: 'Shipment booking', text: 'Create and track consignments with sender, receiver and pincode-based routing.' },
    { icon: 'hub', title: 'Branch and hub operations', text: 'Model your branches and hubs, with in-scan, out-scan and sorting at hubs.' },
    { icon: 'truck', title: 'Load sheets and trip hire challans', text: 'Group shipments for movement between locations and record the vehicle used.' },
    { icon: 'route', title: 'Delivery run sheets', text: 'Assign shipments to delivery staff for last-mile runs.' },
    { icon: 'camera', title: 'Proof of delivery', text: 'Record delivery evidence and review it before it is accepted.' },
    { icon: 'file', title: 'Printable documents', text: 'Generate booking receipts, load sheets and delivery run sheets for printing.' },
    { icon: 'tag', title: 'Rate and pricing masters', text: 'Maintain rate and pricing data used when shipments are priced.' },
    { icon: 'shield', title: 'Role-based access', text: 'Control what each user can see and do by role and branch.' },
  ] as Feature[],
  screens: [
    { variant: 'dashboard', title: 'Operations dashboard', caption: 'An overview of shipment activity.' },
    { variant: 'shipments', title: 'Shipment list', caption: 'Find and follow consignments.' },
    { variant: 'loadsheet', title: 'Load sheet', caption: 'Move shipments between locations.' },
  ] as Screen[],
  workflow: [
    { title: 'Book', text: 'A shipment is booked at a branch and given a tracking number.' },
    { title: 'Load & move', text: 'Shipments are grouped onto a load sheet and moved to the next branch or hub.' },
    { title: 'Scan in', text: 'Each location scans shipments in, so their position is always recorded.' },
    { title: 'Deliver', text: 'A delivery run is assigned to delivery staff for the final leg.' },
    { title: 'Confirm', text: 'Proof of delivery is captured and reviewed.' },
  ],
  profiles: [
    { title: 'Courier and parcel companies', text: 'Operators booking and delivering consignments for business and individual customers.' },
    { title: 'Multi-branch logistics operators', text: 'Businesses coordinating several branches and hubs who need shared visibility.' },
    { title: 'Transport and distribution businesses', text: 'Teams moving goods between locations with their own or hired vehicles.' },
  ],
  implementation: [
    { title: 'Understand your operation', text: 'We learn your branches, routes, documents and roles before configuring anything.' },
    { title: 'Configure for you', text: 'Your branches, users, roles and pricing data are set up to reflect how you work.' },
    { title: 'Validate with your team', text: 'Your staff try real scenarios and we adjust before going live.' },
    { title: 'Launch and support', text: 'We go live with your team, then continue to support and improve the system.' },
  ],
  faqs: [
    { q: 'Is the software available now?', a: 'Yes. It is running at a client business today, and we are working on a second logistics implementation.' },
    { q: 'Can it be adapted to our way of working?', a: 'Every operation is different. In a demo and discovery conversation we look at your workflow and tell you honestly what fits as it is and what would need customisation.' },
    { q: 'How is it priced and deployed?', a: 'This depends on your size and requirements, so we discuss it directly. Request a demo and we will go through the options with you.' },
    { q: 'Can we see it before deciding?', a: 'Yes. Send a demo request and we will arrange a walkthrough.' },
    { q: 'Can OCCPL SOFTECH build something beyond the product?', a: 'Yes. We also build custom software, integrations and automation. See our solutions page.' },
  ],
};
