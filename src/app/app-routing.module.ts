import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ListComponent} from './list/list.component';

const appRoutes: Routes = [
  { path: 'todo-list', component: ListComponent },
  { path: '', redirectTo: '/todo-list', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
