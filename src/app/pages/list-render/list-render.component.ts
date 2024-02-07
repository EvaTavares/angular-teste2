import { Component } from '@angular/core';
import { Animal } from 'src/app/shared/models/Animal';
import { ListService } from 'src/app/shared/services/list.service';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.scss']
})
export class ListRenderComponent {
  constructor(private listService: ListService){}

  animals: Animal[] =[
    {name: "Turca", type: "Dog", age: 3},
    {name: "Tom", type: "Cat", age: 4},
    {name: "Frida", type: "Dog", age:10},
    {name: "Bob", type: "Horse", age: 1},
  ];

  animalDetails = '';

  showAge(animal: Animal): void {
    this.animalDetails =`O pet ${animal.name} tem ${animal.age} anos.`
  }

  removeAnimal(animal: Animal){
    console.log("removendo animal")
    this.animals = this.listService.remove(this.animals, animal)
  }

}
