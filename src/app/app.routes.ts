import { Routes } from '@angular/router';
import { PageSeo } from './core/seo.service';

const seo = (s: PageSeo) => ({ seo: s });

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () => import('./pages/home/home').then((m) => m.HomePage),
    data: seo({
      title: 'SKRA Tech | Software Products & Custom Business Solutions',
      description:
        'SKRA Tech builds practical, scalable software products and custom business solutions, including courier and logistics management software, SaaS applications and business automation.',
    }),
  },
  {
    path: 'products',
    loadComponent: () => import('./pages/products/products').then((m) => m.ProductsPage),
    data: seo({
      title: 'Software Products',
      description:
        'Software products from SKRA Tech, starting with courier and logistics management software built around how logistics companies actually work.',
    }),
  },
  {
    path: 'products/logistics',
    loadComponent: () => import('./pages/logistics/logistics').then((m) => m.LogisticsPage),
    data: seo({
      title: 'Courier & Logistics Management Software',
      description:
        'Courier and logistics management software covering shipment booking, branch and hub operations, load sheets, delivery runs and proof of delivery. Request a demo.',
    }),
  },
  {
    path: 'solutions',
    loadComponent: () => import('./pages/solutions/solutions').then((m) => m.SolutionsPage),
    data: seo({
      title: 'Solutions',
      description:
        'Custom software development, SaaS product development, business process automation, API integrations and system modernization from SKRA Tech.',
    }),
  },
  {
    path: 'about',
    loadComponent: () => import('./pages/about/about').then((m) => m.AboutPage),
    data: seo({
      title: 'About',
      description:
        'SKRA Tech is an engineering-led software product and custom development company. Learn how we work and what we are building.',
    }),
  },
  {
    path: 'contact',
    loadComponent: () => import('./pages/contact/contact').then((m) => m.ContactPage),
    data: seo({
      title: 'Contact',
      description:
        'Tell SKRA Tech about your operational challenges or software requirements, or request a product demo.',
    }),
  },
  {
    path: 'privacy',
    loadComponent: () => import('./pages/legal/privacy').then((m) => m.PrivacyPage),
    data: seo({ title: 'Privacy Policy', description: 'How SKRA Tech collects, uses and protects personal information submitted through this website.' }),
  },
  {
    path: 'terms',
    loadComponent: () => import('./pages/legal/terms').then((m) => m.TermsPage),
    data: seo({ title: 'Terms of Use', description: 'Terms governing use of the SKRA Tech website.' }),
  },
  {
    path: '**',
    loadComponent: () => import('./pages/not-found/not-found').then((m) => m.NotFoundPage),
    data: seo({ title: 'Page not found', description: 'The page you were looking for does not exist.', noindex: true }),
  },
];
