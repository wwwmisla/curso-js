/*
&& -> false && true -> false "o valor mesmo"
|| -> true || false -> vai retornar "o valor verdadeiro"

FALSY
*false
0
'' "" ``
null / undefined 
NaN
*/

console.log('Luiz' && NaN && 'Maria');

console.log(0 || false || null || 'Luiz Otavio' || true);

const corUsuario = null;
const corPadrao = corUsuario || 'preto';

console.log(corPadrao);

const a = 0;
const b = null;
const c = 'Joaozinho';
const d = false;
const e = NaN;
const f = 'false';

console.log(a || b || c || d || e || f);
