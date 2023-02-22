import {Adresse} from "./adresse"
class Personne{
    private _nom : string;
    private _email : string;
    private _message : string;
    private _adresse: Adresse


    constructor (_nom:string, _email:string, _message: string, _adresse?: Adresse){
        this._nom=_nom;
        this._email=_email;
        this._message=_message;
        if(_adresse)
            this._adresse=_adresse;
    }

    public get nom() : string {
        return this._nom;
    }
    public get email() : string {
        return this._email;
    }
    public get message() : string {
        return this._message;
    }

    public set nom(_nom:string) {
        this._nom=_nom;
    }
    public set email(_email:string) {
        this._email=_email;
    }
    public set message(_message:string) {
        this._message;
    }
    
}