import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Server } from './Dto/server.class';
import { ServerStatus } from './Dto/server.status.class';

@Injectable({
  providedIn: 'root'
})

export class ServerService {

  constructor(
    private httpClient: HttpClient,
  ) {

  }

  get(){
    return this.httpClient.get<Server[]>('api/server')
  }

  getOne(id: string){
    return this.httpClient.get<Server>(`api/server/${id}`)
  }

  stop(id: string){
    return this.httpClient.post<Server>(`api/server/${id}/stop`, {})
  }

  start(id: string){
    return this.httpClient.post<Server>(`api/server/${id}/start`, {} )
  }

  getState(id: string){
    return this.httpClient.get<ServerStatus>(`api/server/${id}/state`)
  }

  getInfo(id: string){
    return this.httpClient.get<ServerStatus>(`api/server/${id}/info`)
  }


}
