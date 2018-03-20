import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { SvNotificationsService } from '../../src/notifications/notifications.service';

@Component({
  selector: 'sv-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  constructor(private buffet: SvNotificationsService) { }
}
