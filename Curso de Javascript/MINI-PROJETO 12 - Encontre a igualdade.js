// Criar duas funções para comparar igualdades entre objetos

function endereço (rua, cidade, cep) {
    this.rua = rua,
    this.cidade = cidade,
    this.cep = cep
}
const endereço1 = new endereço ('a', 'b', 'c');
const endereço2 = new endereço ('a', 'b', 'c'); // Repare que os valores de Rua, Cidade e CEP são iguais.
const endereço3 = endereço1; // Este "Endereço 3" utiliza os mesmos valores contidos no "Endereço 1", ou seja, ele tem os valores do Endereço 1 na memória.

function sãoIguais (endereço1, endereço2){ // Essa função vai comparar o valor de cada elemento pra ver se ambos os Endereços 1 e 2 são iguais
    return endereço1.rua === endereço2.rua &&
    endereço1.cidade === endereço2.cidade &&
    endereço1.cep === endereço2.cep
}
    console.log (sãoIguais (endereço1, endereço2)); // Os endereços tem valores iguais.

function temMesmoEndereçoMemória (endereço1, endereço3){ // Essa função vai verificar se o Endereço 1 e 3 compartilham exatamente dos mesmos valores; ou seja, utilizam a mesma base/mesma memória.
    return endereço1 === endereço3;
}
    console.log (temMesmoEndereçoMemória (endereço1, endereço3));