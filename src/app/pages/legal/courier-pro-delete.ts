import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ContactDetails } from '../../shared/contact-details';
import { PageHero } from '../../shared/page-hero';

/** Account and data deletion for the Courier Pro app (Play Console "Delete account URL"). */
@Component({
  selector: 'app-courier-pro-delete',
  imports: [RouterLink, PageHero, ContactDetails],
  template: `
    <app-page-hero
      eyebrow="Courier Pro"
      title="Delete your Courier Pro account and data"
      lead="For staff accounts in the Courier Pro app by OCCPL SOFTECH."
    />
    <section class="section">
      <div class="container container--narrow prose">
        <h2>How to ask for deletion</h2>
        <ol>
          <li>Ask your company's Courier Pro administrator to close your account, <strong>or</strong></li>
          <li>Email <strong>support&#64;occplsoftech.com</strong> from the email address on your account, with the subject
            "Delete my Courier Pro account", and include your name, company name and mobile number.</li>
        </ol>
        <p>We confirm the request with your company, since your account belongs to your employer, and reply within 30 days.</p>

        <h2>What is deleted</h2>
        <ul>
          <li>Your staff account: name, email address, mobile number, role and permissions.</li>
          <li>Your sign-in sessions and registered devices.</li>
        </ul>

        <h2>What is kept, and for how long</h2>
        <ul>
          <li>
            Shipment, delivery and proof-of-delivery records you created stay with your company, because they are its
            business records and some must be kept by law (for example, tax and accounting records). They are kept only for
            as long as your company or the law requires; your name on them may be anonymised.
          </li>
          <li>Audit logs of actions you took are kept for security and legal reasons for the period the law requires.</li>
        </ul>

        <h2>Data on your phone</h2>
        <p>Signing out of the app, or uninstalling it, removes your sign-in token from the phone.</p>

        <p>More detail is in the <a routerLink="/privacy/courier-pro">Courier Pro privacy policy</a>.</p>

        <h2>Contact</h2>
        <app-contact-details />
      </div>
    </section>
  `,
})
export class CourierProDeletePage {}
