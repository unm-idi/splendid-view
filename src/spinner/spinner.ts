import { Component, Input, ElementRef, Renderer2, ViewEncapsulation } from '@angular/core';
import { colorMixin, ColorPalette, ColorValue } from '../core';

export class SvSpinnerBase {
  constructor(public _renderer: Renderer2, public _element: ElementRef) { }
}
export const _SvSpinnerBase = colorMixin(SvSpinnerBase);

@Component({
  selector: 'sv-spinner',
  templateUrl: './spinner.html',
  styleUrls: ['./spinner.scss'],
  host: {
    'class': 'sv-spinner'
  },
  encapsulation: ViewEncapsulation.None
})
export class SvSpinner extends _SvSpinnerBase {
  @Input() color: ColorPalette;

  constructor(renderer: Renderer2, element: ElementRef) {
    super(renderer, element);
  }
}
