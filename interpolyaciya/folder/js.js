'use strict';

let name = "ivan",
    age = 30,
    mail = 'a@a.a';

document.write(`Пользователю ${name} ${age} лет, его почта ${mail} `)

let fun = () => {
    console.log(this);
}

fun();

let obj ={
    num: 5,
    sayNum: function() {
        let say = () => {
            console.log(this);
            
        }
        say();
    }
}

obj.sayNum();

let btn = document.querySelector('button');



btn.addEventListener('click', function() {

    let show = () => {
        console.log(this);
        
    };
    show();
});

function calc0rDoble(number, basis = 2) {
    // basis = basis || 2;  --  ES5
    console.log(number*basis);
    
};

class Rectangle {
    constructor(height, width){
        this.height = height;
        this.width = width;
    }
    calcArea (){
        return this.height*this.width;
    }
}

const square = new Rectangle(25,40);
console.log(square.calcArea());

let video = ['yotube', 'vimeo', 'rutube'],
    blogs = ['wordpress', 'livejournal', 'blogger'],
    internet = [...video, ...blogs, 'vk', 'facebook'];

console.log(internet);

function log (a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

let numbers = [2, 5, 7];

console.log(...numbers);

log(...numbers);


let options = {
    width: 1366,
    height: 768,
    background: 'red',
    font: {
        seze: '16px',
        color: '#951'
    }
};

console.log(JSON.parse(JSON.stringify(options)));



