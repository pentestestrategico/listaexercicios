export class Carro{
    //atributos
    marca:string
    modelo: string
    ano: number
    ligado: boolean

    //metodos - metodo construtor
    constructor(marca: string, modelo:string, ano:number){
    this.marca = marca 
    this.modelo = modelo 
    this.ano = ano 
    this.ligado = false

}

//metodo - ações
ligar(): void{//metodo não tem return
    if(!this.ligado){
        this.lgado = true
    console.log(`${this.modelo} ligando carro`)
}else{
    console.log(`${this.modelo} já esta ligado`)
}

desligar()


