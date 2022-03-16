/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Cad_leitorComponent } from './cad_leitor.component';

describe('Cad_leitorComponent', () => {
  let component: Cad_leitorComponent;
  let fixture: ComponentFixture<Cad_leitorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cad_leitorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cad_leitorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
