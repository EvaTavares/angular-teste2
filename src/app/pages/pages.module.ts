import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListRenderComponent } from './list-render/list-render.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ListRenderComponent,
    ItemDetailComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
})
export class PagesModule { }
