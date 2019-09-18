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

### Solution

1. position dans le shell dans le dossier jour1
2. lancer la commande `ng g c quatrieme`
3. modifier le fichier `src/app/quatrieme/quatrieme.component.ts`
4. insérer dans le fichier `src/app/app.component.html` la balise du composant
 &lt;app-quatrieme&gt; &lt;/app-quatrieme&gt;
5. regarder que tout est conforme dans [http://localhost:4200](http://localhost:4200)


## exo 3 créer un service et l'utiliser dans un composant

Créer un service `commentaire`

- dispose d'une méthode `getComments()`
- renvoyer le JSON suivant :
<pre>
[
	{id:1, text:"super article", auteur:"moi"},
	{id:2, text:"attention aux fautes d'orthographes", auteur:"autre"},
]
</pre> 

Utiliser ce service dans le composant quatrieme (avec l'injection de dépendance)

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
