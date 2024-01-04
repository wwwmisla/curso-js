//function soma(x, y){
function soma(x = 0, y = 0){
    const resultado = x + y;
    return resultado;
}

console.log(soma(2, 2));

const resultado = soma(5, 5);
console.log(resultado);

console.log(soma());

const raiz = function (n){
    return n ** 0.5;
};

console.log(raiz(9));
console.log(raiz(16));
console.log(raiz(25));

const raiz2 = n => n ** 0.5;

console.log(raiz2(9));
console.log(raiz2(16));
console.log(raiz2(25));