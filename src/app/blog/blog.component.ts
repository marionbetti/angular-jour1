import { Component } from '@angular/core';
import { DataBlogService } from '../data-blog.service';

@Component({
  selector: 'app-blog',
  template: `
    <h1>{{ titrePrincipal }}</h1>
    <p> {{ sousTitre }}</p>
    <section *ngFor="let a of articles">
      <h2>{{ a.titre }}</h2>
      <p>{{ a.contenu }}</p>
      <hr>
    </section>
  `
})
export class BlogComponent  {

  titrePrincipal = "Page d'accueil !";
  sousTitre = "Bienvenu sur mon Blog !!"
  articles ;

  constructor( service : DataBlogService) { 
    this.articles = service.getData();
  }


}
