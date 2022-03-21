import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadAutorComponent } from './cad-autor.component';

describe('CadAutorComponent', () => {
  let component: CadAutorComponent;
  let fixture: ComponentFixture<CadAutorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadAutorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadAutorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
