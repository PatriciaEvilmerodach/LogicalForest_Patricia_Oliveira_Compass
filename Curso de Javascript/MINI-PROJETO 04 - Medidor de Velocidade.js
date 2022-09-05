// Fazer um medidor de velocidade, semelhante aos Radares que existem em rodovias.

// As condições são as seguintes:
    // A Velocidade Máxima da via é de 70 km/h
    // A cada 5km/h acima do limite, você ganha 1 ponto na carteira.
    // Se o total de pontos for Maior ou Igual a 12, sua carteira é Suspensa.

verificarVelocidade(110);

    function verificarVelocidade (velocidade) {
        const velocidadeMáxima = 70;
        const kmPorPonto = 5;
        if (velocidade <= velocidadeMáxima)
            console.log ('Você está dentro do limite de velocidade desta via');
        else {
            const pontos = Math.floor (((velocidade - velocidadeMáxima) / kmPorPonto));
            if (pontos >= 12)
                console.log ('Sua carteira de motorista foi suspensa');
            else
                console.log ('Adicionado(s)', pontos, 'ponto(s) na sua carteira por ultrapassar o limite de velocidade desta via');
        }
    }