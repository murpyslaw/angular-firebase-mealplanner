import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { ListItemComponent } from './components/list-item/list-item.component';
import { ListComponent } from './components/list/list.component';
import { SidebarContainerComponent } from './containers/sidebar-container/sidebar-container.component';

export const ROUTES: Route[] = [];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(ROUTES)],
  declarations: [ListComponent, ListItemComponent, SidebarContainerComponent],
  exports: [SidebarContainerComponent, ListComponent, ListItemComponent]
})
export class SidebarModule {}
