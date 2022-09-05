// Criar uma função para exibir a quantidade de asteríscos que uma linha possui.

exibirAsteríscos(10);

function exibirAsteríscos(linhas){
    for (let linha = 1; linha <= linhas; linha++){ // A contagem de linhas inicia no valor "1"
        let padrão = ''; // Por padrão, a linha inicia vazia
        for (let i = 0; i < linha; i++){
            padrão += '*'; // E a cada vez que o loop é realizado, um asterísco "*" é adicionado. Por ser uma String, os símbolos vão se acumulando uns na frente dos outros.
        }
        console.log(padrão);
    }
}