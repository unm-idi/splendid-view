import { Component, Input } from '@angular/core';

@Component({
  selector: 'sv-radio-button',
  templateUrl: './radio-button.html',
  styleUrls: ['./radio-button.scss']
})
export class SVRadioButtonComponent {
  @Input() value: string;
}
