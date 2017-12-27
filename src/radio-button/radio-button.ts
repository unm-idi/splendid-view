import { Component, Input, Output, OnDestroy, Renderer2, ElementRef, ViewEncapsulation, ContentChild, Optional } from '@angular/core';
import { colorMixin, ColorValue, ColorPalette } from '../core';
import { RadioGroupService } from './radio-group-service';
import { Subscription } from 'rxjs/Subscription';

export class SvRadioButtonBase {
  constructor(public _renderer: Renderer2, public _element: ElementRef) { }
}
export const _SvRadioButtonBase = colorMixin(SvRadioButtonBase);

@Component({
  selector: 'sv-radio-button',
  templateUrl: './radio-button.html',
  styleUrls: ['./radio-button.scss'],
  host: {
    'class': 'sv-radio-button'
  },
  encapsulation: ViewEncapsulation.None
})
export class SvRadioButton extends _SvRadioButtonBase {
  // The radio button's color
  @Input() color: ColorPalette;

  // The radio button's value
  @Input() value: string;

  // Name of group the radio button belongs to
  @Input() name: string;

  // Subscription to coordinate when apart of group
  subscription: Subscription;

  // Getter and setter for private _selected variable
  private _selected: boolean;
  get selected() { return this._selected; }
  set selected(newValue: boolean) {
    if (newValue !== this._selected) {
      // Broadcast change to other radio buttons if in group
      if (this.radioGroupService) {
        this.radioGroupService.selectValue(this.value);
      } else {
        this._selected = newValue;
      }
    }
  }

  constructor(@Optional() private radioGroupService: RadioGroupService, renderer: Renderer2, element: ElementRef) {
    super(renderer, element);

    // Set up the subscription if in group
    if (radioGroupService) {
      this.subscription = radioGroupService.valueSelected$.subscribe(value => {
        // When value changes, updated selected
        this._selected = value === this.value;
      });
    }
  }
}