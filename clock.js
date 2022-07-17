const mainClock = document.querySelector(".clock");

function clock() {
    const currentDate = new Date();
    const hour = String(currentDate.getHours()).padStart(2, "0");
    const minute = String(currentDate.getMinutes()).padStart(2, "0");
    const second = String(currentDate.getSeconds()).padStart(2, "0");
    mainClock.innerText = `${hour} : ${minute} : ${second}`;
}

clock();
setInterval(clock, 1000);
