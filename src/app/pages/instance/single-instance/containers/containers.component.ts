import { Component, Input, OnInit } from '@angular/core';
import { Container } from '../../interfaces/container.interface';
import { LocalDataSource } from 'ng2-smart-table';
import { Observable } from 'rxjs';

@Component({
  selector: 'ngx-containers',
  templateUrl: './containers.component.html',
  styleUrls: ['./containers.component.scss'],
  inputs: ['containers'],
})
export class ContainersComponent implements OnInit {

  @Input() containers: Observable<Container[]>;
  source: LocalDataSource = new LocalDataSource();

  settings = {
    editor: {
      hideSubHeader: true,
    },
    actions: {
      add: false,
      edit: false,
      delete: false,
      position: 'right',
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      Names: {
        title: 'Names',
        type: 'string',
        valuePrepareFunction: (v: Container['Names']) => ContainersComponent.containerName(v),
      },
      Id: {
        title: 'Id',
        type: 'string',
        valuePrepareFunction: (v: string) => `${v.slice(0, 12)}`,
      },
      Ports: {
        title: 'Ports',
        type: 'string',
        valuePrepareFunction: (port: Container['Ports']) => [...new Set([...port.map(p => p.PublicPort ? `${p.PrivatePort}->${p.PublicPort}` : `${p.PrivatePort}`)])],
      },
      Image: {
        title: 'Image',
        type: 'string',
      },
      State: {
        title: 'State',
        type: 'string',
      },
      Status: {
        title: 'Status',
        type: 'string',
      },
      Created: {
        title: 'Created',
        type: 'string',
        valuePrepareFunction: (v: Container['Created']) => {
          return new Date(v * 1000).toDateString();
        },
      },
    },
  };

  private static containerName(n: string[]): string {
    return n.join(' ').replace('/', ' ')
  }
  constructor() {
  }

  ngOnInit(): void {
    this.containers.subscribe(c => this.source.load(c));
  }

  onDeleteConfirm(event): void {
    if (window.confirm(`Are you sure you kill container ${ContainersComponent.containerName(event.data.Names)} (${event.data.Id.slice(0, 12)}) ?`)) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

}
