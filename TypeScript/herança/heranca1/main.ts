import { Gato } from "./gato";
import { Cachorro } from "./cachorro";

// estancia do objeto - Classe Gato
const cat = new Gato('Mimi', 2, 'Siamês', 'Branco')
cat.fazerSom()
cat.comer()
console.log(cat.getCorPelo())

// estancia da classe Cachorro
const dog = new Cachorro('Rex', 4, 'Labrador', 'Preto')
dog.fazerSom()
dog.comer()
console.log(dog.getCorPelo())