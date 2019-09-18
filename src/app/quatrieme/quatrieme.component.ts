import { Component } from '@angular/core';

import { ProduitService } from '../produit.service';

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

  course : Array<Produit> ;

  constructor(service : ProduitService ){
    // new ProduitService()
    this.course = service.getProduit() ;
  }

 
}
