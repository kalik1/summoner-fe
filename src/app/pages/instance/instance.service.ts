import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DockerInstance } from './interfaces/instanceinfo.interface';
import { Container } from './interfaces/container.interface';
import { Images } from './interfaces/images.interface';

@Injectable({
  providedIn: 'root'
})
export class InstanceService {

  constructor(
    private httpClient: HttpClient,
  ) {

  }

  get(){
    return this.httpClient.get<Record<string, any>[]>('api/instances')
  }

  getOne(id: string){
    return this.httpClient.get<Record<string, any>>(`api/instances/${id}`, )
  }

  getInfo(id: string){
    return this.httpClient.get<DockerInstance>(`api/instances/${id}/info`, )
  }

  getContainers(id: string){
    return this.httpClient.get<Container[]>(`api/instances/${id}/containers`, )
  }

  getImages(id: string){
    return this.httpClient.get<Images[]>(`api/instances/${id}/images`, )
  }
}
