import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SvNotificationsOverlayComponent } from './notifications-overlay';
import { SvNotificationsService } from './notifications.service';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [ BrowserModule, BrowserAnimationsModule, CommonModule ],
  exports: [ SvNotificationsOverlayComponent ],
  declarations: [ SvNotificationsOverlayComponent ],
  providers: [],
  entryComponents: [ SvNotificationsOverlayComponent ]
})
export class SvNotificationsModule {
  static forRoot() {
    return {
      ngModule: SvNotificationsModule,
      providers: [ SvNotificationsService ]
    }
  }
}
