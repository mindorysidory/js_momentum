const loginID = document.querySelector(".login_id");
const move = document.querySelector(".move");

function handeLoginSubmit(login){
    login.preventDefault();
    const userid = loginID.lastElementChild.value;
    localStorage.setItem("userid", userid);
    location.href = "main.html";
};

loginID.addEventListener("submit", handeLoginSubmit);