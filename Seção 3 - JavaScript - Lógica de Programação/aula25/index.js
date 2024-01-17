function soma (x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        throw new Error ('x e y precisam ser números!');
    }

    return x + y;
}

try {
    console.log(soma(2, 1));
    console.log(soma('2', 1));
} catch (error) {
    // console.log(error);
    console.log('Alguma coisa mais amigável para o usuário!');
}