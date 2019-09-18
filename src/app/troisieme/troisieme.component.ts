import { Component } from '@angular/core';

@Component({
  selector: 'app-troisieme',
  template: `<ul>
    <li>{{ matiere }}</li>
    <li>{{ dt_creation }}</li>
    <li>{{ getAnnee() }}</li>
    <li>{{ getDateFr() }}</li>
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

  // créer une méthode de class qui affiche la date au format JJ/MM/AAAA

  getDateFr()
  {
    let dt:any = this.dt_creation;
        dt = `${dt.getDate()}/${("0" + (dt.getMonth() + 1)).slice(-2)}/${dt.getFullYear()}`;
    return dt;
  }

  useConsole()
  {
    console.log("afficher dans la console du navigateur")
  }
}
