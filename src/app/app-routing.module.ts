import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {DashboardComponent} from './dashboard/dashboard.component';
import {PlaceComponent} from './place/place.component';
import {RouteComponent} from './route/route.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'place/:id', component: PlaceComponent },
  { path: 'route/:id', component: RouteComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
