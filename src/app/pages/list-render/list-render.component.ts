import { Component, OnInit } from '@angular/core';
import { Animal } from 'src/app/shared/models/Animal';
import { ListService } from 'src/app/shared/services/list.service';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.scss']
})
export class ListRenderComponent implements OnInit {

  animals: Animal[] =[];
  animalDetails = '';

  constructor(private listService: ListService){}

  ngOnInit(): void {
    this.listService.getAll().subscribe((res) => {
      if(res.length){
        this.animals = res;
      }
    })
  }

  showAge(animal: Animal): void {
    this.animalDetails =`O pet ${animal.name} tem ${animal.age} anos.`
  }

  removeAnimal(animal: Animal){
    console.log("removendo animal")
    this.animals = this.listService.remove(this.animals, animal)
  }


}
