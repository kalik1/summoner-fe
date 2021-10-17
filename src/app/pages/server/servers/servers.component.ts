import { Component, OnInit } from '@angular/core';
import { TableLinkComponent } from '../../../@core/components/table-link/table-link.component';
import { LocalDataSource } from 'ng2-smart-table';
import { ServerService } from '../server.service';
import { GotoInstanceComponent } from '../single-server/goto-instance/goto-instance.component';
import { catchError, combineAll, concatAll, concatMap, map, mergeAll, mergeMap, switchMap } from 'rxjs/operators';
import { Server } from '../Dto/server.class';
import { forkJoin, merge, of, zip } from 'rxjs';

@Component({
  selector: 'ngx-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.scss'],
})
export class ServersComponent implements OnInit {

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
        // valuePrepareFunction: (v: string, row: {port: number}) => `${v.charAt(0)
        //   .toUpperCase()}${v.slice(1)}:${row.port}`,
      },
      image: {
        title: 'Image',
        type: 'string',
        valuePrepareFunction: (v: { imageName: string }) => `${v.imageName}`,
      },
      serverPort: {
        title: 'Server Port',
        type: 'string',
      },
      managePort: {
        title: 'Manage Port',
        type: 'string',
      },
      status: {
        title: 'ServerPort Range',
        type: 'string',
        valuePrepareFunction: (v: { Status: string }) => `${v.Status}`,
      },
      instance: {
        title: 'Instance',
        type: 'custom',
        renderComponent: GotoInstanceComponent,
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
    private serverService: ServerService,
  ) {
  }

  ngOnInit(): void {
    const a = this.serverService.get()
      .pipe(
        switchMap((servers: Server[]) =>
          servers.map(server => this.serverService.getState(server.id)
            .pipe(map(status => {
              server.status = status;
              return server;
            }), catchError(e => of(Object.assign(server, {status: { Status: 'unknown' }})))),
          ),
        ),
        combineAll()
      );

    a.subscribe(servers => {
      //console.log(servers)
      this.source.load(servers)
    });

    // tuttecose.subscribe(instances => this.source.load(instances).catch(console.error));
    this.serverService.get()
      .subscribe(console.info);
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

}
