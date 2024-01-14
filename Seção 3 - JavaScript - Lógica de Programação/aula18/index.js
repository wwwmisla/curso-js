//            0123...
// const nome = 'Luiz Otávio';
const nomes = ['Luiz', 'Otávio', 'Henrique'];

for (let i = 0; i < nomes.length; i++) {
    console.log(nomes[i]);
}

console.log('#####')

for (const i in nomes) {
    console.log(nomes[i]);
}

console.log('#####')

for (let valor of nomes) {
    console.log(valor);
}

console.log('#####')

nomes.forEach(function (valor, indice, array) {
    console.log(valor, indice, array);
});

console.log('#####')

const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Otavio'
};

for (let chave in pessoa) {
    console.log(chave, pessoa[chave]);
}

// For clássico - geralmente com iteráveis (array ou strings)
// For in - retorna o índice ou chave (string, array ou objetos)
// For of - retorna o valor em si (iteráveis, array ou strings)