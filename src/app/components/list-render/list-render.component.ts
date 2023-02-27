import { Component, OnInit } from '@angular/core';

// importando a interface Animal
import { Animal } from 'src/app/Animal';

import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent implements OnInit {
  animals: Animal[] = [
    { name: 'Zé Carioca', type: 'Papagaio', age: 30},
    { name: 'Pluto', type: 'Cão', age: 14},
    { name: 'Pernalonga', type: 'Coelho', age: 1},
    { name: 'Mickey', type: 'Rato', age: 1},
  ];

  animal: Animal = {
    name: 'Teste',
    type: 'Teste',
    age: 123
  }

  animalDetails = '';

  constructor(private listService: ListService) { }

  ngOnInit(): void {
  }

  showAge(animal: Animal) {
    this.animalDetails = `O pet ${animal.name} tem ${animal.age} anos`;
  }

  removeAnimal(animal: Animal) {
    console.log("Removendo animal...");
    this.animals = this.listService.remove(this.animals, animal)
  }
}
