const button = document.querySelector('#submit-button');
const formulario = document.querySelector('#my-form')
const nome = document.querySelector('#name');
const email = document.querySelector('#email');

const items = document.querySelector('.items')
const body = document.querySelector('body')

button.addEventListener('click', (e)=> {
    e.preventDefault();
     
    const nomeValue = nome.value;
    const emailValue = email.value;

    if (nomeValue === '' || emailValue === '') {
       return alert('Preencha todos os campos !');
       
    }


    formulario.style.background = 'blue';
    items.style.color = 'blue';
    body.style.background = 'grey';
    items.firstElementChild.textContent = nomeValue;
    items.children[1].textContent = emailValue;

});