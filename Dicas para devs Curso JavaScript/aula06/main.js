const person = {
    firstName: 'Nilson',
    lastName: 'Rodrigues',
    age : '21',
    hobbies : ['Assitir TV', 'Jogar Futebol', 'Jogar'],
    dog: {
        name: 'churrim',
        age: '2',

    }
};

const {firstName, lastName, age, hobbies, dog} = person

const read = person.hobbies[2];                                                         
console.log(firstName);
console.log(lastName);
console.log(age);
console.log(hobbies);
console.log(read);
console.log(dog)
