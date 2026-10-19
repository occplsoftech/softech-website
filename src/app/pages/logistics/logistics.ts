import { EFFECTS } from '../../shared/effects';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { EnquiryForm } from '../../shared/enquiry-form';
import { Icon } from '../../shared/icon';
import { Mockup } from '../../shared/mockup';
import { PageHero } from '../../shared/page-hero';
import { SectionHeading } from '../../shared/section-heading';
import { LOGISTICS } from './logistics.content';

@Component({
  selector: 'app-logistics',
  imports: [RouterLink, PageHero, SectionHeading, Icon, Mockup, EnquiryForm, ...EFFECTS],
  templateUrl: './logistics.html',
  styleUrl: './logistics.scss',
})
export class LogisticsPage {
  protected readonly c = LOGISTICS;
}
