import { Component, OnInit } from '@angular/core';
import { Server } from '../Dto/server.class';
import { ServerService } from '../server.service';
import { ActivatedRoute } from '@angular/router';
import { ImageService } from '../../image/image.service';

@Component({
  selector: 'ngx-single-server',
  templateUrl: './single-server.component.html',
  styleUrls: ['./single-server.component.scss']
})
export class SingleServerComponent implements OnInit {

  server: Server;
  imageType: any;
  serverInfo: any;
  image: any;

  constructor(
    private serverService: ServerService,
    private imageService: ImageService,
    private route: ActivatedRoute,
  ) {
  }

  stopServer(){
    this.serverService.stop(this.server.id).subscribe(r => {
      console.log(r)
    })
  }

  startServer(){
    this.serverService.start(this.server.id).subscribe(r => {
      console.log(r)
    })
  }

  stats(){
    this.serverService.getState(this.server.id).subscribe(r => {
      console.log(r)
    })
  }

  ngOnInit(): void {
    const serverId = this.route.snapshot.params['server']
    this.serverService.getOne(serverId).subscribe(server => {
      console.log(server)

      this.imageService.getOne(server.image.id).subscribe(image => {
        this.image = image
        console.log(image)
      })
      this.server = server;
    })

    this.serverService.getInfo(serverId).subscribe(serverInfo => {
      this.serverInfo = serverInfo
      console.log(serverInfo)
    })

  }

}
