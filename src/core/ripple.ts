import { Directive, Input, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[svRipple]',
  host: {
    'class': 'sv-ripple'
  }
})
export class SVRippleDirective {
  private _trigger: HTMLElement;
  private _container: HTMLElement;
  elementRef: ElementRef;

  @Input()
  get trigger() {
    return this._trigger;
  }
  set trigger(newTrigger: HTMLElement) {
    if (this._trigger !== undefined) {
      this._trigger.removeEventListener('mouseup', this.beginRipple);
    }

    if (newTrigger !== undefined) {
      this._trigger = newTrigger;
      this._trigger.addEventListener('mouseup', this.beginRipple);
    }
  }

  constructor(elementRef: ElementRef) {
    this._container = elementRef.nativeElement;
    console.log(this._container);
    // this.trigger.addEventListener('mouseup', this.beginRipple);
  }

  beginRipple() {
    const ripple = document.createElement('div');
    ripple.classList.add('.sv-ripple-enter');

    this._container.appendChild(ripple);
  }
}
