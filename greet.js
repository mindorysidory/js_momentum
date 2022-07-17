const greet = document.querySelector(".greet");

greet.innerText = `Hello, ${localStorage.getItem("userid")}`;