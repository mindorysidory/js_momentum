const body = document.querySelector("body");

const images = [
    "img1.jpg",
    "img2.jpg",
    "img3.jpg",
    "img4.jpg",
    "img5.jpg"
]

const chosenImage = images[Math.floor(Math.random() * images.length)];

body.style.backgroundImage = `url(${chosenImage})`;