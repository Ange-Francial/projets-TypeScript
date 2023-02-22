import {Point} from "./point"

export class TroisPoints {

    private _premier : Point
    private _deuxieme : Point
    private _troisieme : Point

    public constructor (_premier: Point, _deuxieme: Point, _troisieme: Point){
        this._premier = _premier;
        this._deuxieme = _deuxieme;
        this._troisieme = _troisieme;
    }

    public get premier (): Point{
        return this._premier;
    }
    public get deuxieme (): Point{
        return this._deuxieme;
    }
    public get troisieme (): Point{
        return this._troisieme;
    }

    public set premier (_premier : Point){
        this._premier=_premier;
    }
    public set deuxieme (_deuxieme : Point){
        this._deuxieme= _deuxieme;
    }
    public set troisieme (_troisieme : Point){
        this._troisieme= _troisieme;
    }

    public TesterAlignement(): boolean {

        let x = this._premier.calculerDistance(this._deuxieme);
        let y = this._premier.calculerDistance(this.troisieme);
        let z = this._deuxieme.calculerDistance(this._troisieme);

        if (x==y+z || y==x+z || z== x+y) {
            return true;
        } else {
            return false;
        }
    }

    public estIsocele(): boolean {

        let x = this._premier.calculerDistance(this._deuxieme);
        let y = this._premier.calculerDistance(this.troisieme);
        let z = this._deuxieme.calculerDistance(this._troisieme);

        if (x==y || x==z || z==y) {
            return true;
        } else {
            return false;
        }
    }




}