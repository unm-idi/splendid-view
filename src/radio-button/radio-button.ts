import { Component, Input, Output, OnDestroy, Renderer2, ElementRef } from '@angular/core';
import { RadioGroupService } from './radio-group';
import { Subscription } from 'rxjs/Subscription';
import { colorMixin, ColorValue, ColorPalette } from '../core/color';

class SVRadioButtonComponentBase {
  constructor(public _renderer: Renderer2, public _element: ElementRef) { }
}
const _SVRadioButtonComponentBase = colorMixin(SVRadioButtonComponentBase);


@Component({
  selector: 'sv-radio-button',
  templateUrl: './radio-button.html',
  styleUrls: ['./radio-button.scss']
})
export class SVRadioButtonComponent extends _SVRadioButtonComponentBase implements ColorValue {
  @Input() value: string;
  @Input() color: ColorPalette;

  subscription: Subscription;

  private _selected: boolean;

  get selected() {
    return this._selected;
  }

  set selected(newValue: boolean) {
    if (newValue !== this._selected) {
      this.radioGroupService.selectValue(this.value);
    }
  }

  constructor(private radioGroupService: RadioGroupService, renderer: Renderer2, element: ElementRef) {
    super(renderer, element);
    this.subscription = radioGroupService.valueSelected$.subscribe(value => {
      this._selected = value === this.value;
    });
  }

  ngOnDestory() {
    this.subscription.unsubscribe();
  }
}
