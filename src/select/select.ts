import { Component, Input, Renderer2, ElementRef, ViewEncapsulation } from '@angular/core';
import { trigger, transition, style, animate, state } from '@angular/animations';
import { colorMixin, ColorPalette, ColorValue } from '../core';

export class SvSelectBase {
  constructor(public _renderer: Renderer2, public _element: ElementRef) { }
}
export const _SvSelectBase = colorMixin(SvSelectBase);


@Component({
  selector: 'sv-select',
  templateUrl: 'select.html',
  styleUrls: ['select.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    'class': 'sv-select',
  },
  animations: [
    trigger('openClose', [
      state('in', style({
        height: 200,
      })),
      transition(':enter', [
        style({
          height: 0,
          borderColor: '#A1A6BA'
        }),
        animate('100ms')
      ]),
      transition(':leave', [
        animate('100ms', style({
          height: 0
        }))
      ])
    ])
  ]
})

export class SvSelect extends _SvSelectBase {

  // The select box's color
  @Input() color: ColorPalette;

  // The selected value
  private _selected: string;
  get selected() { return this._selected; }
  set selected(newValue: string) {
    this._selected = newValue;
  }

  // Options array
  @Input() options: string[] = [];

  // Flags if the select box is open
  private _open = false;
  get open() { return this._open; }
  set open(newValue: boolean) {
    this._open = newValue;
  }

  constructor(renderer: Renderer2, element: ElementRef) {
    super(renderer, element);
  }

  makeSelection(option) {
    this.selected = option;
    this.open = false;
  }
}