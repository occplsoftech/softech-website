import { MockupVariant } from '../../shared/mockup';

/**
 * All copy for /products/logistics lives here so content can change without touching the page.
 *
 * RULES FOR EDITING
 *  - Only list a feature in `features` once it exists in the shipped product.
 *  - Do not add pricing, integrations, certifications or deployment claims until confirmed.
 *  - `details` and the extra `features` below were written from the courier-service module notes (items marked DONE).
 *    Re-check them against the product before changing or extending them.
 *  - To use a real screenshot, set `src` (file under public/images/) and `alt`; the mockup is then replaced.
 */
export interface Feature { icon: string; title: string; text: string }
export interface DetailGroup { icon: string; title: string; items: string[] }
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
    { icon: 'chart', title: 'Branch wallet', text: 'Each branch books against a prepaid balance, with a ledger of every credit and debit.' },
    { icon: 'file', title: 'E-way bill rules', text: 'Above an invoice value you set, a validated e-way bill is needed before the tracking number is generated.' },
    { icon: 'mail', title: 'Customer messages', text: 'Shipment updates on WhatsApp, SMS and email, with templates you can switch on or off per event.' },
    { icon: 'clock', title: 'Follow-up tasks', text: 'Branch teams track work that needs manual action, with due dates and rescheduling.' },
  ] as Feature[],
  details: [
    {
      icon: 'box', title: 'Booking and pricing',
      items: [
        'Book with sender and receiver details; customers are saved so repeat bookings are quicker.',
        'Prices come from your own rate cards: route, service type, package type, payment mode and weight slabs.',
        'A company-level freight grid by distance range and weight range, with a factor for each cell.',
        'Charges and GST are worked out at booking, with an optional insurance charge.',
        'Branches book against a prepaid wallet, so the balance and the ledger always agree.',
      ],
    },
    {
      icon: 'hub', title: 'Branches and hubs',
      items: [
        'In-scan shipments as they arrive at a branch or hub.',
        'Sort onto load sheets by delivery branch, including shipments that pass through a hub on the way.',
        'Out-scan and dispatch to the next location, with every movement recorded.',
        'Print load sheets and trip hire challans, with the vehicle used.',
        'See which shipments are at a hub right now.',
      ],
    },
    {
      icon: 'camera', title: 'Delivery and proof',
      items: [
        'Choose a delivery person, tick the shipments in-scanned at your branch and generate the delivery run sheet.',
        'Print the run sheet for the delivery person.',
        'Capture a delivery photo as proof of delivery.',
        'Photos are checked automatically and held for review before they are accepted.',
        'Upload up to 50 delivery photos at once; each is matched to its shipment.',
      ],
    },
    {
      icon: 'mail', title: 'Customers and messages',
      items: [
        'A customer master for individual and business customers.',
        'Messages on WhatsApp, SMS and email when shipment events happen.',
        'Switch each message on or off per event, per channel.',
        "Each customer's own channel preference is respected.",
        'Sending needs your own WhatsApp, SMS or email provider account to be connected.',
      ],
    },
    {
      icon: 'users', title: 'Control and visibility',
      items: [
        'Roles such as company admin, branch manager, hub manager, operator, delivery staff and read-only viewer.',
        "Each company's data is kept separate from every other company's.",
        'Login history, active sessions and a trail of who changed what, and when.',
        'Follow-up tasks for branch teams, with due dates and rescheduling.',
      ],
    },
    {
      icon: 'file', title: 'Rules and settings',
      items: [
        'Above an invoice value you set, a validated e-way bill is required before the tracking number is generated.',
        'At or below that value an e-way bill is optional but can still be recorded.',
        'Your admin changes settings such as that limit without waiting for a software update.',
        'Supporting documents can be attached to the e-way bill record.',
      ],
    },
  ] as DetailGroup[],
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
    { q: 'Is our data kept separate from other companies?', a: 'Yes. The software is built for many companies on one platform, and each company\'s data is kept separate from every other company\'s.' },
    { q: 'Can customers get shipment updates?', a: 'The software can send updates on WhatsApp, SMS and email when shipment events happen. Sending uses your own provider account for each channel, which has to be connected for your company.' },
    { q: 'Can we see it before deciding?', a: 'Yes. Send a demo request and we will arrange a walkthrough.' },
    { q: 'Can OCCPL SOFTECH build something beyond the product?', a: 'Yes. We also build custom software, integrations and automation. See our solutions page.' },
  ],
};
