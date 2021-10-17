import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InstanceService } from '../instance.service';
import { DockerInstance } from '../interfaces/instanceinfo.interface';
import { Observable } from 'rxjs';
import { Container } from '../interfaces/container.interface';
import { filter, map } from 'rxjs/operators';
import { Images } from '../interfaces/images.interface';

const otherOmits = [
  'Plugins',
  'Warnings',
  'DriverStatus',
  'SecurityOptions',
  'Labels',
  'RuncCommit',
  'InitCommit',
  'Runtimes',
  'ContainerdCommit',
  'RegistryConfig',
  'Swarm',
  'Containers',
  'ContainersPaused',
  'ContainersStopped',
  'ContainersRunning',
] as const;

/*
Containers: 37
ContainersPaused: 0
ContainersStopped: 26
ContainersRunning: 11
 */

@Component({
  selector: 'ngx-single-instance',
  templateUrl: './single-instance.component.html',
  styleUrls: ['./single-instance.component.scss'],
})
export class SingleInstanceComponent implements OnInit {
  instanceInfo: DockerInstance | null;
  containers: Observable<Container[]>;
  images: Observable<Images[]>;
  Plugins: Observable<DockerInstance['Plugins']> = new Observable();
  Others: Observable<Omit<DockerInstance, typeof otherOmits[number]>> = new Observable();

  constructor(
    private route: ActivatedRoute,
    private instanceService: InstanceService,
  ) {
  }

  ngOnInit(): void {
    const id = this.route.snapshot.params['instance'];
    this.instanceService.getOne(id)
      .subscribe(instance => {
        if (instance) {
          const infoMap = this.instanceService.getInfo(id);
          infoMap.subscribe(instanceInfo => {
            this.instanceInfo = instanceInfo;
          });
          this.Plugins = infoMap.pipe(map((value) => {
            return value['Plugins'] || {};
          }));
          this.Others = infoMap.pipe(map((value) => {
            for (const otherOmit of otherOmits) {
              Reflect.deleteProperty(value, otherOmit);
            }
            return value as Omit<DockerInstance, typeof otherOmits[number]>;
          }));
          this.containers = this.instanceService.getContainers(id)
            .pipe(map(containers => containers));
          this.images = this.instanceService.getImages(id)
            .pipe(map(containers => containers));
        }
      });
  }

}
