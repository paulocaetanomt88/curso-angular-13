import { Component, OnInit } from '@angular/core';

// importando a recuperação de URL
import { ActivatedRoute } from '@angular/router';

// importando a interface Animal
import { Animal } from 'src/app/Animal';

// importando o serviço criado para listas
import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {
  // declarando as propriedades com ? quer dizer que esta pode vir ou não
  animal?: Animal

  // iniciando recursos no construtor
  constructor(private listService: ListService, private route: ActivatedRoute) {
      this.getAnimal()
   }

  ngOnInit(): void {
  }

  // getAnimal() acessa o service para puxar o dado do banco
  getAnimal() {
    const id = Number(this.route.snapshot.paramMap.get("id"))
    this.listService.getItem(id).subscribe((animal) => (this.animal = animal));
  }
}
