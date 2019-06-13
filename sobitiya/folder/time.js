/*
let timerId = setTimeout(sayHelo, 3000);
clearTimeout(timerId);
*/

/*
let timerId = setInterval(sayHelo, 3000);
clearTimeout(timerId);

function sayHelo() {
    console.log("Hello World!");
};
*/

let timerId = setTimeout(function log(){
    console.log("Hello Woeld");
    setTimeout(log, 2000);
});