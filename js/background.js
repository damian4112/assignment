
const images = [
    "softcolor1.jpeg", 
    "softcolor2.jpeg",
    "softcolor3.jpeg",
    "softcolor4.jpeg",
    "softcolor5.jpeg",
    "softcolor6.jpeg",
    "softcolor7.jpeg",
    "softcolor8.jpeg",
    "softcolor9.jpeg"
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement('img');

bgImage.src=`img/${chosenImage}`;

document.body.appendChild(bgImage);