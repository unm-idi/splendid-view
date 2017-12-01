/*
  Provides a mixin function for adding color functionality to other components
*/

import { ElementRef, Renderer2, Input } from '@angular/core';
import { Constructor } from './constructor';

// Type aliase to define possible color values
// TODO: replace stirng literal with enum.
export type ColorPalette = 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'gray';
enum ColorPaletteValues {
  primary = 'primary',
  secondary = 'secondary',
  success = 'success',
  warning = 'warning',
  error = 'error',
  gray = 'gray'
}

// Interface that defines a color attribute of type 'ColorPalette'
export interface ColorValue {
  color: ColorPalette;
}

// Mixin function that extends a passed in class with functionality relating
// to themeing a component with a given color. When a color is set or changed
// The component's native element is given a class that allows the component
// to be styled with the specified color.
export function colorMixin<T extends Constructor>(base: T, defaultColor?: ColorPalette): Constructor<ColorValue> & T {
  return class extends base {
    // Color attribute
    private _color: ColorPalette;

    private _element: ElementRef;
    private _renderer: Renderer2;

    // Getter and setter for private _color attribute
    get color(): ColorPalette {
      return this._color;
    }

    set color(value: ColorPalette) {
      const newColor = ColorPaletteValues[value] !== undefined ? value : 'primary';

      // Removes color class from native element
      if (newColor !== this._color) {
        this._renderer.removeClass(this._element.nativeElement, this._color);
      }

      // Adds color class to native element
      if (newColor) {
        this._renderer.addClass(this._element.nativeElement, newColor);
      }

      this._color = newColor;
    }

    constructor(...args: any[]) {
      super(...args);

      // If no color is provided, color defaults to 'primary'
      this.color = 'primary';
    }
  };
}
