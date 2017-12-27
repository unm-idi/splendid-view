import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Component, Input, Renderer2, ElementRef, DebugElement } from '@angular/core';
import { SvRadioButton } from './radio-button';
import { RadioGroupService } from './radio-group-service';

@Component({
  selector: 'sv-test-component',
  template: `
    <sv-radio-button value="one"></sv-radio-button>
    <sv-radio-button value="two"></sv-radio-button>
    <sv-radio-button value="three"></sv-radio-button>

    <sv-radio-button name="test" value="four"></sv-radio-button>
    <sv-radio-button name="test" value="five"></sv-radio-button>
  `
})
class SvRadioButtonTest {}


describe('SvRadioButton', () => {

  let fixture: ComponentFixture<SvRadioButtonTest>;
  let comps: SvRadioButton[];
  let des: DebugElement[];
  let els: HTMLElement[];

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ SvRadioButton, SvRadioButtonTest ],
      providers: [ RadioGroupService ]
    });

    fixture = TestBed.createComponent(SvRadioButtonTest);
    comps = fixture.debugElement.children.map(de => de.componentInstance);
    des = fixture.debugElement.children;
    els = des.map(de => de.nativeElement);
  });


  it('should not be selected by default', () => {
    expect(comps[0].selected).toBeFalsy();
    expect(els[0].querySelector('.sv-radio-button-display').classList).not.toContain('active');
  });


  it('should be able to be selected by clicking on the element', () => {
    fixture.detectChanges();

    // Click on main element container
    els[0].querySelector('.sv-radio-button-container').dispatchEvent(new Event('click'));
    fixture.detectChanges();

    // Verify that selected is true
    expect(comps[0].selected).toBeTruthy();
    expect(els[0].querySelector('.sv-radio-button-display').classList).toContain('active');

    // Verify native radio is checked
    const radio = els[0].querySelector('input[type=radio]') as HTMLInputElement;
    expect(radio.checked).toBeTruthy();
  });


  it('should be able to be selected by checking the native radio button', () => {
    // TODO For Screen readers
    expect(false).toBeTruthy();
  });
});