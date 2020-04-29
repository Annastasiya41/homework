let money = prompt("Ваш бюджет на месяц?", ""),
    time = prompt("Введите дату в формате YYYY-MM-DD", ""),
    expensesName1 = prompt("Введите обязательную статью расходов в этом месяце", ""),
    expensesValue1 = prompt("Во сколько обойдется?", ""),
    expensesName2 = prompt("Введите обязательную статью расходов в этом месяце", ""),
    expensesValue2 = prompt("Во сколько обойдется?", ""),
    appData = {};

appData.moneyData = money;
appData.timeData = time;
appData.expenses = {};
appData.optionalExpenses = "";
appData.income = [];
appData.savings = false;


appData.expenses[expensesName1] = expensesValue1;
appData.expenses[expensesName2] = expensesValue2;

console.log("результат", appData);

alert(`Бюджет на 1 день равен ${money/30}`);