import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Route } from '@angular/router';
import { MainWorkoutContainerComponent } from './containers/main-workout-container/main-workout-container.component';

export const ROUTES: Route[] = [
  {
    path: `workouts`,
    component: MainWorkoutContainerComponent
  }
];

@NgModule({
  imports: [CommonModule],
  declarations: [MainWorkoutContainerComponent],
  exports: [MainWorkoutContainerComponent]
})
export class WorkoutsModule {}
