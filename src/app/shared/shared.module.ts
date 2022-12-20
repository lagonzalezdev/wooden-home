import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Components
import { WoodenHeaderComponent } from './wooden-header/wooden-header.component';
import { WoodenCarouselComponent } from './wooden-carousel/wooden-carousel.component';
import { WoodenUsComponent } from './wooden-us/wooden-us.component';



@NgModule({
  declarations: [
    WoodenHeaderComponent,
    WoodenCarouselComponent,
    WoodenUsComponent,

  ],
  exports:[
    WoodenHeaderComponent,
    WoodenCarouselComponent,
    WoodenUsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
