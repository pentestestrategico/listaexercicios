import { Carro } from "./carro";
import { Manutencao } from "./manutencao";

// instancia de classe, iniciar a classe

const car = new Carro('Fiat', 'Tempra', 95)
const man =new Manutencao('20-05-2025','12:30','troca pastilha')

//man.data = "05-02-2025"

//console.log(`a data é: ${man.exibirData} - Hora: ${man.exibirHora} - Serviço:  ${man.exibirServico} `)

man.exibirData()
man.exibirHora()
console.log(man.exibirServico())

