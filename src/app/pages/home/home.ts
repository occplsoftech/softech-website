import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PROCESS, SOLUTIONS } from '../../core/solutions.data';
import { Icon } from '../../shared/icon';
import { Mockup } from '../../shared/mockup';
import { EFFECTS } from '../../shared/effects';
import { NetworkArt } from '../../shared/network-art';
import { SectionHeading } from '../../shared/section-heading';
import { EnquiryForm } from '../../shared/enquiry-form';

@Component({
  selector: 'app-home',
  imports: [RouterLink, Icon, Mockup, SectionHeading, EnquiryForm, NetworkArt, ...EFFECTS],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class HomePage {
  protected readonly solutions = SOLUTIONS;
  protected readonly process = PROCESS;
  protected readonly marquee = ['Courier Management', 'Logistics Software', 'Custom Software', 'SaaS Development', 'Process Automation', 'API Integrations', 'System Modernization'];
  protected readonly bas = [
    { word: 'Build', text: 'Custom software and SaaS products, designed around your workflows and engineered to be maintained for years.' },
    { word: 'Automate', text: 'Repetitive manual work replaced by reliable workflows, and integrations that connect the systems you already use.' },
    { word: 'Scale', text: 'Architecture and operations that keep working as your branches, users and volumes grow.' },
  ];
  protected readonly pills = ['Shipment booking', 'Branch & hub operations', 'Load sheets', 'Delivery runs', 'Proof of delivery', 'Role-based access'];
  protected readonly proof = [
    { icon: 'check', title: 'Delivered and operating', text: 'A logistics software solution built by OCCPL SOFTECH is running at a client business today.' },
    { icon: 'route', title: 'Another logistics project underway', text: 'We are currently working on a second logistics implementation for a different client.' },
    { icon: 'users', title: 'A small, focused team', text: 'You work with the engineers who design and build your software.' },
  ];
  protected readonly why = [
    { icon: 'tag', title: 'Real-world problem solving', text: 'We start from how your operation actually runs, not from a feature checklist.' },
    { icon: 'layers', title: 'Scalable architecture', text: 'Foundations chosen so the software can grow with more users, locations and workflows.' },
    { icon: 'users', title: 'Practical user experience', text: 'Interfaces built for the people doing the work every day, not just for demos.' },
    { icon: 'code', title: 'Maintainable engineering', text: 'Clear, tested code that can be supported and extended over the long term.' },
    { icon: 'mail', title: 'Transparent communication', text: 'Plain updates on progress, trade-offs and decisions throughout a project.' },
    { icon: 'chart', title: 'Ongoing improvement', text: 'Launch is a starting point. We keep refining based on how the software is used.' },
  ];
}
