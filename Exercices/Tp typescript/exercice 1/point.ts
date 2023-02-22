export class Point{

    private _abs : number;
    private _ord : number;

    public constructor (_abs: number, _ord: number){
        this._abs=_abs;
        this._ord=_ord;
    }

    public get abs () : number{
        return this._abs;
    }
    public get ord () : number{
        return this._ord;
    }

    public set abs (_abs: number){
        this._abs=_abs;
    }
    public set ord (_ord: number){
        this.ord=_ord;
    }

    public calculerDistance(p: Point ) : number {
        let x = p.abs-this.abs;
        let y = p.ord-this.ord;
        return Math.sqrt(Math.pow(x,2)+Math.pow(y,2));
    }

    public calculerMilieu(p: Point) : Point {
        let x = (p.abs+this.abs)/2;
        let y = (p.ord+this.ord)/2;
        var M : Point;
        M._abs= x;
        M._ord= y;
        return M;
    }

}