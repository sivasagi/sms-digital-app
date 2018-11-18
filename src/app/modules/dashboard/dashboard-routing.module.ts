import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { GridComponent } from './components/grid/grid.component';
import { FormComponent } from './components/form/form.component';

const routes: Routes = [
  {
    path: '', component: DashboardComponent, children: [
      { path: '', redirectTo : 'grid'},
      { path: 'grid', component: GridComponent },
      { path: 'form', component: FormComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
