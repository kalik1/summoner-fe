import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServersComponent } from './servers/servers.component';
import { SingleServerComponent } from './single-server/single-server.component';

const routes: Routes = [
  {
    path: '',
    component: ServersComponent,
  },
  {
    path: ':server',
    component: SingleServerComponent,
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServerRoutingModule { }
