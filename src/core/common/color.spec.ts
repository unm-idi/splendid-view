import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Component, Input, Renderer2, ElementRef, DebugElement } from '@angular/core';
import { colorMixin, ColorPalette } from './color';

class BaseTestComponent {
  constructor(public _renderer: Renderer2, public _element: ElementRef) { }
}
const _BaseTestComponent = colorMixin(BaseTestComponent);

@Component({
  selector: 'sv-test-component',
  template: `
    <div class="test">I'm a test!</div>
  `
})
class TestComponent extends _BaseTestComponent {
  @Input() color: ColorPalette;

  constructor(renderer: Renderer2, element: ElementRef) {
    super(renderer, element);
  }
}

describe('Color Mixin', () => {

  let comp: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let de: DebugElement;
  let el: HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ TestComponent ]
    });

    fixture = TestBed.createComponent(TestComponent);
    comp = fixture.componentInstance;
    de = fixture.debugElement;
    el = de.nativeElement;
  });


  it('should provide a color attribute.', () => {
    fixture.detectChanges();
    const color = comp.color;
    expect(color).toBe('primary');
  });


  it('should allow color to be changed to values specified by ColorPalette.', () => {
    fixture.detectChanges();
    comp.color = 'secondary';
    expect(comp.color).toBe('secondary');

    comp.color = 'invalidColor' as ColorPalette;
    expect(comp.color).toBe('primary');
  });


  it('should append a component\'s native element with a class that reflects the component\'s color.', () => {
    fixture.detectChanges();
    let hasClass = el.classList.contains('primary');
    expect(hasClass).toBeTruthy();

    fixture.detectChanges();
    comp.color = 'error';

    hasClass = el.classList.contains('primary');
    expect(hasClass).toBeFalsy();

    hasClass = el.classList.contains('error');
    expect(hasClass).toBeTruthy();
  });
});