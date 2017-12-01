import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Component, Input, Renderer2, ElementRef, DebugElement } from '@angular/core';
import { SvButtonModule } from './button.module';
import { SvSpinner } from '../spinner/spinner';
import { SvButton } from './button';
import { ButtonState } from './button-state';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'sv-button-test',
  template: `
    <sv-button color="secondary">
      Click Me!
      <span svButtonState state="success">Success</span>
      <span svButtonState state="error">Error</span>
    </sv-button>
  `
})
class SvButtonTest {}

describe('Button', () => {

  let comp: SvButton;
  let fixture: ComponentFixture<SvButtonTest>;
  let de: DebugElement;
  let el: HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ NoopAnimationsModule ],
      declarations: [ SvButton, SvSpinner, SvButtonTest, ButtonState ]
    });

    const testFixture = TestBed.createComponent(SvButtonTest);

    fixture = TestBed.createComponent(SvButtonTest);
    comp = fixture.debugElement.children[0].componentInstance;
    de = fixture.debugElement;
    el = de.nativeElement;
  });


  it('should emit a click event.', () => {
    spyOn(comp.onClick, 'emit');
    el.querySelector('button').dispatchEvent(new Event('click'));
    expect(comp.onClick.emit).toHaveBeenCalled();
  });


  it('should not emit a click event when disabled', () => {
    spyOn(comp.onClick, 'emit');
    comp.disabled = true;
    el.querySelector('button').dispatchEvent(new Event('click'));
    expect(comp.onClick.emit).not.toHaveBeenCalled();
  });


  it('should be able to change states', () => {
    fixture.detectChanges();
    expect(el.querySelector('.button-state')).toBeNull();

    comp.buttonState = 'error';
    fixture.detectChanges();

    expect(comp.buttonState).toBe('error');
    expect(el.querySelector('.sv-button-content').classList).toContain('hidden-state');
    expect(el.querySelector('.button-state').textContent).toContain('Error');

    comp.buttonState = 'button';
    fixture.detectChanges();

    expect(comp.buttonState).toBe('button');
    expect(el.querySelector('.sv-button-content').classList).not.toContain('hidden-state');
    setTimeout(() => { expect(el.querySelector('.button-state')).toBeNull(); }, 0);
  });


  it('should be able to change to a loading state', () => {
    comp.buttonState = 'loading';
    fixture.detectChanges();

    expect(comp.buttonState).toBe('loading');
    expect(el.querySelector('.sv-button-content').classList).toContain('hidden-loading');
    expect(el.querySelector('.sv-spinner')).toBeDefined();

    comp.buttonState = 'button';
    fixture.detectChanges();
    expect(comp.buttonState).toBe('button');
    expect(el.querySelector('.sv-button-content').classList).not.toContain('hidden-loading');
    setTimeout(() => { expect(el.querySelector('.sv-spinner')).toBeNull(); }, 0);
  });


  it('should change color and preserve the original color when chaning states', () => {
    fixture.detectChanges();
    expect(comp.color).toBe('secondary');

    comp.buttonState = 'error';
    fixture.detectChanges();

    expect(comp.color).toBe('error');

    comp.buttonState = 'success';
    fixture.detectChanges();

    expect(comp.color).toBe('success');

    comp.buttonState = 'button';
    fixture.detectChanges();

    expect(comp.color).toBe('secondary');
  });


  it('should not emit a click event when in an alternate state', () => {
    fixture.detectChanges();

    spyOn(comp.onClick, 'emit');
    comp.buttonState = 'error';

    el.querySelector('button').dispatchEvent(new Event('click'));
    expect(comp.onClick.emit).not.toHaveBeenCalled();
  });
});