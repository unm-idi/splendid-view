import { Directive, Input, ElementRef, Renderer2 } from '@angular/core';
import { ColorPalette } from '../core';

@Directive({
  selector: 'button span[svButtonState]',
  host: {
    'class': 'button-state'
  }
})
export class ButtonState {
  @Input() color: ColorPalette;
  @Input() state: string;

  constructor(private _renderer: Renderer2, private _element: ElementRef) {
  }
}