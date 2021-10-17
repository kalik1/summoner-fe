import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InstancesComponent } from './instances/instances.component';
import { SingleInstanceComponent } from './single-instance/single-instance.component';

const routes: Routes = [
  {
    path: '',
    component: InstancesComponent,
  },
  {
    path: ':instance',
    component: SingleInstanceComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InstanceRoutingModule {
}
