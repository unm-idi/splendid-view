import { ComponentFixture, TestBed, async, fakeAsync, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Component, Input, Renderer2, ElementRef, DebugElement } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SvRadioButton } from './radio-button';
import { SvRadioGroup } from './radio-group';
import { ngContentDef } from '@angular/core/src/view/ng_content';
// import { RadioGroupService } from './radio-group-service';

@Component({
  selector: 'sv-test-component',
  template: `
    <sv-radio-group name="group" color="secondary" [(ngModel)]="value">
      <sv-radio-button value="one"></sv-radio-button>
      <sv-radio-button value="two"></sv-radio-button>
      <sv-radio-button value="three"></sv-radio-button>
    </sv-radio-group>
  `
})
class SvRadioButtonTest {
  value = 'two';
}


describe('SvRadioButton', () => {

  let fixture: ComponentFixture<SvRadioButtonTest>;
  let testComp: SvRadioButtonTest;
  let groupComp: SvRadioGroup;
  let radioComps: SvRadioButton[];
  let radioEls: HTMLElement[];
  // let comps: SvRadioButton[];
  // let des: DebugElement[];
  // let els: HTMLElement[];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SvRadioButton, SvRadioGroup, SvRadioButtonTest ],
      imports: [ FormsModule ]
    }).compileComponents();

    fixture = TestBed.createComponent(SvRadioButtonTest);
    testComp = fixture.componentInstance;
    groupComp = fixture.debugElement.children[0].componentInstance;
    radioComps = fixture.debugElement.children[0].children.map(de => de.componentInstance);
    radioEls = fixture.debugElement.children[0].children.map(de => de.nativeElement);
    fixture.detectChanges();
  }));


  it('should propagate its name attribute to its children', () => {
      expect(groupComp.name).toBe('group');
      expect(radioComps[2].name).toBe('group');
  });


  it('should propagate its color attribute to its children', () => {
      expect(radioComps[2].color).toBe('secondary');
  });


  it('should be initialized to passed in model which the appropriate child selected', () => {
      expect(testComp.value).toBe('two');
      expect(groupComp.selected).toBe('two');
      expect(radioComps[1].selected).toBeTruthy();
      expect(radioComps[0].selected).toBeFalsy();
      expect(radioComps[2].selected).toBeFalsy();
  });


  it('should update its value when a child radio button is checked', () => {
    radioEls[0].querySelector('.sv-radio-button-container').dispatchEvent(new Event('click'));
    fixture.detectChanges();
    expect(groupComp.selected).toBe('one');
    expect(testComp.value).toBe('one');
  });


  it('should only have a single radio button checked at a time', () => {
    radioEls[0].querySelector('.sv-radio-button-container').dispatchEvent(new Event('click'));
    fixture.detectChanges();
    expect(radioComps[1].selected).toBeFalsy();
  });
});