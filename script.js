let time, money;
money = +prompt ("Ваш бюджет на месяц?");
time = prompt ("Введите дату в формате YYYY-MM-DD");
 
let appData = {
    budget : money,
    timeData : time,
    expenses : {},
    optionalExpenses : {},
    income : [],
    savings : false
};
 
let a = prompt("Введите обязательную статью расходов в этом месяце");
let b = prompt("Во сколько обойдется?");
let c = prompt("Введите обязательную статью расходов в этом месяце");
let d = prompt("Во сколько обойдется?");
 
appData.expenses[a] = b;
appData.expenses[c] = d;
alert("И так подведем итоги: на категорию "+ a +" вы планируете потратить " + b + " рублей, а на категорию " + c + " вы собираетесь израсходовать " + d + " рублей");
alert("При этом вы выделили на месяц "+ appData.budget +" рублей" );
alert("Ваши расходы за один день составят "+ appData.budget /30 +" рублей");