/*
        // Протитипы объектов
let soldier = {
    hp: 400,
    arm: 100
};

let john = {
    hp: 100
}

john.__proto__ = soldier;

console.log(john);
console.log(john.arm);
*/

let box = document.getElementById("box"),
    btn = document.getElementsByTagName("button"),
    circle = document.getElementsByClassName("circle"),
    heart = document.querySelectorAll(".heart"),
    oneHeart = document.querySelector(".heart"),
    big = document.querySelector(".big");

box.style.backgroundColor = "#963753";
btn[1].style.borderRadius = "100%";
circle[0].style.backgroundColor = "red";
circle[1].style.backgroundColor = "yellow";
circle[2].style.backgroundColor = "green";

/*

        Изминение елементов сайта при помощи цикла

for (let i = 0; i < heart.length; i++) {
    heart[i].style.backgroundColor = "#" + i +"23";
    
}


heart.forEach(function(item, i, hearts){
    item.style.backgroundColor = "#034";
});

*/

let div = document.createElement("div"),
    text = document.createTextNode("Текстовый узел");

div.classList.add("black");

// document.body.appendChild(div);

// big.appendChild(div);

document.body.insertBefore(div, circle[0]);
document.body.removeChild(circle[1]);
document.body.replaceChild(btn[1], circle[1]);
// div.innerHTML = "<h3>Текстовая строка</h3>";
div.textContent = "Текстовая строка";
console.log(div);
console.log(text);


