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






