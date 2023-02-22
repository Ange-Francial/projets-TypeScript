// function add(x,y){return x+y;} //fonction nommée
// let myadd= function(x,y){return x+y;} // fonction anonyme
// function add(x:number, y:number):number{
//     return x+y;
// }
// function afficher(value: number):void{
//     console.log(value);
// }
// function division (x:number, y: number=1 ): number{
//     return x/y;
// }
// afficher(division(10,2));
// afficher(division(10));
// afficher(division(10,2,3));  // erreur
function stringOrNumber(param1, param2) {
    if (typeof param1 == "string")
        return param1.length + param2;
    else
        return param1 + param2;
}
stringOrNumber("bonjour", 5);
