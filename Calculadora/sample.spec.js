import assert from 'assert'
import chai from 'chai'

const expect = chai.expect

describe('Meu primeiro Teste', () => {
    it ('Verificar uma Igualdade de Pontos entre Pilotos', () => {
        let aux = 369.5
        // assert.strictEqual(aux, 369.5)
        expect(aux).to.be.equal(369.5).and.to.be.a('number');
    })
    it ('Verificar uma Igualdade entre Equipe e Motor utilizado', () => {
        let aux = 'Ferrari'
        // assert.strictEqual(aux, 'Ferrari')
        expect(aux).to.be.equal('Ferrari').and.to.be.a('string');
    })
})

describe('Meu segundo Teste', () => {
    it ('Verificar uma Desigualdade de Pontos entre Pilotos', () => {
        let aux = 395.5
        // assert.notStrictEqual(aux, 387.5)
        expect(aux).to.not.be.equal(387.5);
    })
    it ('Verificar uma Desigualdade entre Equipe e Motor utilizado', () => {
        let aux = 'RedBull'
        // assert.notStrictEqual(aux, 'Honda')
        expect(aux).to.not.be.equal('Honda');
    })
})