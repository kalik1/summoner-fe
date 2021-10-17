import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServerRoutingModule } from './server-routing.module';
import { ServersComponent } from './servers/servers.component';
import { SingleServerComponent } from './single-server/single-server.component';
import { NbButtonModule, NbCardModule, NbListModule } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { GotoInstanceComponent } from './single-server/goto-instance/goto-instance.component';
import { ImageModule } from '../image/image.module';

@NgModule({
  declarations: [
    ServersComponent,
    SingleServerComponent,
    GotoInstanceComponent
  ],
  imports: [
    ImageModule,
    CommonModule,
    ServerRoutingModule,
    NbCardModule,
    Ng2SmartTableModule,
    NbButtonModule,
    NbListModule,
  ],
})
export class ServerModule { }
