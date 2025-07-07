import { Produtos } from "./produtos";

const prod = new Produtos(20, 'Celio', 200);

prod.setCodigo(60);
prod.setNome('Nivaldo');
prod.setPreco(320);

console.log(`O código é: ${prod.getCodigo()}`);
console.log(`O nome é: ${prod.getNome()}`);
console.log(`O preço é: ${prod.getPreco()}`);
