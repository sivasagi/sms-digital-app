import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MasterComponent } from './pages/master/master.component';

const routes: Routes = [
  { 
    path: '', 
    component: MasterComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'prefix' },
      { path: 'dashboard', loadChildren: '../dashboard/dashboard.module#DashboardModule'},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MasterRoutingModule { }
