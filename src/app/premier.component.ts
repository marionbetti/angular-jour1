import { Component } from '@angular/core';

// si vous avez à créer un composant avec un nom composé

// le nom du fichier menu-top.component.ts
// pas de majuscule pas de _ tiret bas = underscore 

// il faut les mettre dans le dossier /src/app

// décorer la class via une fonction décoratrice


@Component({
    selector: "premier", 
    // premier => vous avez créé une nouvelle balise html
    // <premier></premier>
    // rappel <app-root></app-root>
    template : "<h1>premier</h1>",
})
export class PremierComponent{

}

// si nom composé pour le composant
//export class MenuTopComponent{
//
//}