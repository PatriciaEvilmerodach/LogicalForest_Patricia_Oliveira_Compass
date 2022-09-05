// Determinar se um valor é Par ou Ímpar dentro de uma quantidade pré determinada de valores.

exibirTipo(10);

function exibirTipo(limite){
    for (let i = 0; i <= limite; i++) {
        if (i % 2 === 0) // Se a divisão de um número por 2 resultar em resto igual a zero, então ele é divisível por 2; em outras palavras, ele é um número par.
            console.log(i, 'é Par');
        else
            console.log(i, 'é Ímpar');
    }
}