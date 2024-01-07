/*
OPERADORES LÓGICOS 
&& -> AND -> E - todas as expressões precisam ser verdadeiras para retornar true
|| -> OR -> OU
!  -> NOT -> NÃO
*/

const expressaoAnd = true && true;
console.log(expressaoAnd);

const expressaoOr = true || false;
console.log(expressaoOr);

const usuario = 'Luiz'; //form usuario digitou
const senha = '123456'; //form usuario digitou

//                        true              true                          
const vaiLogar = usuario === 'Luiz' && senha === '123456'; //base de dados
console.log(vaiLogar);

//                        true              false                          
const vaiLogar2 = usuario === 'Luiz' || senha === '12345'; //base de dados
console.log(vaiLogar2);

console.log(!true);