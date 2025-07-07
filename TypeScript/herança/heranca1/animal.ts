export class Animal{
    //Atributos
    private nome:string
    private idade:number
    private raca:string

    //método construtor - inicializar os atributos
    constructor(n:string, idade:number, raca:string){
        this.nome = n
        this.idade = idade
        this.raca = raca
    }
    //método get - visualizar
    public getNome():string{
        return this.nome
    }
    //método set - inserir valores ao atributo
    //void - métodos que não tem retornos (return)
    public setNome(nome:string):void{
        this.nome = nome
    }
    // ---------------------
    //método get - visualizar
    public getIdade():number{
        return this.idade
    }
    //método set - inserir valores ao atributo
    //void - métodos que não tem retornos (return)
    public setIdade(idade:number):void{
        this.idade = idade
    }
    // ----------------------------
    //método get - visualizar
    public getRaca():string{
        return this.raca
    }
    //método set - inserir valores ao atributo
    //void - métodos que não tem retornos (return)
    public setRaca(raca:string):void{
        this.raca = raca
    }
    // -------------outro métodos-------------
    // método comuma todas as classes
    public comer():void{
        console.log(`${this.nome} está comendo.`)
    }
    // método polifórmico: será sobrescrito nas classes filhas
    public fazerSom():void{
        console.log(`${this.nome} está fazendo um som!`)
    }

}