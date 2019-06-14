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
/*
let timerId = setTimeout(function log(){
    console.log("Hello Woeld");
    setTimeout(log, 2000);
});
*/
let smallBox = document.querySelector('.smallBox'),
    btnMoveBox = document.querySelector('#moveBox');

function anima() {
    let pos = 0;

    let timerMove = setInterval(moveBox, 10);

    function moveBox() {
        if (pos == 300) {
            clearInterval(timerMove);
        }else{
            pos++;
            smallBox.style.top = pos + 'px';
            smallBox.style.left = pos + 'px';
        }
    }   
}

moveBox.addEventListener('click', anima);

let btnBlock = document.querySelector('.btn-block'),
    btns = document.getElementsByTagName('button');

    /*
    console.log("Блок с конпками");
    console.log(btnBlock);
    console.log("Кнопки");
    console.log(btns);
    */
    

btnBlock.addEventListener('click', function(event) {
    //console.log(event);
    
   if (event.target && event.target.matches('button.first')) {
        console.log("Hello"); 
   } 
});