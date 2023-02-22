export class Adresse{
    private _rue:string
    private _codePostal:string
    private _ville:string

    constructor(_rue:string,_codePostal:string,_ville:string){
        this._rue=_rue
        this._codePostal=_codePostal
        this._ville=_ville
    }

    public get rue(){
        return this._rue
    }
    public get codePostal(){
        return this._rue
    }
    public get ville(){
        return this._rue
    }

    public set rue(_rue:string){
        this._rue = _rue
    }
    public set codePostal(_codePostal:string){
        this._codePostal = _codePostal
    }
    public set ville(_ville:string){
        this._ville = _ville
    }

}