
interface Produit{
    id: number,
    nom: string
  }

export class ProduitService {

    getProduit() : Array<Produit>
    {
        return [ 
                    {id: 1, nom: "Pomme"}, 
                    {id: 2, nom: "Poire"}, 
                    {id: 3, nom: "Abricot"}, 
                ] ;
    }

    getFirstProduit()
    {
        return this.getProduit().slice(0,1);
    }

}