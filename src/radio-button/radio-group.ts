import { Component, Input, ContentChildren, QueryList, AfterViewInit, forwardRef, ViewEncapsulation } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { RadioGroupService } from './radio-group-service';
import { SvRadioButton } from './radio-button';
import { ColorPalette } from '../core';


@Component({
  selector: 'sv-radio-group',
  template: `
    <ng-content></ng-content>
  `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SvRadioGroup),
      multi: true
    },
    RadioGroupService
  ],
  host: {
    'class': '.sv-radio-group'
  }
})
export class SvRadioGroup implements AfterViewInit, ControlValueAccessor {
  // The selected value that binds to ngModel
  @Input() selected: string;

  // Child radio buttons
  @ContentChildren(forwardRef(() => SvRadioButton)) _radioButtons: QueryList<SvRadioButton>;

  // Radio group color which is propagated to invidiual SvRadioButtons
  private _color: ColorPalette;
  @Input()
  get color() { return this._color; }
  set color(newColor: ColorPalette) {
    if (newColor !== this._color) {
      this._color = newColor;

      if (this._radioButtons) {
        this.propagateColor();
      }
    }
  }

  // The name of the radio group to be propagated to actual radio inputs
  private _name: string;
  @Input()
  get name() { return this._name; }
  set name(newName: string) {
    if (newName !== this._name) {
      this._name = newName;

      if (this._radioButtons) {
        this.propagateName();
      }
    }
  }

  propagateChange = (_: any) => { };

  constructor(private radioGroupService: RadioGroupService) {
    // Subscribe to the radioGroupService to detect changes on selected value
    radioGroupService.valueSelected$.subscribe(value => {
      this.selected = value;
      this.propagateChange(this.selected);
    });
  }

  writeValue(value: string) {
    this.selected = value;
  }

  registerOnChange(fn) {
    this.propagateChange = fn;
  }

  registerOnTouched(fn) {
    // this.propagateChange = fn;
  }

  ngAfterViewInit() {
    // Initialize the selected value to input
    setTimeout(() => {
      this.radioGroupService.selectValue(this.selected);
      this.propagateColor();
      this.propagateName();
    }, 0);
  }

  propagateName() {
    this._radioButtons.forEach(radio => {
      radio.name = this._name;
    });
  }

  propagateColor() {
    this._radioButtons.forEach(radio => {
      radio.color = this._color;
    });
  }
}