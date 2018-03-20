import { Component } from '@angular/core';
import { SvNotificationsService } from '../../../src/notifications/notifications.service';
import { NotificationType } from '../../../src/notifications/toast';

@Component({
  selector: 'sv-button-demo',
  templateUrl: './button-demo.html',
  styleUrls: ['./button-demo.scss']
})
export class ButtonDemoComponent {
  loadingFlag = false;
  alternateState = 'button';

  constructor(private ns: SvNotificationsService) {

  }

  clickTest() {
    const type = ['info', 'success', 'warning', 'error'][Math.floor(Math.random() * 4)] as NotificationType;
    if (Math.random() > 0.5) {
      this.ns.addToast(type, 'I\'m an awesome toast!');
    } else {
      this.ns.addListToast(type, 'Something might not be right:', ['This is a problem', 'So is this'], {duration: 5000, dismissible: false});
    }
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
