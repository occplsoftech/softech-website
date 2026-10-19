export interface Solution {
  id: string;
  icon: string;
  title: string;
  kind: 'Product' | 'Capability';
  summary: string;
  detail: string;
  fits: string[];
  type: string; // matches an ENQUIRY_TYPES value
  link?: string;
}

export const SOLUTIONS: Solution[] = [
  {
    id: 'logistics',
    icon: 'truck',
    title: 'Logistics Software',
    kind: 'Product',
    summary: 'Courier and logistics management software for companies that move parcels through branches and hubs.',
    detail: 'Our first product covers day-to-day courier operations, from booking a shipment to proof of delivery. It is available now and already runs at a client business.',
    fits: ['Courier and parcel companies', 'Multi-branch distribution businesses', 'Operators who want one system instead of spreadsheets and disconnected tools'],
    type: 'product-demo',
    link: '/products/logistics',
  },
  {
    id: 'custom',
    icon: 'code',
    title: 'Custom Business Software',
    kind: 'Capability',
    summary: 'Software designed around your own workflows when off-the-shelf tools do not fit.',
    detail: 'We work with you to understand how your business actually runs, then design, build and support software that matches it.',
    fits: ['Processes that depend on spreadsheets, paper or manual hand-offs', 'Teams whose needs are not covered by standard packages', 'Businesses that want to own a system shaped to their operations'],
    type: 'custom-software',
  },
  {
    id: 'saas',
    icon: 'cloud',
    title: 'SaaS Product Development',
    kind: 'Capability',
    summary: 'Help turning a software idea into a multi-user product that can serve many customers.',
    detail: 'We build the architecture, interface and back end for web-based products, with attention to the foundations that matter later: access control, data separation and maintainability.',
    fits: ['Founders and businesses productising an internal tool', 'Teams that need an engineering partner for a new product', 'Products that must support several customer organisations'],
    type: 'saas-development',
  },
  {
    id: 'automation',
    icon: 'flow',
    title: 'Business Process Automation',
    kind: 'Capability',
    summary: 'Replace repetitive manual work with reliable, auditable workflows.',
    detail: 'We identify the steps that consume the most time or cause the most errors, then automate them in a way your team can understand and adjust.',
    fits: ['Repetitive data entry and re-keying between systems', 'Approvals and hand-offs that get stuck', 'Reporting that is assembled by hand'],
    type: 'custom-software',
  },
  {
    id: 'integration',
    icon: 'plug',
    title: 'API Integrations & System Modernization',
    kind: 'Capability',
    summary: 'Connect the systems you already use, and update ageing software without disrupting the business.',
    detail: 'We build integrations between systems and plan staged modernization of legacy applications, so improvements land without a risky big-bang switch.',
    fits: ['Systems that do not share data with each other', 'Legacy software that is hard to change or support', 'Businesses that want to add modern interfaces to an existing back end'],
    type: 'integration',
  },
];

export const PROCESS = [
  { n: '01', title: 'Discover', text: 'Understand business workflows, requirements, and challenges.' },
  { n: '02', title: 'Design', text: 'Plan the user experience, architecture, and solution.' },
  { n: '03', title: 'Build', text: 'Develop, test, and validate the software.' },
  { n: '04', title: 'Launch & Evolve', text: 'Deploy, support, and improve the solution.' },
];
