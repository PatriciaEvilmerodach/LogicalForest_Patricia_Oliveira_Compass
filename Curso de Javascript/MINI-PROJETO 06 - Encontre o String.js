// Criar uma função que lê as propriedades de um objeto
// Depois exibir somente as propriedades tipo String que estão neste objeto

const filme = {
    Título: 'Star Wars', // Cada item desta lista é um objeto dentro da constante "filme"
    Ano: 1977,
    Diretor: 'George Lucas',
    Personagem: 'Luke Skywalker'
}
exibirPropriedades (filme);
function exibirPropriedades(obj) {
    for (prop in obj)
        if (typeof obj[prop] === 'string') // Coloca-se "obj" com "[prop]" logo em seguida, para que o comando não procure a string apenas no nome do objeto e sim no valor contido dentro nele.
            console.log (prop, obj[prop]) // Vai imprimir nome e propriedade do objeto, respectivamente.
}