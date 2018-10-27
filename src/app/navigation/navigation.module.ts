import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { MainNavComponent } from './containers/main-nav/main-nav.component';

export const ROUTES: Route[] = [];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(ROUTES)],
  declarations: [MainNavComponent],
  exports: [MainNavComponent]
})
export class NavigationModule {}
