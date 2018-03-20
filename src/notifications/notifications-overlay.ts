import { Component } from '@angular/core';
import { Toast, NotificationType } from './toast';

import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

import fontawesome from '@fortawesome/fontawesome';
import { faCheckCircle } from '@fortawesome/fontawesome-free-regular';
import { faInfoCircle, faExclamationCircle, faExclamationTriangle } from '@fortawesome/fontawesome-free-solid';
fontawesome.library.add(faCheckCircle, faInfoCircle, faExclamationCircle, faExclamationTriangle);

@Component({
  selector: 'sv-notifications-overlay',
  templateUrl: 'notifications-overlay.html',
  styleUrls: ['notifications-overlay.scss'],
  animations: [
    trigger('toastAnimation', [
      // Desktop
      transition("void => show", [
        style({opacity: 0, transform: 'translateX(100%)'}),
        animate(
          "250ms ease-out",
          style({opacity: 1, transform: 'translateX(0)'})
        )
      ]),
      transition("show => void", [
        style({ opacity: 1, transform: 'translateX(0)' }),
        animate(
          "250ms ease-out",
          style({ opacity: 0, transform: 'translateX(100%)' }),
        )
      ]),
      // Mobile
      transition("void => showMobile", [
        style({ opacity: 0, transform: 'translateY(-100%)' }),
        animate(
          "250ms ease-out",
          style({ opacity: 1, transform: 'translateY(0)' })
        )
      ]),
      transition("showMobile => void", [
        style({ opacity: 1, transform: 'translateY(0)' }),
        animate(
          "250ms ease-out",
          style({ opacity: 0, transform: 'translateY(-100%)' }),
        )
      ])
    ])
  ],
})

export class SvNotificationsOverlayComponent {
  // Array of toast to display
  private toast = [];
  timeouts = [];

  constructor() { }

  addToast(type: NotificationType, message: string, list: Array<string>, userOptions: object) {
    let options = {duration: 3000, dismissible: true, icon: true}
    if (userOptions) {
      for (let k of Object.keys(userOptions)) {
        options[k] = userOptions[k]
      }
    }

    const t = new Toast(type, message, list, options);
    this.toast.unshift(t);

    setTimeout(() => {
      this.removeToast(t.id);
    }, options.duration);
  }

  dismissToast(t: Toast) {
    if (t.options['dismissible']) { this.removeToast(t.id) }
  }

  removeToast(id) {
    const index = this.toast.findIndex(x => {return x.id == id});
    this.toast.splice(index, 1);
  }

  toastState() {
    if (window.outerWidth > 720) {
      return 'show'
    } else {
      return 'showMobile';
    }
  }
}