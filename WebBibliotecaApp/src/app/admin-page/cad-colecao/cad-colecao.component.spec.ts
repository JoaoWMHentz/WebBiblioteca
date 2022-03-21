import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadColecaoComponent } from './cad-colecao.component';

describe('CadColecaoComponent', () => {
  let component: CadColecaoComponent;
  let fixture: ComponentFixture<CadColecaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadColecaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadColecaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
