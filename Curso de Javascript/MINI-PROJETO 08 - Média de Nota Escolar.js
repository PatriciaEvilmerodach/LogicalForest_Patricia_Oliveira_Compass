// Obter a média a partir de um array de valores.

// Condições:
    // 0 - 59: F
    // 60 - 69: D
    // 70 - 79: C
    // 80 - 89: B
    // 90 - 100: A

const array = [70, 70, 80];
    console.log (mediaDoAluno(array));

function mediaDoAluno(notas){
    const media = calcularMedia(notas);

        if (media < 59) return "F";
        if (media < 69) return "D";
        if (media < 79) return "C";
        if (media < 89) return "B";
        else return "A" // Se a nota for maior que 89, necessariamente ela vai ser uma nota "A".
}

function calcularMedia (array) { // A função para calcular a média foi criada fora do bloco anterior
    let soma = 0;
    for (let valor of array) {
        soma += valor; // Semelhante ao exercício anterior, aqui vai somar cada valor do array enquanto o loop estiver sendo realizado; sem essa linha, um valor sobrescreveria o outro.
    }
    return soma/(array.length); // Uma vez que temos a soma de todos os valores do array, precisamos dividir o total pela quantidade de elementos dentro deste array para obter a média
}