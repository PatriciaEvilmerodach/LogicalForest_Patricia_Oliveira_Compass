// Criar uma função que retorna a soma de todos os múltiplos de 3 e 5 dentro de uma quantidade pré determinada de valores.

somaDeValores (10);

function somaDeValores(limite){ // No "limite" será determinado o valor máximo e dentro deste iremos procurar os múltiplos de 3 e 5.
    let multiplosDe3 = 0; // É necessário armazenar os valores múltiplos de 3 em uma variável
    let multiplosDe5 = 0; // E também armazenar os valores de multiplos de 5 em outra variável
    for (i = 0; i <= limite; i++){ // A contagem inicia no número 0 e enquanto o valor de "i" for menor ou igual ao valor indicado no limite, acrescenta-se "1" ao valor cada vez que o Loop é realizado.
        if (i % 3 === 0) // Se o número é divisível por 3, então ele é múltiplo deste mesmo número.
        multiplosDe3 += i; // Essa linha é necessária, pois sem ela ao realizar o Loop o múltiplo de 3 que foi encontrado anteriormente será sobrescrito por um novo valor encontrado. Para que isso não aconteça precisamos somar o valor anterior com o próximo, ou seja "multiplosDe3 + i".
        if (i % 5 === 0) // Aplica-se a mesma lógica acima.
        multiplosDe5 += i; // Idem
    }
    console.log (multiplosDe3 + multiplosDe5); // Por fim, esse comando vai somar os valores encontrados em ambas as variáveis
}