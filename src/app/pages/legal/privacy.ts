import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SITE } from '../../core/site.config';
import { PageHero } from '../../shared/page-hero';

@Component({
  selector: 'app-privacy',
  imports: [RouterLink, PageHero],
  template: `
    <app-page-hero eyebrow="Legal" title="Privacy Policy" [lead]="'Last updated: ' + updated" />
    <section class="section">
      <div class="container container--narrow prose">
        <p>This policy explains how SKRA Tech ("we", "us") handles personal information collected through this website.</p>

        <h2>Information we collect</h2>
        <p>When you submit the enquiry form we collect the details you provide: your name, company name, work email address, optional phone number, enquiry type and the message you write. We also record the page you submitted the form from and the time you gave consent.</p>

        <h2>How we use it</h2>
        <ul>
          <li>To respond to your enquiry and discuss products or projects with you.</li>
          <li>To keep a record of the conversation and follow up where you have asked us to.</li>
          <li>To protect the form from spam and abuse.</li>
        </ul>
        <p>We do not sell your personal information.</p>

        <h2>Consent</h2>
        <p>We ask for your consent before you submit the form. You may withdraw consent at any time by contacting us, after which we will stop using your details for follow-up, unless the law requires us to keep them.</p>

        <h2>Cookies and analytics</h2>
        <p>This website does not currently set advertising or analytics cookies. If we introduce analytics in future, we will update this policy and ask for consent where required.</p>

        <h2>Spam protection</h2>
        <p>The enquiry form may use anti-spam checks, including a hidden field, submission timing and, where enabled, a privacy-focused challenge service. These checks may process technical information such as your IP address to detect abuse.</p>

        <h2>Service providers</h2>
        <p>We may use service providers to host this website and to receive or store enquiries. They may process your information only to provide those services to us.</p>

        <h2>How long we keep it</h2>
        <p>We keep enquiry details for as long as needed to respond to you and manage any resulting relationship, and for a reasonable period afterwards, unless you ask us to delete them sooner.</p>

        <h2>Your rights</h2>
        <p>Under applicable data protection law, including India's Digital Personal Data Protection Act, 2023, you may have the right to access, correct or erase your personal information and to withdraw consent. To make a request, <a routerLink="/contact">contact us</a> and mention that it concerns privacy.</p>

        <h2>Changes</h2>
        <p>We may update this policy and will change the date above when we do.</p>
      </div>
    </section>
  `,
})
export class PrivacyPage {
  protected readonly updated = SITE.legalUpdated;
}
