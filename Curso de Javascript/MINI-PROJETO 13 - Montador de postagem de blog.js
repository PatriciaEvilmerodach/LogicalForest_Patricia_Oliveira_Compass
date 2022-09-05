// Criar um objeto de postagem com as informações:
    // Título
    // Mensagem
    // Autor
    // Visualizações
    // Comentários
        // [Autor, Mensagem]
    // Está ao Vivo

let postagem = { // A postagem é um array com vários elementos e seus respectivos valores.
    Título: 'A',
    Mensagem: 'B',
    Autor: 'C',
    Visualizações: 100,
    Comentários : [ // Aqui temos um array de elementos, dentro do array principal.
        {Autor: 'AAA', Mensagem: 'BBB'},
        {Autor: 'CCC', Mensagem: 'DDD'}
    ],
    estaAoVivo : true
}
console.log (postagem);