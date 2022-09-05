// Criar um Objeto endereço que contém: Rua, Cidade, CEP
// E também que contém a variável "exibirEndereço(endereço)"

let endereço = {
    Rua: "A",
    Cidade: "B",
    CEP: "C"
}
function exibirEndereço(endereço) {
    for (let chave in endereço)
        console.log (chave, endereço[chave]);
}
exibirEndereço(endereço);

// Este é exercício é semelhante ao do Mini Projeto 06