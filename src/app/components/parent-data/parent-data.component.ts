// precisa importar o Input
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-parent-data',
  templateUrl: './parent-data.component.html',
  styleUrls: ['./parent-data.component.css']
})
export class ParentDataComponent implements OnInit {
  // exportando o @Input name do tipo string para a aplicação
  @Input() name: string = '';
  @Input() userData!: { email: string, role: string };

  constructor() { }

  ngOnInit(): void {
  }

}
