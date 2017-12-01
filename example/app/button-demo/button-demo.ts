import { Component } from '@angular/core';

@Component({
  selector: 'sv-button-demo',
  templateUrl: './button-demo.html',
  styleUrls: ['./button-demo.scss']
})
export class ButtonDemoComponent {
  loadingFlag = false;
  alternateState = 'button';

  clickTest() {
    // window.alert('You clicked a button!');
  }

  loadingStateTest() {
    this.loadingFlag = true;
    setTimeout(() => {
      this.loadingFlag = false;
    }, 3000);
  }

  alternateStateTest(x) {
    if (x === 0) {
      this.alternateState = 'success';
      setTimeout(() => {
        this.alternateState = 'button';
      }, 3000);
    } else {
      this.alternateState = 'error';
      setTimeout(() => {
        this.alternateState = 'success';
        setTimeout(() => {
          this.alternateState = 'button';
        }, 3000);
      }, 3000);
    }
  }
}
