import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SITE } from '../../core/site.config';
import { ContactDetails } from '../../shared/contact-details';
import { PageHero } from '../../shared/page-hero';

@Component({
  selector: 'app-terms',
  imports: [RouterLink, PageHero, ContactDetails],
  template: `
    <app-page-hero eyebrow="Legal" title="Terms of Use" [lead]="'Last updated: ' + updated" />
    <section class="section">
      <div class="container container--narrow prose">
        <p>By using this website you agree to these terms. If you do not agree, please do not use the site.</p>

        <h2>About this website</h2>
        <p>This website provides general information about OCCPL SOFTECH and its software products and services. Nothing on it is an offer or a binding commitment. Any project or product supply is governed by a separate written agreement.</p>

        <h2>Product information and mockups</h2>
        <p>Interface images on this website are illustrations and are labelled as such. Product descriptions may change as the software evolves. Please confirm current capabilities with us before relying on them.</p>

        <h2>Acceptable use</h2>
        <ul>
          <li>Do not attempt to disrupt, probe or gain unauthorised access to the website or its systems.</li>
          <li>Do not submit unlawful, misleading or automated bulk content through the enquiry form.</li>
        </ul>

        <h2>Intellectual property</h2>
        <p>The OCCPL SOFTECH name, logo, design and content on this website belong to OCCPL SOFTECH or its licensors. You may not copy or reuse them without permission.</p>

        <h2>Enquiries and privacy</h2>
        <p>Information you submit is handled as described in our <a routerLink="/privacy">Privacy Policy</a>.</p>

        <h2>Disclaimer and liability</h2>
        <p>The website is provided "as is" without warranties of any kind. To the extent permitted by law, OCCPL SOFTECH is not liable for losses arising from your use of the website or reliance on its content.</p>

        <h2>Third-party links</h2>
        <p>The website may link to third-party sites. We are not responsible for their content or practices.</p>

        <h2>Governing law</h2>
        <p>These terms are governed by the laws of India.</p>

        <h2>Changes and contact</h2>
        <p>We may update these terms and will change the date above when we do. Questions? <a routerLink="/contact">Contact us</a>.</p>
        <app-contact-details />
      </div>
    </section>
  `,
})
export class TermsPage {
  protected readonly updated = SITE.legalUpdated;
}
