import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainWorkoutContainerComponent } from './main-workout-container.component';

describe('MainWorkoutContainerComponent', () => {
  let component: MainWorkoutContainerComponent;
  let fixture: ComponentFixture<MainWorkoutContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainWorkoutContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainWorkoutContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
