export class Pessoas{
private id:number
private nome:string
private idade: number

constructor(){
    this.id = 0
    this.nome = ''
    this.idade = 0
}
// metodos get
protected getId():number{
return this.id
}
protected getNome():string{
return this.nome
}
protected getIdade():number{
return this.idade
}
// metodos set
protected setId(id:number):void{
    this.id = id
}
protected setNome(nome:string):void{
    this.nome = nome
}
// permitir inserir caso a idade seja maior que 18
protected setIdade(idade:number):boolean{
    if(idade <= 18){
        return false
    }else{
        this.idade = idade
        return true
    }
}



}