// Escrever uma Função que utiliza 2 números e retorna o Maior valor entre eles.

function max (a, b) {
    if (a > b)
        return a;
    else
        return b;
}

let maiorValorEntreNumeros1 = max (44, 63);
    console.log (maiorValorEntreNumeros1);

// Também dá pra fazer essa função utilizando operadores ternários.

function max (a, b) {
    return a > b ? a : b ; // A é maior que B? Se sim, retorne A. Caso contrário, retorne B.
}

let maiorValorEntreNumeros2 = max (55, 16);
    console.log (maiorValorEntreNumeros2);