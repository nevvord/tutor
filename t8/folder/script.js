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





