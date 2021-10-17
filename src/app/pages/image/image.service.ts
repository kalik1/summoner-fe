import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Server } from '../server/Dto/server.class';

@Injectable()
export class ImageService {

  constructor(
    private httpClient: HttpClient,
  ) {

  }

  get(){
    return this.httpClient.get<Server[]>('api/image')
  }

  getOne(id: string){
    return this.httpClient.get<Server>(`api/image/${id}`, )
  }
}
