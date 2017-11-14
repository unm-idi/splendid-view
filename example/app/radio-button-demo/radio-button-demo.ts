import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sv-radio-button-demo',
  templateUrl: './radio-button-demo.html',
  styleUrls: ['./radio-button-demo.scss']
})
export class SVRadioButtonDemoComponent {
  options = ['one', 'two', 'three', 'four'];
  selected = 'one';
}
