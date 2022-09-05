// Criar uma função para mostrar os números primos dentro de uma quantidade pré determinada de valores

exibirNúmerosPrimos (15);

function exibirNúmerosPrimos (limite){
    for (let número = 2; número <= limite; número++) { // Os números primos iniciam no "2"
        let númeroPrimo = true; // O número vai ser considerado primo quando ele for divisível somente por 1 e por ele mesmo.
        for (let divisor = 2; divisor < número; divisor++) {
            if (número % divisor === 0) { // Se o número for divisível por outros valores além de 1 e ele mesmo, então ele não é um número primo.
                númeroPrimo = false;
                break; // Uma vez que o comando "prove" que o número não é primo, não é necessário que ele continue realizando o loop.
            }
        }
    if (númeroPrimo)
        console.log(número);
    }
}