const todos = [
    {
        id: 1,
        profissao: 'Estudante de programação',
        completo: 'Falso',
    },
    {
        id: 2,
        profissao: 'ler',
        completo: 'verdadeiro',
    },
    {
        id: 3,
        profissao: 'Patinar',
        completo: 'Falso',
    },
    {
        id: 4,
        profissao: 'Jogador de Futebol',
        completo: 'verdadeiro',
    },
    
];

const todosJSON = JSON.stringify(todos);

console.log(todosJSON); 