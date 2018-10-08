import { Component, Input } from '@angular/core';

@Component({
  selector: 'brand-logo',
  templateUrl: './brand-logo.html'
})
export class BrandLogo {
  @Input() link: string;

  @Input() theme: 'washed' | '';
}
