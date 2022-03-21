import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadSecaoComponent } from './cad-secao.component';

describe('CadSecaoComponent', () => {
  let component: CadSecaoComponent;
  let fixture: ComponentFixture<CadSecaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadSecaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadSecaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
