import { Component, Input, Output, EventEmitter, Renderer2, ElementRef, ViewEncapsulation, HostBinding } from '@angular/core';
import { colorMixin, ColorValue, ColorPalette } from '../core';

export class SvSwitchBase {
  constructor(public _renderer: Renderer2, public _element: ElementRef) { }
}
export const _SvSwitchBase = colorMixin(SvSwitchBase);

@Component({
  selector: 'sv-switch',
  templateUrl: './switch.html',
  styleUrls: ['./switch.scss'],
  host: {
    'class': 'sv-switch',
    'disabled': 'disabled'
  },
  encapsulation: ViewEncapsulation.None
})
export class SvSwitch extends _SvSwitchBase {
  @Input() state = false;
  @Input() color: ColorPalette;
  @HostBinding('class.disabled') @Input() disabled = false;

  @Output() stateChange = new EventEmitter<boolean>();

  constructor(renderer: Renderer2, element: ElementRef) {
    super(renderer, element);
   }

  // Method to change the state of the switch
  changeState(event: any) {
    if (!this.disabled) {
      this.state = !this.state;
      this.stateChange.emit(this.state);
    }
  }
}