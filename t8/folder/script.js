'use strict';
/*
let money, time, mainExpenses, moneyInMainExspenses;

money   = prompt("Ваш бюджет в месяц");
time    = prompt("Введите дату в формате YYYY-MM-DD");
mainExpenses = prompt("Обязательная статья расходов");
moneyInMainExspenses = prompt("Во сколько обойдется?");


let appData = {
    ADMoney: money,
    ADTime: time,
    expenses: { 
        [mainExpenses] : moneyInMainExspenses
    }
};

let budget = (appData.ADMoney - appData.expenses.[mainExpenses]) / 30;

alert(budget);

console.log(appData.ADMoney);
console.log(appData.ADTime);
console.log(appData.expenses);

let expenses = {
    prompt("Обязательная статья расходов") : prompt("во сколько обойдется?")
};
*/

let dich = 10;//prompt("Введи дичь");

console.log(dich);


switch (dich) {
    case dich < 10:
        console.log("Дичь больше 10");
        break;
    case dich > 10:
        console.log("Дичь меньше 10");
        break;
    case 10:
        console.log("Дичь равна 10");
        break;
    default:
        console.log("Хуита не работает");
        break;
}

console.log(dich);


/*
while (dich < 15) {
    console.log(dich);
    dich++;
}
*/


/*
do{
    console.log(dich);
    dich++;
} while (dich < 20);
*/

/*
for (let i = 0; i < 10; i++) {
    if (i == 8) {
        continue;
    }
    console.log(i); 
}
*/

function showFirstMassage(text) {
    return(text);
}

console.log(showFirstMassage("Привет текст"));

let calc = (a,b) => a+b;

console.log(calc(3,4));

let str = "test";
console.log(str.length);
console.log(str.toUpperCase());
console.log(str.toLowerCase());

let twelve = "12.2px";
//console.log(Math.round(twelve));
console.log(parseInt(twelve));
console.log(parseFloat(twelve));






let data = {
    login: "nevvord",
    password: "0000",
    mail: "a@a.a",
    avtoriz: false,
    game: {
        id: 1,
        name: "nevvord",
        country: "gr",
        city: {
            c1: {
                id: 1,
                name: "Odessos",
                def: 100,
                residents: 5,
                resources: {
                    gold: 0,
                    wood: 25,
                    food: 15
                }
            }
        }
    }
}

data.game.city.c1.resources.stone = 25;

//delete data.game.city.c1.resources.food;

//console.log(data.game.city.c1.resources);


for (const key in data) {
    console.log('Свойсто ' + key + ' имеет значение ' + data[key]);   
}
console.log(Object.keys(data).length);


console.log(data);


let arr = [1, 2, 3, 4, 5];

arr.pop();          // Удаляет последнюю строку в масиве
arr.push('5');      // Добавляет в конец масива

arr.shift();        // Удаляет первую строку масива
arr.unshift('1');   // Добавляет первую строку масива

/*
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
*/

// Вывод элементов масива удобненько **

arr.forEach(function (item, i, massiv) {
    console.log(i + ': ' + item + ' (масив: ' + massiv + ')');
    
})

// -------------------------------------

let mass = [1, 3, 4, 6, 7];

for (let key in mass){
    console.log(key);
    
}


console.log(arr);

/* Создание масива и запись из всплывающего окна
let ans = prompt("", ""),
    arrayAns = [];

arrayAns = ans.split(',');

console.log(arrayAns);
*/

/*
// Записуем все в строку
let arraySend = ["a", "b", "c", "ew"],
    iSend = arraySend.join(", ");

console.log(iSend);
*/

/*
// Сортировка элементов масива с записью в переменную 
let arraySend = ["b", "z", "f", "ew", "a"],
    iSend = arraySend.sort();

console.log(iSend);
*/

let arraySend = ["1", "3", "16", "27", "100"],
    iSend = arraySend.sort(compareNum);

function compareNum(a, b) {
    return a-b;
}

console.log(iSend);
