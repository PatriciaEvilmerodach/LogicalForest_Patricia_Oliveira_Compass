// O FizzBuzz compara valores e dá um retorno baseado no valor de entrada.

// Aplicar este algoritmo com as seguintes condições:
    // Se a entrada não é um número, retorna a mensagem 'Não é um número'
    // Se a entrada for divisível por 3 e 5, retorna FizzBuzz
    // Se a entrada for divisível apenas por 3, retorna Fizz
    // Se a entrada for divisível apenas por 5, retorna Buzz
    // Se a entrada não é divisível por 3 ou 5, retorna o valor da própria entrada

const resultado = fizzBuzz (15);
    console.log(resultado);
    
function fizzBuzz(entrada) {
    if (typeof entrada !== 'number')
        return 'Não é um número';
    if (entrada % 3 === 0 && entrada % 5 === 0) // Essa comparação deve vir antes das próximas duas. Por exemplo: 15 é divisível por 3 e 5, mas se o comando comparar por 3 primeiro, ele vai parar e retornar apenas "Fizz" ou invés de "FizzBuzz"
        return 'FizzBuzz';
    if (entrada % 3 === 0)
        return 'Fizz';
    if (entrada % 5 === 0)
        return 'Buzz';
    else
        return entrada;
}