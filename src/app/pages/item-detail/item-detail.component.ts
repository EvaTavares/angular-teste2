import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Animal } from 'src/app/shared/models/Animal';
import { ListService } from 'src/app/shared/services/list.service';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.scss']
})
export class ItemDetailComponent {
  // o animal pode vir ou não
  animal?: Animal;

  // inicializando o listService e armazenando ao activadedRoute
  constructor(private listService: ListService, private route: ActivatedRoute){
    this.getAnimal();
  }

  // acessar o serve e puxar o dado do banco
  getAnimal(){
    const id = Number(this.route.snapshot.paramMap.get("id"));
    this.listService.getItem(id).subscribe((animal) => (this.animal = animal))
    // quando os dados são emitidos pelo observable, a atribuição da fução subscribe é chamada.
  }
}
