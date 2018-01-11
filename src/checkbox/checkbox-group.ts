import { Component, forwardRef, AfterViewInit, ContentChildren, QueryList, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { CheckboxGroupService } from './checkbox-group-service';
import { Checkbox } from './checkbox';

@Component({
  selector: 'sv-checkbox-group',
  template: `
    <ng-content></ng-content>
  `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SvCheckboxGroup),
      multi: true
    },
    CheckboxGroupService
  ],
  host: {
    'class': '.sv-checkbox-group'
  }
})

export class SvCheckboxGroup implements AfterViewInit {
  // Array of values that have been checked
  private _selectedValues: string[];
  get selectedValues() { return this._selectedValues; }
  set selectedValues(newValues: string[]) {
    if (newValues) {
      this._selectedValues = newValues;
      this.checkboxGroupService.setValues(this._selectedValues);
    }
  }

  // Child checkboxes
  @ContentChildren(forwardRef(() => Checkbox)) _checkboxes: QueryList<Checkbox>;

  // The group's color
  private _color;

  @Input()
  get color() { return this._color; }
  set color(newColor) {
    if (newColor !== this._color) {
      this._color = newColor;

      if (this._checkboxes) {
        this.propagateColor();
      }
    }
  }

  propagateChange = (_: any) => { };

  constructor(private checkboxGroupService: CheckboxGroupService) { }

  writeValue(value: string[]) {
    this.selectedValues = value;
  }

  registerOnChange(fn) {
    this.propagateChange = fn;
  }

  registerOnTouched(fn) {
    // this.propagateChange = fn;
  }

  ngAfterViewInit() {
    setTimeout(() => {
      // Sets values
      this.checkboxGroupService.setValues(this._selectedValues);

      // Sets up subscription
      this.checkboxGroupService.valuesSelected$.subscribe(values => {
        this._selectedValues = values;
        this.propagateChange(this._selectedValues);
      });

      // Set color
      this.propagateColor();
    }, 0);
  }

  propagateColor() {
    this._checkboxes.forEach(checkbox => {
      checkbox.color = this._color;
    });
  }
}