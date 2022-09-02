import assert from 'assert'
import chai from 'chai'
import Calculadora from '../src/Calculadora.js'

const expect = chai.expect

describe ('Testes de Soma', () => {
    it ('Soma entre dois números positivos (1 + 2 = 3)', () => {
        let resultado = Calculadora.soma(1, 2)
        expect(resultado).to.be.equal(3)
    })
    it ('Soma entre dois números negativos ([-1] + [-2] = [-3])', () => {
        let resultado = Calculadora.soma(-1, -2)
        expect(resultado).to.be.equal(-3)
    })
    it ('Soma entre um número positivo e outro negativo (1 + [-2] = [-1])', () => {
        let resultado = Calculadora.soma(1, -2)
        expect(resultado).to.be.equal(-1)
    })
})

describe ('Testes de Subtração', () => {
    it ('Subtração entre dois números positivos (3 - 2 = 1)', () => {
        let resultado = Calculadora.sub(3, 2)
        expect(resultado).to.be.equal(1)
    })
    it ('Subtração entre dois números negativos ([-3] - [-2] = [-1])', () => {
        let resultado = Calculadora.sub(-3, -2)
        expect(resultado).to.be.equal(-1)
    })
    it ('Subtração entre um número positivo e outro negativo (3 - [-2] = [5])', () => {
        let resultado = Calculadora.sub(3, -2)
        expect(resultado).to.be.equal(5)
    })
})

describe ('Testes de Multiplicação', () => {
    it ('Multiplicação entre dois números positivos (1 * 2 = 2)', () => {
            let resultado = Calculadora.mult(1, 2)
            expect(resultado).to.be.equal(2)
    })
    it ('Multiplicação entre dois números negativos ([-1] * [-2] = 2)', () => {
            let resultado = Calculadora.mult(-1, -2)
            expect(resultado).to.be.equal(2)
    })
    it ('Multiplicação entre um número positivo e outro negativo (1 * [-2] = [-2])', () => {
            let resultado = Calculadora.mult(1, -2)
            expect(resultado).to.be.equal(-2)
    })
})
    
describe ('Testes de Divisão', () => {
    it ('Divisão entre dois números positivos (2 / 1 = 2)', () => {
            let resultado = Calculadora.div(2, 1)
            expect(resultado).to.be.equal(2)
    })
    it ('Divisão entre dois números negativos ([-2] / [-1] = 2)', () => {
            let resultado = Calculadora.div(-2, -1)
            expect(resultado).to.be.equal(2)
    })
    it ('Divisão entre um número positivo e outro negativo (2 / [-1] = [-2])', () => {
            let resultado = Calculadora.div(2, -1)
            expect(resultado).to.be.equal(-2)
    })
})