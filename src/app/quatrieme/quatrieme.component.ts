import { Component } from '@angular/core';

interface Produit{
  id: number,
  nom: string
}

@Component({
  selector: 'app-quatrieme',
  template: `
    <ul>
      <li *ngFor='let c of course'>{{ c.nom }}</li>
    </ul>
  `
})
export class QuatriemeComponent {
  course : Array<Produit>=  [ 
      {id: 1, nom: "Pomme"}, 
      {id: 2, nom: "Poire"}, 
      {id: 3, nom: "Abricot"}, 
  ]
}
