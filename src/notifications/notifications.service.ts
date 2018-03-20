import { Injectable, ComponentFactoryResolver, ApplicationRef, Injector, EmbeddedViewRef } from '@angular/core';
import { SvNotificationsOverlayComponent } from './notifications-overlay';
import { NotificationType } from './toast';

@Injectable()
export class SvNotificationsService {

  private notificationOverlay: SvNotificationsOverlayComponent;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private appRef: ApplicationRef,
    private injector: Injector
  ) {
    // Append notifications overlay component to body
    const componentRef = this.componentFactoryResolver.resolveComponentFactory(SvNotificationsOverlayComponent).create(this.injector);
    this.appRef.attachView(componentRef.hostView);
    const domElem = (componentRef.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;
    document.body.appendChild(domElem);

    // Get notications overlay component instance
    this.notificationOverlay = componentRef.instance;
  }

  addToast(type: NotificationType, message: string, options: object) {
    this.addListToast(type, message, [], options);
  }

  addListToast(type: NotificationType, message: string, list: Array<string>, options: object) {
    this.notificationOverlay.addToast(type, message, list, options);
  }
}