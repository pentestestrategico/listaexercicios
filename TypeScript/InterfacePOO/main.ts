import { Produtos } from "./produtos";
import { servicosProduto } from "./servico";

const servico = new servicosProduto()
const produto1 = new Produtos(1, 'NoteBook', 3500)
const produto2 = new Produtos(20, 'Teclado', 230)


servico.adicionarProduto(produto1)
servico.adicionarProduto(produto2)

servico.listarProduto()