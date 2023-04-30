

const USERNAME_KEY = "username";
const greeting = document.querySelector('#greeting');

document.querySelector('#btn').addEventListener('click', hideLogin); 

function hideLogin (e){
    e.preventDefault();
    const username = document.querySelector('#input_username').value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreeting(username);
    document.querySelector('#login').classList.add('hidden');
}

function paintGreeting(username) {
    const savedusername = localStorage.getItem(USERNAME_KEY);
    greeting.innerText = `Hello, ${savedusername}`;
}