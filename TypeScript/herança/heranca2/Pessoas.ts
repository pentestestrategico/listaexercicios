export class Pessoas{
    private codigo:number
    private nome:string
    private rg:string

    constructor(cod:number, nome:string, rg:string){
        this.codigo = cod
        this.nome = nome
        this.rg = rg
    }

    public getNome():string{
        return this.nome
    }
    public setNome(nome:string):vois{
        this.nome = nome
    }
    public mostrarString():void{
        console.log(`O nome é: ${this.nome} - e o seu RG é: ${this.rg}`)
    }
}