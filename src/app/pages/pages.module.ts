import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Module routing
import { RoutingModule } from './routing.module';
import { SharedModule } from '../shared/shared.module';
//pages
import { HomeComponent } from './home/home.component';
import { StoreComponent } from './store/store.component';



@NgModule({
  declarations: [
    HomeComponent,
    StoreComponent,
  ],
  imports: [
    CommonModule,
    RoutingModule,
    SharedModule,
  ]
})
export class PagesModule { }
