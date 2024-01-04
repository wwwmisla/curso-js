//indices     0123456789
const nome = 'Mario João';
console.log(nome[0])
// indices        0        1       2       3
const nomes = ['Maria', 'João', 'Mario', 'Ana'];
console.log(nomes);
console.log(nomes[2]);

nomes[3] = 'Eduarda';  //alterando
console.log(nomes[3]);

nomes[4] = 'Luiz'; //adiciona no fim
console.log(nomes);

nomes[nomes.length] = 'Fábio'; //adiciona no fim
console.log(nomes);

nomes.push('José'); //adiciona no fim
console.log(nomes);

nomes.unshift('Mariana'); //adiciona no inicio
console.log(nomes);

const removidoFim = nomes.pop(); //altera os indices, removendo elemento no final
console.log(removidoFim);
console.log(nomes);

const removidoInicio = nomes.shift(); //altera os indices, removendo elemento no inicio
console.log(removidoInicio);
console.log(nomes);

delete nomes[4]; //remove sem alterar os indices
console.log(nomes);

console.log(nomes[50]); //acessar indice inexistente

console.log(nomes.slice(0,3)); //fatiamento
console.log(nomes.slice(0,-3));

console.log(typeof nomes); //saber o tipo
console.log(nomes instanceof Array); //saber se é um array mesmo