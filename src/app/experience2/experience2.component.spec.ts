import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Experience2Component } from './experience2.component';

describe('Experience2Component', () => {
  let component: Experience2Component;
  let fixture: ComponentFixture<Experience2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Experience2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Experience2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
