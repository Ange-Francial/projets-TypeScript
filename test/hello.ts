/*
        // Ecriture d'une fonction
function greeter(person: string): string{
     return "hello, "+person;
 }
 var user="Jane User";
 console.log(greeter(user));
*/


/*
        // Affectation d'un entier
var x: number;
x=2;
var x: number = 2;
*/


/*
        // Affichage de chaînes de caractères 
var str1 : string = "wick";
var str2 : string = "john";
var str2 : string = str1+" "+str2 ;
console.log(str2);
*/


/*
        // Affichage d'une liste simple d'entier.
var list : number[];
list=[1,2,3];
console.log(list);
*/


/*
        // Affichage d'un tableau d'entier.
var list : Array <number> = new Array (1,2,3)
console.log(list);
*/


/*
        //affichage d'un tableau constituer d'une suite d'entiers consécutifs
var list : number[] = Array.from(Array(5).keys());
console.log(list);
// on utilisera la commande "tsc nom_du_fichier.ts -t es6" pour compiler
*/


/*
        //notion de tuples
var list : [number, string, string] = [18, "Mbiapo", 'Ange']
console.log(list)
list[2]="Francial"
console.log(list)
*/


/*
        //notion de tuples optionnels
var t: [number, string?, string?] = [100];
console.log(t);             // affiche [ 100 ]
console.log(t[1]);          // ceci affichera "undefined" pour dire que la variable n'est pas définie 
t[1] = "wick";
console.log(t)
*/


/*
        //Utilisation du type "any"
var x: any
x="ange";
x=18;
console.log(x);
// affiche 18;
*/


/*
        // utilisation du type unknown
var x: unknown;
x="ange";
x=18;
console.log(x);
*/


/*
        // Type énuméré
enum mois {janvier, février, mars, avril, mai, juin, juillet, août, septembre, octobre, novembre, décembre};
console.log(mois.février);             //affiche(1)
console.log(mois[2]);                   // affiche(mars)
*/


/*
        //modification de l'indice du premier élément
enum mois {janvier=1, février, mars, avril, mai, juin, juillet, août, septembre, octobre, novembre, décembre};
console.log(mois.février);              // affiche (2)
console.log(mois[2]);                   // affiche (février)
*/


/*
        //modification de l'indice d'un élément quelconque
enum mois {janvier, février, mars, avril=1, mai, juin, juillet, août, septembre, octobre, novembre, décembre};
console.log(mois.mai);              // affiche (2)
console.log(mois.février);              // affiche (1)
console.log(mois.mars);                 // affiche (2)
console.log(mois[2]);                   // affiche (mai)
*/



/*
        // Notion d'objet 
var objet : {
        nom:string;
        numero:number;
};
        //initialisation
objet = {
        nom : "Francial",
        numero : 18
};
console.log(objet);

objet.nom="Ange";
console.log(objet);

objet[`nom`]= "Francial";        //autre facon d'indexer
objet['numero']= 20;
console.log(objet);
*/


/*
        // union de type de variable
var y : number|boolean|string
y="valeur";
y=true;
y=18;
*/


/*
        // le mot clé "let"
if (2>5){
        let x=1;
}
//console.log(x)        //cette instruction ne peux pas marcher

let str: string ="Francial";
let longueur : number = str.length;     // ou encore // let longueur : number = (<string>str).length;
                                        // ou encore //let longueur : number = (str as string).length;               
console.log(longueur);
*/


/*
        // opération de cast
let x:string ="2003"
let y:string ="18"
//conversion des chaînes de caractères en nombres 
let a:number = Number(x)
let b:number = Number(y)
console.log(typeof(a))          // affiche (number)
console.log(a)                  // affiche (2003)
*/


/*
        // le mot clé type
type maStructure = [number, string, string];
let first: maStructure = [100, "wick", `john` ];
console.log(first);             // affiche [ 100, ’wick’, ’john’ ]
*/

        


/*
        //L'opérateur ??
//L’opérateur ?? permet d’éviter d’affecter la valeur null ou undefined à une variable
var obj = {nom: null, prenom: 'john'};
let nom: string = obj.nom ?? 'doe';     // ou encore 
                                        // let nom: string = (obj.nom !== null && obj.nom !== undefined) ? obj.nom : ’doe’;
console.log(nom);       // affiche (doe)
*/


/*
        //les constances
const x : any  = 5;
//x="bonjour";         // affiche une erreur

        //autre manière de définir un const (TypeScript 3.4)
let X = "bonjour" as const;             // ou encore // let x = <string>"bonjour";
console.log(X);                 // affiche bonjour
console.log(typeof X);          // affiche string
        //comparaison
let Y: string = "bonjour";
console.log(X == y);            // affiche true
*/



/*

        //Les FONCTIONS

function addition (a:number,b:number) : number{
        return a+b;
}
let x=addition(1,3);
console.log(x);

// Une fonction qui ne retourne rien a le type void
function direBonjour():void{
        console.log("bonjour");
}
direBonjour();

// Une fonction qui n’atteint jamais sa fin a le type never
function boucleInfinie(): never {
        while (true){

        }
}
// boucleInfinie ();

// Il est possible d’attribuer une valeur par défaut aux paramètres d’une fonction
function division(x: number, y: number = 1) : number {
        return x / y;
}
console.log(division(10));
// affiche 10
console.log(division(10, 2));
// affiche 5

function division2(x,y?){
        if(y){
                return x/y;
        }
        return x;
}
console.log(division(10));
// affiche 10
console.log(division(10, 2));
// affiche 5


// Il est possible de définir une fonction prenant un nombre indéfini de paramètres
function somme(x: number, ...tab: number[]): number {
        for (let elt of tab)
                x += elt;
        return x;
}
console.log(somme(10));
// affiche 10
console.log(somme(10, 5));
// affiche 15
console.log(somme(10, 1, 6));
// affiche 17

// Il est possible d’autoriser plusieurs types pour un paramètre
function stringOrNumber(param1: string | number, param2: number): number {
        if (typeof param1 == "string")
                return param1.length + param2;
        return param1 + param2;
}
console.log(stringOrNumber("bonjour", 3));
// affiche 10
console.log(stringOrNumber(5, 3));
// affiche 8

function incrementAll(tab: ReadonlyArray<number>): void {
        for (let i = 0; i < tab.length; i++){
                // la ligne suivante génère une erreur
                //tab[i]++;
        }
}
// On peut aussi utiliser le mot-clé readonly qui s’applique sur les tableaux et les tuples
function incrementAll2(tab: readonly number[]): void {
        for (let i = 0; i < tab.length; i++){
                // la ligne suivante génère une erreur
                //tab[i]++;
        }
}

*/


/*
// Les Fonctions féchées
let sommeflech = (a : number,b : number): number => { return a+b; }
// ou encore // let somme = (a: number, b: number): number => a + b;
console.log(sommeflech(2,3));
let carre1=(a:number)=>a*a

//Sans typage, la fonction peut être écrite ainsi
let carre = a => a * a;
console.log(carre(2)); // affiche 4

let sayhello=():void => {console.log("hello")}
sayhello()

*/

/*
// Fonction forEach()
var tab = [1,2,3]

//console.log(tab)
//tab.forEach(elt=>console.log(elt));

// ou encore
// tab.forEach(afficher);
// function afficher(value) {
// console.log(value);
// }
// affiche 1 2 3

tab.forEach (afficher)

function afficher (value, key) {
        console.log(key, value)
}
/* affiche
0 2
1 3
2 5
*/

/*
tab.map(elt => elt + 3)
.filter(elt => elt > 5)
.forEach(elt => console.log(elt));
// affiche 6

var tab = [2, 3, 5];
var somme = tab.map(elt => elt + 3)
.filter(elt => elt > 5)
.reduce((sum, elt) => {return sum + elt;});

*/

/*
        // export 

export function somme(a: number = 0, b: number = 0) {
        return a + b;
        }
export function produit(a: number = 0, b: number = 1) {
        return a * b;
        }
// Ou aussi
function somme2(a:number = 0, b:number = 0) {
        return a + b;
        }
function produit2(a: number = 0, b: number = 1) {
        return a * b;
        }
export { somme2, produit2 };


// import { somme } from ’./fonctions’;
// import { somme, produit } from ’./fonctions’;

*/






