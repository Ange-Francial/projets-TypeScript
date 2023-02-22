export class adresse_ip {
    public _a:number
    public _b:number
    public _c:number
    public _d:number

    public constructor(_a: number, _b:number, _c:number, _d:number){
        this._a= _a>=0 && _a<=255 ? _a:0
        this._a= _a>=0 && _a<=255 ? _a:0
        this._a= _a>=0 && _a<=255 ? _a:0
        this._a= _a>=0 && _a<=255 ? _a:0
    }


    public function getDigit(Ad: adresse_ip, i:number):number{
        if (i==1)
            return Ad._a
        if (i==2)
            return Ad._b
        if (i==3)
            return Ad._c
        if (i==4)
            return Ad._d
    }

    public toString(IP:adresse_ip): string{
        let n1:string = String(this._a) 
        let x:any = this._b
        let n2:string = x as string
        let n3:string = String(this._c)
        let n4:string = String(this._d)

        return ""

    }


}