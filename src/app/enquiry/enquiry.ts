import { Component, AfterViewInit, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-enquiry',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './enquiry.html',
  styleUrls: ['./enquiry.css']
})
export class EnquiryComponent implements AfterViewInit {

  constructor(private el: ElementRef) {}

  enquiry = {
    branch: '',
    transportMode: 'Sea',
    container: '',
    shipper: '',
    origin: '',
    originType: 'FCL',
    orgName: '',
    plannedContainer: '',
    containerBranch: '',
    containerTransportMode: 'Air',
    direction: 'Export',
    shipmentDate: '',
    shipmentType: '',
    destinationETA: '',
    freightTerms: 'Third Party',
    cargoDesc: '',
    packages: '',
    grossWeight: '',
    netWeight: '',
    volume: '',
    volumeType: 'Cartons',
    commodityCode: '',
    crossTrade: false,
    domestic: false,
    temperatureControl: false,
    hazardous: true,
    freightType: 'Third Party',
  };

  

  ngAfterViewInit() {
    const inputs = this.el.nativeElement.querySelectorAll(
      'input, textarea, select'
    );

    inputs.forEach((input: HTMLElement, index: number) => {
      input.addEventListener('keydown', (event: any) => {

        if (event.key === 'Enter' || event.key === 'ArrowDown') {
          event.preventDefault();
          if (index < inputs.length - 1) {
            (inputs[index + 1] as HTMLElement).focus();
          }
        }

        if (event.key === 'ArrowUp') {
          event.preventDefault();
          if (index > 0) {
            (inputs[index - 1] as HTMLElement).focus();
          }
        }

      });
    });
  }

  cancel() {
    Object.keys(this.enquiry).forEach(key => {
      (this.enquiry as any)[key] = '';
    });
  }

saveDraft() {
  localStorage.setItem('freightDraft', JSON.stringify(this.enquiry));

  alert('Draft Saved Successfully ✅');

}


  submit() {
    console.log(this.enquiry);
    alert('Submitted');
  }

  generateQuote() {
    alert('Quote Generated');
  }
}
