const pessoa1 = {
    nome: 'Luiz',
    sobrenome: 'Miranda', 
    idade: 25,

    fala(){
        console.log(`${this.nome} ${this.sobrenome} está falando oi e dizendo que tem ${this.idade} anos...`);
    }, 

    incrementaIdade(){
        ++this.idade;
    }
};

pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();