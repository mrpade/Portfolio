class User {
    constructor(name, profession, gender){
        this.name = name;
        this.profession = profession;
        this.gender = gender;
    }
}

const names = ['Patrick', 'Nico', 'Oli', 'Max']
const professions = ['Soldier', 'Comedian', 'Plumber', 'Footballer']
const genders = ['Male', 'Female']
const users = [
    new User('Jean', 'Singer', 'Male'),
    new User('Frieren', 'Show Runner', 'Female'),
    new User('Anca', 'Engineer', 'Female'),
]
const quote = [
    'You\'re doing great Keep up!',
    'Just quit, you won\'t make it',
    'Life can be full of surprises, but not for you!',
    'Tomorrow is another day, but you prolly won\'t see it.'
]

users.push(new User('Mary', 'Banker', 'Female'));
let newUsers = users.slice(0, 3);

let femaleUsers = users.filter((user, index, array) =>
    user.gender === 'Female')


let button = document.getElementById('button');
let button2 = document.getElementById('button2');
let text = document.getElementById('text');
let text2 = document.getElementById('text2');
button.addEventListener('click', function(){
    n = Math.floor(Math.random() * names.length);
    p = Math.floor(Math.random() * professions.length);
    g = Math.floor(Math.random() * genders.length);
    
    users.push(new User(names[n], professions[p], genders[g]))
    i = Math.floor(Math.random() * users.length);

    text.textContent = `Good Morning, my name is ${users[i].name}. Can I make it in life as a ${users[p].profession}?`;
    setTimeout(() => {
    q = Math.floor(Math.random() * quote.length);
    text2.textContent = `${quote[q]}`;
}, 4000);
})
button2.addEventListener('click', function(){
    text.textContent = '';    
    text2.textContent = '';
})