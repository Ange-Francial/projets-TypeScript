//Etant donnée le tableau suivant qui représente les données personnelles des employés d'une entreprise
//ainsi que leurs villes d'intervention :

const personnes = [
    {type : 'user', nom: 'Max Mustermann ', age : 25, villes : ['Marseille', 'Lyon', 'Paris']},
    {type : 'admin', nom: 'John Wick', age : 45, villes : ['Paris']},
    {type : 'user', nom: 'Kate Muller', age : 23, villes : ['Nantes', 'Lyon', 'Lille', 'Nice']},
    {type : 'admin', nom: 'Bruce Willis', age : 64, villes : ['Paris', 'Nantes']},
    {type : 'user', nom: 'Jack Wilson', age : 35, villes : ['Marseille', 'Lyon', 'Montpellier']},
    {type : 'admin', nom: 'Carol Smith', age : 23, villes : ['Marseille', 'Nice', 'Montpellier']}
    ];
    
    //Repondez aux questions suivantes en utilisant forEach, map, filter, reduce, every et some.
    
    // Q1: une fonction qui retourne la liste des personnes selon le type passé en paramètre.
    function getByType(type: string) :Array<object>{ 
        return (personnes.filter(elt=>elt.type==type));
    }   
    
    //Q2: Une fonction qui retourne la liste des personnes ayant dans villes, la ville passée en parametre.
    
    function getVille(town: string): Array<object>{
        return personnes.filter(elt=>elt.villes.indexOf(town)!=-1);
    }
    console.log(getVille("Paris"));
    
    //Q3: Une fonction qui retourne la liste des personnes n'ayant pas dans villes, la ville passée en paramètre.
    function getOtherVilleThan(ville: string): Array<object>{
      return (personnes.filter(elt=>! elt.villes.some(v=>v==ville)));
    }
    //console.log(getOtherVilleThan("Marseille"));
    /* Q4: Une fonction qui retourne un tableau d'objets : chaque objet contient le nom d'une personne ainsi que
    son nombre de villes  */
    
    
    function countVilles():Array<object>{  
        
       return personnes.map((elt)=> { return {nom:elt.nom,caract :elt.villes.length}});
    }
    
    //console.log(countVilles());
    
    // Q5: Une fonction qui retourne les personnes dont le nombre de villes d'intervention correspond au paramèt
    
    
    function getByVillesNumber(a:number):Array<object>{
    
      return  (personnes.filter(elt=>elt.villes.length==a));
    }
    
    
    //console.log(getByVillesNumber(2));
    
    /*Q6: Une fonction qui retourne un tableau d'objets : chaque objet contient le nom d'une personne ainsi que l
    e nombre total de */
    
    function countCharacterInVilles(): Array<object>{
    
      return personnes.map(elt=> {return {nom:elt.nom,total :elt.villes.reduce((sum,element)=>sum+element.length,0)}}) ;
    }
    
    //console.log(countCharacterInVilles());
    
    /* Q7: Une fonction qui retourne le nombre de personnes qui interviennent dans la ville passée
    en parametre (ici c'est 3 pour Marseille par exemple).*/
    
    function countByVille(ville: string): number{
        return personnes.filter(etl=>etl.villes.indexOf(ville)!=-1).length;
        
    }
    
    function countByVille2(ville: string): number{
    
      return personnes.reduce((sum,elt)=>sum+elt.villes.filter(el=>el.indexOf(ville)!=-1).length,0);
    }
    
    
    //console.log(countByVille('Marseille'));
    
    /* Q8: Une fonction qui permet de retourner le nombre max de villes d'intervention de toutes
    les personnes (ici c'est 4).*/
    
    function findHavingMaxVille(): number{
      var c:number =0;
      personnes.forEach(elt=>{ 
        if (c<elt.villes.length){
         
        }
      } );
      return c;
    }
    
    function maxi():Number {
      return Math.max(...(personnes.map(elt=>elt.villes.length)));
    }
    console.log(maxi());
    
     
    // Q9: une fonction qui permet de retourner un tableau de toutes les villes (sans doublons).
    
    function getAllVilles(): void{
      var tableau:Array <string>
     //  personnes.forEach(elt=>elt.villes.forEach(Element=>{})
    
    }
    //console.log(getAllVilles);
    // Q10: une fonction qui retourne la moyenne d'age (d'employés) de la ville passée en paramètre.
      function getAvgAge(ville: string):number{
         return getVille(ville).reduce((sum,elt)=>sum+elt.age,0)/getVille(ville).length
      }
       console.log(getAvgAge("Marseille"))
    /* Q11 une fonction qui retourne la moyenne d'age de chaque ville d'i    console.log(        console.log(getVille("Paris"));
ntervention sous forme d'un t
    ableau d'objet. */

// function getAvgByville (): Array<object>{

//     let r=<[String]> getAllVilles();
//     return r.map(p=>{return{Ville:e, MoyenneAge : getAvgAge(p)}});

// }

    
    // Q12 une fonction qui retourne le nom de la personne la plus jeune par ville (voir ci-dessous)tsc


 
// function getYoungByVille():Array<Object>{

//     let y=<[String]>getAllVille();
//     return y.map(x=>{ville: x})

//     return;
// }