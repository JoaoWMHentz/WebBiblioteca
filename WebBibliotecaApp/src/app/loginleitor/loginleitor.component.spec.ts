import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginleitorComponent } from './loginleitor.component';

describe('LoginleitorComponent', () => {
  let component: LoginleitorComponent;
  let fixture: ComponentFixture<LoginleitorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginleitorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginleitorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
