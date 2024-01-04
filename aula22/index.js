/*
    Primitivos (imutáveis) - string, number, boolean, undefined,
    null (bigint, symbol)  - valores copiados
    Referências (mutáveis) - array, object, function - passados por referência (apontam para o mesmo local na memoria)
*/

//primitivos
let aP = 'A';
let bP = aP;
console.log(aP, bP);

aP = 'B';
console.log(aP, bP);

//referência
let aR = [1,2,3];
let bR = aR;
let cR = [...bR];
let dR = cR;
console.log(aR, bR);

aR.push(4);
console.log(aR, bR);

aR.pop(4);
console.log(aR, bR);

aR.push('Luiz');
console.log(aR, bR, cR, dR);

//objetos
const e = {
    nome: 'Luiz',
    sobrenome: 'Miranda'
};

const f = e;

e.nome = 'Otavio';
console.log(e, f);

const g = {
    nome: 'Luiz',
    sobrenome: 'Miranda'
};

const h = {...g};

g.nome = 'Otavio';
console.log(g, h);