import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ContactDetails } from '../../shared/contact-details';
import { PageHero } from '../../shared/page-hero';

/**
 * Privacy policy for the Courier Pro Android app (Play Store listing link).
 * Keep in step with what the app actually does: permissions, data handled,
 * no analytics or ads SDKs. Changing the app's data use means updating this
 * page and the Play Console Data safety form together.
 */
@Component({
  selector: 'app-courier-pro-privacy',
  imports: [RouterLink, PageHero, ContactDetails],
  template: `
    <app-page-hero eyebrow="Legal" title="Courier Pro Privacy Policy" [lead]="'Last updated: ' + updated" />
    <section class="section">
      <div class="container container--narrow prose">
        <p>
          This policy explains how the <strong>Courier Pro</strong> Android app ("the app"), published by OCCPL SOFTECH
          Private Limited ("OCCPL SOFTECH", "we", "us"), handles personal information.
        </p>

        <h2>Who the app is for</h2>
        <p>
          Courier Pro is a work app for the branch staff of courier and logistics companies that use OCCPL SOFTECH's
          courier management software ("the courier company"). Accounts are created by the courier company for its own
          staff; the app has no public sign-up. It is not intended for children.
        </p>
        <p>
          The courier company decides what shipment and customer information is recorded and why. OCCPL SOFTECH provides
          and operates the software on the courier company's behalf.
        </p>

        <h2>Information the app handles</h2>
        <h3>Staff account</h3>
        <ul>
          <li>Name, email address and mobile number, company, branch, role and permissions, used to sign in and to show only what your role allows.</li>
          <li>Sign-in tokens, kept in encrypted storage on the device, and a random identifier for the installation so the courier company can see which devices are signed in.</li>
        </ul>
        <h3>Shipments</h3>
        <ul>
          <li>Sender and receiver names, phone numbers and addresses, pincodes, package details (quantity, weight, size), declared and invoice values, E-Way Bill details, service, payment mode and charges.</li>
          <li>Loading sheets, trip hire challans (THC), delivery run sheets (DRS), vehicle and driver details, and the movement history of each shipment.</li>
        </ul>
        <h3>Branch wallet and payments</h3>
        <ul>
          <li>Wallet balance, recharges, top-up requests (amount, remarks and the proof-of-payment photo you attach), manual credits and debits, and the wallet ledger, so the branch can prepay for courier services and keep receipts.</li>
          <li>
            Wallet recharges are paid through <strong>Razorpay</strong>, the payment processor. Card, UPI, net banking and
            wallet details are entered in Razorpay's own checkout and go directly to Razorpay; the app and our servers never
            see or store them. We keep the amount, the Razorpay order and payment IDs, the payment status and the date.
            Razorpay's checkout may collect device details to prevent payment fraud, as described in
            <a href="https://razorpay.com/privacy/" target="_blank" rel="noopener">Razorpay's privacy policy</a>.
          </li>
        </ul>
        <h3>Proof of delivery</h3>
        <ul>
          <li>Delivery photos taken with the camera or chosen from the photo gallery, the receiver's signature drawn on the screen, the receiver's name, remarks and the delivery time.</li>
          <li>For a failed delivery: the reason (for example, customer not available) and remarks.</li>
        </ul>
        <h3>Barcode and QR scanning</h3>
        <p>
          The camera is used to read shipment barcodes and QR codes. The image is processed on the device using Google ML
          Kit; only the scanned value (such as an AWB or shipment number) is sent to the courier company's server to look up
          the shipment. Camera images are not sent to Google. Google ML Kit may send Google limited technical information
          (such as device model and performance of the scanner) to maintain and improve the service, as described in
          Google's ML Kit terms.
        </p>

        <h2>What the app does not collect</h2>
        <ul>
          <li>Location. The app does not read your location. When you tap Navigate, the delivery address is opened in your maps app, which is covered by that app's own policy.</li>
          <li>Contacts, call logs, SMS, files outside what you choose to attach, or the advertising ID.</li>
          <li>Analytics or advertising data. The app contains no advertising or analytics software.</li>
          <li>Card numbers, CVV, UPI PIN or bank passwords. These are entered only in Razorpay's checkout.</li>
        </ul>

        <h2>Permissions</h2>
        <ul>
          <li><strong>Camera</strong>: to scan shipment barcodes and QR codes and to take proof-of-delivery photos. Used only when you open the scanner or take a photo.</li>
          <li><strong>Internet and network status</strong>: to talk to the courier company's server and to tell you when you are offline.</li>
          <li><strong>NFC and basic phone state</strong>: added by Razorpay's checkout for tap-to-pay cards and UPI payments. They are used only during a payment and cannot read your phone number, calls or messages.</li>
        </ul>
        <p>Choosing a photo from the gallery uses Android's photo picker, which gives the app only the photo you pick.</p>

        <h2>How the information is used</h2>
        <ul>
          <li>To run courier operations: booking, tracking, loading, dispatch, receiving, delivery and proof of delivery.</li>
          <li>To work out charges and produce labels, loading sheets, THC, DRS and POD documents.</li>
          <li>To recharge and manage the branch wallet and issue wallet receipts.</li>
          <li>To control access by role and branch, keep an audit trail and prevent misuse.</li>
        </ul>
        <p>We do not sell personal information and do not use it for advertising.</p>

        <h2>Who can see it</h2>
        <ul>
          <li>Authorised staff of the courier company, limited by their role and branch.</li>
          <li>The sender and receiver of a shipment, through the courier company's tracking page and notifications (tracking shows a limited view).</li>
          <li>Service providers that host the software and store files, and messaging providers the courier company uses for shipment notifications. They process information only to provide those services.</li>
          <li>Razorpay, to process wallet recharge payments.</li>
          <li>Authorities, where the law requires it.</li>
        </ul>
        <p>Documents you print or share from the app go only where you choose to send them.</p>

        <h2>Security</h2>
        <p>
          Information is sent over encrypted connections (HTTPS). Sign-in tokens are stored encrypted on the device and
          sessions expire. Access is limited by role and branch, and actions such as bookings, dispatches and deliveries are
          logged.
        </p>

        <h2>How long information is kept</h2>
        <p>
          Shipment records, proof-of-delivery photos and signatures are kept for as long as the courier company needs them
          for its operations, customer queries, billing and disputes, and for as long as the law requires (for example,
          tax and accounting records). Staff account details are kept while the account is active and removed or
          anonymised after it is closed, except where records must be kept by law. Information stored on the device (the
          sign-in token) is removed when you sign out or uninstall the app; a booking you are still typing is kept only while the app is open.
        </p>

        <h2>Your choices and rights</h2>
        <p>
          Under applicable law, including India's Digital Personal Data Protection Act, 2023, you may ask to access,
          correct or erase your personal information. Staff can ask their courier company's administrator, or contact us.
          To delete a Courier Pro account, see <a routerLink="/courier-pro/delete-account">how to delete your account and data</a>.
          Senders and receivers should contact the courier company that handled the shipment.
        </p>

        <h2>Contact</h2>
        <app-contact-details />

        <h2>Changes</h2>
        <p>We may update this policy when the app changes and will change the date above when we do.</p>
      </div>
    </section>
  `,
})
export class CourierProPrivacyPage {
  protected readonly updated = '26 October 2026';
}
