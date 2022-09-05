let A = 'Vermelho'; // Este é o valor da 1ª variável chamada "A"
let B = 'Azul'; // Este é o valor da 2ª variável chamada "B"

console.log(A); // Esse comando vai retornar o valor "Vermelho"
console.log(B); // Depois esse comando vai retornar o valor "Azul"

// Como inverter a ordem apresentada no console, sem reescrever os valores das variáveis "A" e "B"?

let C = A; // É necessário colocar uma 3ª variável (Vamos chamar ela de "C"); então guardamos o valor de "A" dentro dela, para não perdê-lo na modificação que será feita a seguir.
A = B; // Agora o valor da variável "A" foi modificado; "A" não é mais "Vermelho" e sim "Azul" (Pois "Azul" é o valor que foi atribuído à variável "B" lá no começo).
B = C; // O valor da variável "B" também foi modificado; agora não é mais "Azul" e sim o valor atribuído à variável "C". Qual foi o valor atribuído? Aquele valor de "A" que a gente guardou para não perder, ou seja, "Vermelho".

console.log(A); // Agora esse comando vai retornar "Azul", que é o novo valor atribuído à variável "A" que é igual à "B" (antes da modificação)
console.log(B); // E em seguida, esse comando vai retornar "Vermelho", que é o novo valor atribuído à variável "B" (depois da modificação) que é igual à C, que guardou o valor "Vermelho" de "A" definido lá no começo (antes da modificação).