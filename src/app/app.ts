import { Component } from '@angular/core';
import { EnquiryComponent } from './enquiry/enquiry';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [EnquiryComponent],
  template: `<app-enquiry></app-enquiry>`
})
export class AppComponent {}