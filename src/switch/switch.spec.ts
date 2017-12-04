import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { SvSwitch } from './switch';

describe('Switch', () => {

  let comp: SvSwitch;
  let fixture: ComponentFixture<SvSwitch>;
  let de: DebugElement;
  let el: HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ SvSwitch ]
    });

    fixture = TestBed.createComponent(SvSwitch);
    comp = fixture.componentInstance;
    de = fixture.debugElement;
    el = de.nativeElement;
  });


  it('should be off by default', () => {
    expect(comp.state).toBeFalsy();
    expect(el.querySelector('.sv-switch-control').classList).not.toContain('on');
  });


  it('should toggle states when clicked', () => {
    el.querySelector('.sv-switch-control').dispatchEvent(new Event('click'));
    fixture.detectChanges();
    expect(comp.state).toBeTruthy();
    expect(el.querySelector('.sv-switch-control').classList).toContain('on');

    el.querySelector('.sv-switch-control').dispatchEvent(new Event('click'));
    fixture.detectChanges();
    expect(comp.state).toBeFalsy();
  });


  it('should not toggle states when disabled', () => {
    comp.disabled = true;
    fixture.detectChanges();
    expect(el.classList).toContain('disabled');

    el.querySelector('.sv-switch-control').dispatchEvent(new Event('click'));
    fixture.detectChanges();
    expect(comp.state).toBeFalsy();
    expect(el.querySelector('.sv-switch-control').classList).not.toContain('on');
  });
});