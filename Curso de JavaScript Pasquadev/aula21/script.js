// For-in

const pessoa = {
  nome: 'Nilson',
  idade: 17
};

//key-value

for(let chave in pessoa) {
  console.log(chave,pessoa.nome);
}

const cores = ['vermelho', 'azul', 'verde']

for (let indice in cores) {
  console.log(indice,cores[indice])
}

// for-of 
for(let cor of cores) {
    console.log(cor);
}