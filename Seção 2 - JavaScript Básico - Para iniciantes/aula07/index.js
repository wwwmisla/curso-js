//                  Variável CONSTante 
/*
 *                      Regras: 
 * Não podemos criar constantes com palavras reservadas; 
 * Constantes precisam ter nomes significativos;
 * Não pode começar o nome de uma constante com um número;
 * Não podem conter espaços ou traços;
 * Utilizamos camelCase;
 * Case-sensitive;
 * Não pode modificar o valor de uma constante;
 * NÃO UTILIZE VAR, UTILIZE CONST.
*/

const nome = "João";
console.log(nome);

// + - * /

// String = Text | Number = Número
const primeiroNumero = 5; // Number 
const segundoNumero = 10;
const resultado = primeiroNumero * segundoNumero;
const resultadoDuplicado = resultado * 2;
let resultadoTriplicado = resultado * 3;
// resultadoTriplicado = resultadoTriplicado + 5;

console.log('Resultado da operação: ', resultado);
console.log('Resultado da operação duplicada: ', resultadoDuplicado);
console.log('Resultado da operação triplicada: ', resultadoTriplicado);
console.log( typeof(primeiroNumero) ); // Qual é o tipo da variável