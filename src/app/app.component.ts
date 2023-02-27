import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'curso-angular';

  userName = 'paulocaetanodosanjos';

  userData = {
    email: "paulocaetanomt88@gmail.com",
    role: "admin"
  }
}
