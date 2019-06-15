'use strict';
/*
function User(name, id){
    this.name = name;
    this.id = id;
    this.human = true;
    this.helo = function () {
        console.log('Hello ' + this.name);
        
    };
}

User.prototype.exit = function (name) {
    console.log('Пользователь ' + this.name + ' ушел');
}

let ivan = new User('ivan', 25),
    alex = new User('alex', 20);

console.log(ivan);
console.log(alex);

ivan.exit();
*/

/*
class User {
    constructor(name, id) {
        this.name = name;
        this.id = id;
        this.human = true;
    }
    hello(){
        console.log(`Hello ${this.name}`);
    }
    exit(){
        console.log(`Пользователь ${this.name} уебал`);
        
    }
}

let UsNow = new User('Vitalii', 25);

console.log(UsNow);
console.log(UsNow.id);
UsNow.hello();
UsNow.exit();
*/
/*
let user = {
    name: 'lalka'
};

function showName(serName) {
    console.log(this);
    console.log(this.name + serName);
}

console.log(showName.call(user, ' Palka'));
console.log(showName.apply(user, [' Skakalka']));

function count(num) {
    return this * num;
}

let double = count.bind(2);

console.log(double(3));
console.log(double(10));
console.log(double(7));
*/

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

let btn = document.querySelector('button');

btn.addEventListener('click', function () {
    console.log(this);
    this.style.backgroundColor = '#' + getRandomInt(100,999);
});



// 1) Простой вызов this ссылается к window/undefined
// 2) Метод объекта - this ссылается к объекту
// 3) Конструктор (new) - this ссылается на новый созданый объект 
// 4) Указанием конкретного контекста - call, apply, bind