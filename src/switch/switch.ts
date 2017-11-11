import { Component, Input, Output, EventEmitter, Renderer2, ElementRef } from '@angular/core';

import { colorMixin, ColorValue, ColorPalette } from '../core/color';

class SVSwitchBase {
  constructor(public _renderer: Renderer2, public _element: ElementRef) { }
}
const _SVSwitchBase = colorMixin(SVSwitchBase);

@Component({
  selector: 'sv-switch',
  templateUrl: './switch.html',
  styleUrls: ['./switch.scss']
})
export class SVSwitchComponent extends _SVSwitchBase implements ColorValue {
  @Input() state = false;
  @Output() stateChange = new EventEmitter<boolean>();
  @Input() color: ColorPalette;

  changeState(event: any) {
    this.state = !this.state;
    this.stateChange.emit(this.state);
  }

  constructor(renderer: Renderer2, element: ElementRef) {
    super(renderer, element);
  }
}
