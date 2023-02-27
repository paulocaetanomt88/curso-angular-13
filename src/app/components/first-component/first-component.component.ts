import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit {
  name: string = "Paulo";
  age: number = 34;
  job: string = "Web developer";
  hobbies = ["Pescar", "Assistir filmes", "Estudar"];
  car = {
    name: "Nenhum",
    year: 0
  };

  constructor() { }

  ngOnInit(): void {
  }

}
