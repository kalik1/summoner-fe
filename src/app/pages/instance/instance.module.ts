import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InstanceRoutingModule } from './instance-routing.module';
import { InstancesComponent } from './instances/instances.component';
import { SingleInstanceComponent } from './single-instance/single-instance.component';
import { NbCardModule, NbIconModule, NbInputModule, NbListModule, NbTreeGridModule } from '@nebular/theme';
import { ThemeModule } from '../../@theme/theme.module';
import { TablesRoutingModule } from '../tables/tables-routing.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { InstanceService } from './instance.service';
import { ArrayJoinerPipe } from './components/array-joiner.pipe';
import { ContainersComponent } from './single-instance/containers/containers.component';
import { PickEvenOddPipe } from './components/pick-even-odd.pipe';
import { ImagesComponent } from './single-instance/images/images.component';

@NgModule({
  declarations: [
    InstancesComponent,
    SingleInstanceComponent,
    ArrayJoinerPipe,
    ContainersComponent,
    PickEvenOddPipe,
    ImagesComponent,
  ],
  imports: [
    CommonModule,
    InstanceRoutingModule,
    NbCardModule,
    NbTreeGridModule,
    NbIconModule,
    NbInputModule,
    ThemeModule,
    TablesRoutingModule,
    Ng2SmartTableModule,
    NbListModule,
  ],
  providers: [InstanceService]
})
export class InstanceModule { }
