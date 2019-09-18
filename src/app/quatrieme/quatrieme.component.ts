import { Component } from '@angular/core';

import { ProduitService } from '../produit.service';
import { CommentairesService } from '../commentaires.service';

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
    <hr>
    <h3>commentaires</h3>
    <ul>
      <li *ngFor="let c of commentaires">
        {{c.id }}
        -
        {{ c.text }}
        - 
        {{ c.auteur }}
      </li>
    </ul>
  `
})
export class QuatriemeComponent {

  course : Array<Produit> ;
  commentaires ;

  constructor(service : ProduitService , commentaire : CommentairesService ){
    // new ProduitService()
    this.course = service.getProduit() ;
    this.commentaires = commentaire.getComments();
  }

 
}
