//Definir se os números são PAR ou IMPAR

exibirTipo(5);

function exibirTipo(limite) {
  for (let i = 0; i <= limite; i++) {
    if (i % 2 === 0)
    console.log(i +' PAR')
    else 
    console.log( i +' IMPAR')
  }
}