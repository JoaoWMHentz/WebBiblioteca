import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadEditoraComponent } from './cad-editora.component';

describe('CadEditoraComponent', () => {
  let component: CadEditoraComponent;
  let fixture: ComponentFixture<CadEditoraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadEditoraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadEditoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
