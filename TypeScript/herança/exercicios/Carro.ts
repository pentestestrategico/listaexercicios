export class Carro{
    
//atributos
private id:string
private nome:string
private marca:string
private ano:string

  constructor(id:string, nome:string, marca:string, ano:string){
        this.id = id
        this.nome = nome
        this.marca = marca
        this.ano = ano
    }
    
    //metodos GET
    public getId():string{
        return this.id
    }
    public getNome():string{
        return this.nome
    }
    public getMarca():string{
        return this.marca
    }
    public getAno():string{
        return this.ano
    }
  
    // METODOS SET


    public setId(id:string):void{
        this.id = id
    }
    public setNome(nome:string):void{
        this.nome = nome
    }
    public setMarca(marca:string):void{
        this.marca = marca
    }
    public setAno(ano:string):void{
        this.ano = ano
    }

    //metodo pra exibir dados do veiculo
  public ExibirVeiculo():void{
        console.log(`Codigo: ${this.id} - Nome: ${this.nome} - Marca: ${this.marca} - Ano: ${this.ano}`)
    }
}