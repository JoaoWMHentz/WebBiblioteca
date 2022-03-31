import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarEmprestimoComponent } from './consultar-emprestimo.component';

describe('ConsultarEmprestimoComponent', () => {
  let component: ConsultarEmprestimoComponent;
  let fixture: ComponentFixture<ConsultarEmprestimoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultarEmprestimoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultarEmprestimoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
