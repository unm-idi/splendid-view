import { Component, Renderer2, ElementRef, Input, ViewEncapsulation, forwardRef, Optional } from '@angular/core';
import { colorMixin, ColorPalette, ColorValue } from '../core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { CheckboxGroupService } from './checkbox-group-service';
import { Subscription } from 'rxjs/Subscription';

import fontawesome from '@fortawesome/fontawesome';
import { faCheck } from '@fortawesome/fontawesome-free-solid';
fontawesome.library.add(faCheck);

export class CheckboxBase {
  constructor(public _renderer: Renderer2, public _element: ElementRef) { }
}
export const _CheckboxBase = colorMixin(CheckboxBase);


@Component({
  selector: 'sv-checkbox',
  templateUrl: 'checkbox.html',
  styleUrls: ['checkbox.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => Checkbox),
      multi: true
    }
  ],
  host: {
    'class': 'sv-checkbox'
  },
  encapsulation: ViewEncapsulation.None
})

export class Checkbox extends _CheckboxBase {
  // The checkboxe's color
  @Input() color: ColorPalette;

  // The value of the checkbox
  @Input() value: string;

  // The checked flag to be bound to ngModel
  private _checked = false;
  @Input()
  get checked() { return this._checked; }
  set checked(newValue: boolean) {
    if (this.checkboxGroupService) {
      if (newValue) {
        this.checkboxGroupService.addValue(this.value);
      } else {
        this.checkboxGroupService.removeValue(this.value);
      }
    } else {
      this._checked = newValue;
      this.propagateChange(this._checked);
    }
  }

  // Subscription when apart of a group
  subscription: Subscription;

  propagateChange = (_: any) => { };

  writeValue(value: boolean) {
    this.checked = value;
  }

  registerOnChange(fn) {
    this.propagateChange = fn;
  }

  registerOnTouched(fn) {
    // this.propagateChange = fn;
  }

  constructor(@Optional() private checkboxGroupService: CheckboxGroupService, renderer: Renderer2, element: ElementRef) {
    super(renderer, element);

    // Set up subscription if in group
    if (checkboxGroupService) {
      this.subscription = checkboxGroupService.valuesSelected$.subscribe(value => {
        this._checked = value.indexOf(this.value) !== -1;
        this.propagateChange(this._checked);
      });
    }
  }
}