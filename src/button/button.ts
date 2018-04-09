import {
  Component,
  Renderer2,
  ElementRef,
  TemplateRef,
  Input,
  Output,
  EventEmitter,
  ViewEncapsulation,
  QueryList,
  ContentChildren
} from '@angular/core';
import { trigger, transition, style, animate, state } from '@angular/animations';
import { colorMixin, ColorPalette, ColorValue } from '../core';
import { ButtonState } from './button-state';


export class ButtonBase {
  constructor(public _renderer: Renderer2, public _element: ElementRef) {}
}
export const _ButtonBase = colorMixin(ButtonBase);

@Component({
  selector: 'sv-button',
  templateUrl: './button.html',
  styleUrls: ['./button.scss'],
  host: {
    'class': 'sv-button'
  },
  animations: [
    trigger('loadingState', [
      state('in', style({ opacity: 1, transform: 'scale(1)' })),
      transition(':enter', [
        style({ opacity: 0, transform: 'scale(1.5)' }),
        animate('200ms')
      ]),
      transition(':leave', [
        animate('200ms', style({ opacity: 0, transform: 'scale(1.5)' }))
      ])
    ]),
    trigger('alternateState', [
      state('in', style({ opacity: 0, transform: 'translateX(0)' })),
      transition('void => *', [
        style({ opacity: 1, transform: 'translateX(10px)' }),
        animate('200ms ease-out')
      ]),
      transition('* => void', [
        animate('200ms ease-out', style({ opacity: 0, transform: 'translateX(10px)' }))
      ])
    ])
  ],
  encapsulation: ViewEncapsulation.None
})
export class SvButton extends _ButtonBase {
  // Input to set the button's color
  @Input() color: ColorPalette;

  // Stores the button's color when an alternate state color overrides the button's color
  private _originalColor: ColorPalette;

  // Input to disable the button and supress all click events
  @Input() disabled = false;

  // Output to broadcast a click event
  @Output() onClick = new EventEmitter<MouseEvent>();

  // The state that the button is in.
  private _buttonState = 'button';

  // Getter and setter for the button state
  @Input()
  get buttonState() {
    return this._buttonState;
  }

  set buttonState(newState: string) {
    if (newState === 'button') {
      if (this._originalColor) {
        this.color = this._originalColor;
        this._originalColor = null;
      }
      this._buttonState = newState;
    } else if (newState === 'loading') {
      this._buttonState = newState;
    } else if (['success', 'error'].includes(newState)) {
      const s = this.states.find(x => x.state === newState);
      if (s) {
        if (!this._originalColor) {
          this._originalColor = this.color;
        }
        this.color = s.color as ColorPalette || s.state as ColorPalette;
        this._buttonState = newState;
      }
    }
  }

  // List of possible states the button can take on.
  @ContentChildren(ButtonState) states: QueryList<ButtonState>;

  // Constructor
  constructor(renderer: Renderer2, element: ElementRef) {
    super(renderer, element);
  }

  // Detects a click on the native button and emits an 'onClick' event
  // A click event will not be emitted if the button is disabled or
  // the button's state is not 'button'
  handleClick(event: MouseEvent) {
    if (!this.disabled && this._buttonState === 'button') {
      this.onClick.emit();
    }
  }
}