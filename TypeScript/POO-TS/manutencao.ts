export class Manutencao{
    data:string
    hora:string
    servico:string

    constructor(data:string,hora:string,servico:string){
        this.data = data
        this.hora = hora
        this.servico = servico
    }
    //metodos prorpios pra inseção dos valores nos atributos - GET (visualizar e SET (inserir)
    //SET

    dataSet(data:string){
        this.data = data
    }
    horaSet(hora:string){
        this.hora = hora
    }
    servicoSet(servico:string){
        this.servico= servico
    }

    //GET

    exibirData(){
        console.log(`Data: ${this.data}`)
    }
    exibirHora(){
        console.log(`Hora: ${this.hora}`)
    }
    exibirServico(){
        return `Servico: ${this.servico}`
    }

    exibirTudo(){
        return `Data:${this.data} - Hora: ${this.hora} - Serviço: ${this.servico}} `
    }