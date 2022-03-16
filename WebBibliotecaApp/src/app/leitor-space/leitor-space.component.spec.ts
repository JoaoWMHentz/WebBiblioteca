import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeitorSpaceComponent } from './leitor-space.component';

describe('LeitorSpaceComponent', () => {
  let component: LeitorSpaceComponent;
  let fixture: ComponentFixture<LeitorSpaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeitorSpaceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeitorSpaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
