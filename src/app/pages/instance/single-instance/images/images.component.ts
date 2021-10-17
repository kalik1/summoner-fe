import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Container } from '../../interfaces/container.interface';
import { LocalDataSource } from 'ng2-smart-table';
import { Images } from '../../interfaces/images.interface';

@Component({
  selector: 'ngx-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.scss'],
  inputs: ['images'],
})
export class ImagesComponent implements OnInit {

  @Input() images: Observable<Images[]>;
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
      RepoTags: {
        title: 'Names',
        type: 'string',
        valuePrepareFunction: (v: Images['RepoTags']) => v.join(','), // ContainersComponent.containerName(v),
      },
      Id: {
        title: 'Id',
        type: 'string',
        valuePrepareFunction: (v: string) => `${v.slice(0+7, 12+7)}`,
      },
      // Ports: {
      //   title: 'Ports',
      //   type: 'string',
      //   valuePrepareFunction: (port: Container['Ports']) => [...new Set([...port.map(p => p.PublicPort ? `${p.PrivatePort}->${p.PublicPort}` : `${p.PrivatePort}`)])],
      // },
      Size: {
        title: 'Size',
        type: 'string',
        valuePrepareFunction: (v: Images['Size']) => `${(v / 1024 / 1024).toFixed(2)} MB`,
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

  constructor() {
  }

  ngOnInit(): void {
    this.images.subscribe(c => this.source.load(c));
  }

  private static containerName(v: string): string {
    return '';
  }

  onDeleteConfirm(event): void {
    // console.log(arguments);
    if (window.confirm(`Are you sure you kill container ${ImagesComponent.containerName(event.data.Names)} (${event.data.Id.slice(0, 12)}) ?`)) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

}
