import { Constructor } from './constructor';
import { ElementRef, Renderer2 } from '@angular/core';

// Possible color values
export type ColorPalette = 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'gray';

export interface ColorValue {
  color: ColorPalette;
}

export interface ElementRenderer {
  _renderer: Renderer2;
  _element: ElementRef;
}

// Mixin to color components.
// Provides a component with a color property and getter/setters.
// The color is then reflected as a class on the component's parent elelment.
export function colorMixin<T extends Constructor<ElementRenderer>>(base: T, defaultColor?: ColorPalette): Constructor<ColorValue> & T {
// export function colorMixin<TBase extends Constructor>(Base: TBase) {
return class extends base {
    private _color: ColorPalette;

    get color(): ColorPalette {
      return this._color;
    }

    set color(value: ColorPalette) {
      const newColor = value || 'primary';

      if (newColor !== this._color) {
        this._renderer.removeClass(this._element.nativeElement, this._color);
      }

      if (newColor) {
        this._renderer.addClass(this._element.nativeElement, newColor);
      }

      this._color = newColor;
    }

    constructor(...args: any[]) {
      super(...args);

      this.color = 'primary';
    }
  };
}
