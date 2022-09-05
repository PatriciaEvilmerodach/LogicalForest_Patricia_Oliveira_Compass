// Criar um array de objetos por faixa de preço para ser utilizado em um site de compras

// Primeira opção
let faixas1 = [
    {tooltip: 'Até R$ 250', mínimo: 0, máximo: 250},
    {tooltip: 'Entre R$ 250 e R$ 500', mínimo: 250, máximo: 500},
    {tooltip: 'Acima de R$ 500', mínimo: 500, máximo: 999999}
]
    console.log (faixas1);

// Segunda opção (através de Factory Function)
function criarFaixaDePreço(tooltip, mínimo, máximo) {
    return {
        tooltip,
        mínimo,
        máximo
    }
}

let faixas2 = [
    criarFaixaDePreço ('Até R$ 100', 0, 100),
    criarFaixaDePreço ('Entre R$ 100 e R$ 200', 100, 200),
    criarFaixaDePreço ('Acima de R$ 200', 200, 999999)
]
    console.log (faixas2);

// Terceira opção (através de Constructor Function)
function faixaDePreço (tooltip, mínimo, máximo){
    this.tooltip = tooltip,
    this.mínimo =  mínimo,
    this.máximo = máximo
}
let faixas3 = [
    new faixaDePreço ('Até R$ 50', 0, 50),
    new faixaDePreço ('Entre R$ 50 e R$ 100', 50, 100),
    new faixaDePreço ('Acima de R$ 100', 100, 999999)
]
    console.log(faixas3);