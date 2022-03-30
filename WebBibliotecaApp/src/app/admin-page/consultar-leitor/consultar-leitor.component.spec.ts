import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarLeitorComponent } from './consultar-leitor.component';

describe('ConsultarLeitorComponent', () => {
  let component: ConsultarLeitorComponent;
  let fixture: ComponentFixture<ConsultarLeitorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultarLeitorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultarLeitorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
