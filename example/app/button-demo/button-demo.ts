import { Component } from '@angular/core';

@Component({
  selector: 'sv-button-demo',
  templateUrl: './button-demo.html',
  styleUrls: ['./button-demo.scss']
})
export class ButtonDemoComponent {
  loadingFlag = false;
  alternateStateFlag = false;

  clickTest() {
    window.alert('You clicked a button!');
  }

  loadingStateTest() {
    this.loadingFlag = true;
    setTimeout(() => {
      this.loadingFlag = false;
    }, 3000);
  }

  alternateStateTest() {
    this.alternateStateFlag = true;
    setTimeout(() => {
      this.alternateStateFlag = false;
    }, 3000);
  }
}
