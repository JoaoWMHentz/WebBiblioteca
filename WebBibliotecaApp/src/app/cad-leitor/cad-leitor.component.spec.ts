import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadLeitorComponent } from './cad-leitor.component';

describe('CadLeitorComponent', () => {
  let component: CadLeitorComponent;
  let fixture: ComponentFixture<CadLeitorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadLeitorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadLeitorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
