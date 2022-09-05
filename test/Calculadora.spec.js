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

describe ('Testes de Potenciação', () => {
    it ('Potenciação de um número com expoente 1 (3¹ = 3)', () => {
            let resultado = Calculadora.pot(3, 1)
            expect(resultado).to.be.equal(3)
    })
    it ('Potenciação de um número com expoente 2 (3² = 9)', () => {
        let resultado = Calculadora.pot(3, 2)
        expect(resultado).to.be.equal(9)
    })
    it ('Potenciação de um número com expoente 3 (3³ = 27)', () => {
        let resultado = Calculadora.pot(3, 3)
        expect(resultado).to.be.equal(27)
    })
    it ('Potenciação de um número com expoente 0 (3⁰ = 1)', () => {
        let resultado = Calculadora.pot(3, 0)
        expect(resultado).to.be.equal(1)
    })
    it ('Potenciação de um número com expoente negativo (2^[-2] = 0,25)', () => {
        let resultado = Calculadora.pot(2, -2)
        expect(resultado).to.be.equal(0.25)
    })
})

describe ('Testes de Radiciação', () => {
    it ('Raiz quadrada de um número (√25 = 5)', () => {
            let resultado = Calculadora.rad(25, 2)
            expect(resultado).to.be.equal(5)
    })
    it ('Raiz cúbica de um número (³√8 = 2)', () => {
        let resultado = Calculadora.rad(8, 3)
        expect(resultado).to.be.equal(2)
    })
    // it ('Raiz quadrada de um número negativo (√-25 = Não é possível extrair raiz)', () => {
        // let resultado = Calculadora.rad(-25, 2)
        // expect(resultado).to.be.equal(NaN)
    // })
})

describe ('Testes de Conversão', () => {
    it ('Converter graus Celsius para Farenheint (1°C = 33,8° F)', () => {
            let resultado = Calculadora.convCparaF(25)
            expect(resultado).to.be.equal(77)
    })
    it ('Converter graus Farenheint para Celsius (1°F = aprox. -17,22°C)', () => {
        let resultado = Calculadora.convFparaC(77)
        expect(resultado).to.be.equal(25)
    })
    it ('Converter km/h em mph (1 km = aprox. 0,62 milhas)', () => {
        let resultado = Calculadora.convKMparaMILES(142)
        expect(resultado).to.be.equal(88.234682)
    })
    it ('Converter mph em km/h (1 milha = aprox. 1,61 km)', () => {
        let resultado = Calculadora.convMILESparaKM(88)
        expect(resultado).to.be.equal(141.6096)
    })
    it ('Converter Kg em Lb (1 kg = aprox. 2,205 lb)', () => {
        let resultado = Calculadora.convKGparaLB(81)
        expect(resultado).to.be.equal(178.57422)
    })
    it ('Converter Lb em Kg (1 lb = aprox. 0,45 kg)', () => {
        let resultado = Calculadora.convLBparaKG(180)
        expect(resultado).to.be.equal(81.64656)
    })
})