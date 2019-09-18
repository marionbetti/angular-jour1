import { Component } from '@angular/core';

@Component({
  selector: 'app-troisieme',
  template: `<ul>
    <li>{{ matiere }}</li>
    <li>{{ dt_creation }}</li>
    <li>{{ getAnnee() }}</li>
  </ul>
  {{ useConsole() }}
  `
})
export class TroisiemeComponent {

  // récupérer depuis l'url 
  matiere : string = "Node JS version 5";
  dt_creation : Date = new Date();
  // interpolation (= concaténation = addition de chaine de caractère)
  // interpoler = injecter du texte dans une chaine de caractère
  // <?php echo $matiere ?>

  // propriété d'une class

  getAnnee()
  {
    return this.dt_creation.getFullYear();
  }

  useConsole()
  {
    console.log("afficher dans la console du navigateur")
  }
}
