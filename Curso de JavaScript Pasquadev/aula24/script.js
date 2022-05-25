// velocidade maxima de 70
// a cada 5km acima do limite voce ganha 5 pontos na carteira
// math.Floor()
// caso os pontos seja maior que 12 a carteira e suspendida

verificarVelocidade(100);

function verificarVelocidade(velocidade) {
    if (velocidade <= 70)
    console.log('OK')
    else {
     const pontos = (( velocidade - 70) / 5)
     if(pontos >= 12)
     console.log('Carteira suspensa')
     else 
       console.log('Voce perdeu', pontos + ' pontos na sua CNH!')
     
    }
}
