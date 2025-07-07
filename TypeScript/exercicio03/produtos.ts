export class Produtos{
    codigo:number
    nome:string
    preco:number

    constructor(codigo: number, nome: string, preco: number) {

        this.codigo = codigo
        this.nome = nome 
        this.preco = preco
    }
    
    // metodos SET PRA INSERIR OS ATRIBUTOS
    setCodigo(codigo:number){
        this.codigo = codigo
    }

    setNome(nome:string){
        this.nome = nome 
    }
    setPreco(preco:number){
        this.preco = preco
    }

    // METODO GET PRA VISUALIZAR OS ATRIBUTOS
    getCodigo(){
        return this.codigo
    }
    getNome(){
        return this.nome
    }
    getPreco(){
        return this.preco
    }

}