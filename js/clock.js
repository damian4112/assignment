const date = document.querySelector('#h1-date');
const clock = document.querySelector('#h1-clock');

function getDate () {
const time = new Date();
const years = String(time.getFullYear()).padStart(2,"0");
const months = String(time.getMonth()+1).padStart(2,"0");
const days = String(time.getDate()).padStart(2,"0"); 

date.innerHTML = `${years}-${months}-${days}`
}

function getTime () {
const time = new Date();
const hours = String(time.getHours()).padStart(2,"0");
const mins = String(time.getMinutes()).padStart(2,"0");
const secs = String(time.getSeconds()).padStart(2,"0");

clock.innerHTML = `${hours}:${mins}:${secs}`
}

setInterval(getDate, 1000);
setInterval(getTime, 1000);
