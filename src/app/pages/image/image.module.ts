import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImageRoutingModule } from './image-routing.module';
import { ImageService } from './image.service';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ImageRoutingModule
  ],
  providers: [ImageService],
})
export class ImageModule { }
