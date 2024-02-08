import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListRenderComponent } from './pages/list-render/list-render.component';
import { ItemDetailComponent } from './pages/item-detail/item-detail.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  { path: '',component: HomeComponent},
  { path: 'list',component: ListRenderComponent},
  { path: 'list/:id', component: ItemDetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
