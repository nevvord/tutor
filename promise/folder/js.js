'use strict';    
/*
function formSend (){
    let request = new XMLHttpRequest();

    request.open('GET', '/user.json');
    request.setRequestHeader('Content-type', 'aplication/json; charset=utf-8');
    request.send()';
    console.log(JSON.parse(request.status));
    let data = JSON.parse(kek); 
}
*/

/*
localStorage.setItem("login", 1); // Присваеваем локалу
console.log("Получил с гет айтема " + localStorage.getItem("login")); // Получил ключем
localStorage.removeItem("login"); // Очистка ключем
localStorage.clear(); // Полная очистка
*/









class User  {
    constructor (login, password){
        this.login = login;
        this.password = password;
    }


    getElement(){
         
        let info = {
            login: 'nevvord',
            password: '0000'
        }
        return info;
    }


    verification(loginGet, passwordGet) {

        let info = this.getElement();

        if (loginGet == info.login) {
            console.log("Login True");
            if (passwordGet == info.password) {
                blockUser.innerHTML = `Привет ${loginGet}`;
                localStorage.setItem("userName", loginGet);
            }
            passwordGet == info.password ? console.log("Passwoed True") : console.log("Password False");
        } else {
            console.log("Login False");
        }
    }

}

let formAvtoriz = document.querySelector('.formaAvtoriz'),
    btnAvtoriz = document.getElementById('openAvtoriz'),
    btnClouseAvtoriz = document.getElementById('x'),
    blockUser = document.querySelector('.userBlock'),
    btnAvtorizSend = document.getElementById('avtorizButton'),
    userName = localStorage.getItem("userName");

    userName != null ? blockUser.innerHTML = `Привет ${userName}`: 1 ;




const usr = new User();





let openBlockAvtoriz = () => {
    formAvtoriz.style.display = "block";
};

let closeBlockAvtoriz = () => {
    formAvtoriz.style.display = "none";
};

btnAvtorizSend.addEventListener(
    'click',() => {
        usr.verification(
            document.getElementById('login').value, 
            document.getElementById('password').value
        );
        closeBlockAvtoriz();
    }
);
    

blockUser.addEventListener('click', openBlockAvtoriz);
btnAvtoriz.addEventListener('click', openBlockAvtoriz);


btnClouseAvtoriz.addEventListener('click', closeBlockAvtoriz);

/*     
let promise = new Promise(function(resolve, reject){
    btnAvtoriz.addEventListener('click', resolve)
});
*/
