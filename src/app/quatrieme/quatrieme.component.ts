import { Component } from '@angular/core';

@Component({
  selector: 'app-quatrieme',
  template: `
    <ul>
      <li *ngFor='let c of course'>{{ c.nom }}</li>
    </ul>
  `
})
export class QuatriemeComponent {
  course : Array<Object>=  [ 
      {id: 1, nom: "Pomme"}, 
      {id: 2, nom: "Poire"}, 
      {id: 3, nom: "Abricot"}, 
  ]
}
