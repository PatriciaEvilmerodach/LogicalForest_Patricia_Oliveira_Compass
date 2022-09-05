export default class Calculadora {
    static soma (a, b){
        return a + b
    }

    static sub (a,b){
        return a - b
    }

    static mult (a,b){
        return a * b
    }

    static div (a,b){
        return a / b
    }
    static pot (a,b){
        return a ** b // Este operador (**) realiza a potenciação do primeiro número pelo segundo.
    }
    static rad (a,b){
        return a ** (1/b) // Para obter a raiz de um número, é necessário fazer o inverso da potência; Divide-se 1 pelo valor que deseja calcular a raiz (ex: Raiz Quadrada [1/2], Cúbica [1/3])
    }
    static convCparaF (a,b){
        return b = (a * 1.8) + 32 // Se você multiplicar o valor de graus Celsius por 1,8 e depois somar 32, você obtém o equivalente em Farenheit.
    }
    static convFparaC (a,b){
        return b = (a - 32) / 1.8 // Logo, para converter Farenheit em Celsius, deve-se fazer a operação inversa: Subtrair 32 do valor em Farenheit e depois dividir por 1,8.
    }
    static convKMparaMILES (a,b){
        return b = a * 0.621371 // 1 quilômetro equivale à 0.621371 milhas
    }
    static convMILESparaKM (a,b){
        return b = a * 1.6092 // 1 milha equivale à 1.6092 quilômetros
    }
    static convKGparaLB (a,b){
        return b = a * 2.20462 // 1 quilograma equivale à 2.20462 libras
    }
    static convLBparaKG (a,b){
        return b = a * 0.453592 // 1 libra equivale à 0.453592 quilogramas
    }
}