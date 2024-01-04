function criaPessoa(nome, sobrenome, idade) {
    // return {
    //     nome: nome,
    //     sobrenome: sobrenome,
    //     idade: idade
    // };

    return {nome, sobrenome, idade}
}

const pessoa1 = criaPessoa('Luiz', 'Miranda', 25);
const pessoa2 = criaPessoa('Maria', 'Fernanda', 27);
console.log(pessoa1.nome, pessoa2.nome);