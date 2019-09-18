# Jour1

Découverte Angular

## Support de cours

<a href="http://formation.webdevpro.net/angular/" target="_blank">http://formation.webdevpro.net/angular/</a>

## Exo 1

Créer le composant "deuxieme" manuellement

qui va afficher à l'écran le texte suivant :
&lt;h2&gt; je suis le deuxieme composant de l'application Angular&lt;/h2&gt;

## Exo 2

Créer le composant "quatrieme" via Angular CLI

qui va afficher à l'écran le texte suivant (en utilisant *ngFor):

- Pomme
- Poire
- Abricot

via une variable dans la class QuatriemeComponent
<pre>
course : Array&lt;Object&gt;=  [ 
    {id: 1, nom: "Pomme"}, 
    {id: 2, nom: "Poire"}, 
    {id: 3, nom: "Abricot"}, 
]
</pre>

[google](http://google.com){:target="_blank"}

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
