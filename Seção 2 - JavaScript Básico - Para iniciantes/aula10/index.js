//  TIPOS DE DADOS PRIMITIVOS
// String, number, undefined, null, boolean, symbol
const nome = 'Misla'; // string
console.log(typeof nome, nome); 
const sobrenome = 'Wislaine'; // string
console.log(typeof sobrenome, sobrenome); 
const nomeCompleto ='Misla Wislaine'; // string
console.log(typeof nomeCompleto, nomeCompleto); 
const num1 = 10; // number 
console.log(typeof num1, num1); 
const num2 = 20; // number
console.log(typeof num2, num2); 
let nomeAluno; // undefined -> não aponta pra local nenhum na mémoria
console.log(typeof nomeAluno, nomeAluno);
const sobrenomeAluno = null; // nulo -> não aponta pra local nenhum na mémoria
console.log(typeof sobrenomeAluno, sobrenomeAluno);
const aprovado = true; // booleano -> true, false (lógico)
console.log(typeof aprovado, aprovado);

// Tipos de dados primitivos | a & b não apontam para o mesmo local na mémoria
let aPrimitivo = 2;
let bPrimitivo = aPrimitivo;

console.log(aPrimitivo, bPrimitivo); // 2, 2

aPrimitivo = 3;
console.log(aPrimitivo, bPrimitivo); // 3, 2

//

// Valores por referência | a & b apontam para o mesmo local na mémoria
const aReferencia = [1,2]; // array
const bReferencia = aReferencia;

console.log(aReferencia, bReferencia);

bReferencia.push(3);
console.log(aReferencia, bReferencia);