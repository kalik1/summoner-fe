import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { SmartTableData } from '../../../@core/data/smart-table';
import { InstanceService } from '../instance.service';
import { Router } from '@angular/router';
import { TableLinkComponent } from '../../../@core/components/table-link/table-link.component';

@Component({
  selector: 'ngx-instances',
  templateUrl: './instances.component.html',
  styleUrls: ['./instances.component.scss'],
})
export class InstancesComponent implements OnInit {

  settings = {
    editor: {
      hideSubHeader: true,
    },
    actions: {
      add: false,
      edit: false,
      delete: false,
    },
    columns: {
      name: {
        title: 'Name',
        type: 'string',
      },
      host: {
        title: 'Host',
        type: 'string',
        valuePrepareFunction: (v: string, row: {port: number}) => `${v.charAt(0)
          .toUpperCase()}${v.slice(1)}:${row.port}`,
      },
      instanceType: {
        title: 'Instance Type',
        type: 'string',
        valuePrepareFunction: (v: string) => `${v.charAt(0)
          .toUpperCase()}${v.slice(1)}`,
      },
      protocol: {
        title: 'API Protocol',
        type: 'string',
        valuePrepareFunction: (v: string) => `${v.charAt(0)
          .toUpperCase()}${v.slice(1)}`,
      },
      portRange: {
        title: 'Server Port Range',
        type: 'string',
        valuePrepareFunction: (v: string, row: { containersHigherPortRange: number, containersLowerPortRange: number }) => `${row.containersLowerPortRange}-${row.containersHigherPortRange}`,
      },
      managePortRange: {
        title: 'ServerPort Range',
        type: 'string',
        valuePrepareFunction: (v: string, row: { containersHigherPortRange: number, containersLowerPortRange: number }) => `${row.containersLowerPortRange}-${row.containersHigherPortRange}`,
      },
      info: {
        title: 'Info',
        type: 'custom',
        renderComponent: TableLinkComponent,
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(
    private smartTableDataService: SmartTableData,
    private instanceService: InstanceService,
    private router: Router,
  ) {
    const data = this.smartTableDataService.getData();

  }

  info(id: string) {
    this.router.navigate([`./${id}`]);
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

  ngOnInit(): void {
    this.instanceService.get()
      .subscribe(instances => this.source.load(instances).catch(console.error));
  }

}
