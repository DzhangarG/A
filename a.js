let money = +prompt("Ваш бюджет на месяц?", ''),
	time = prompt('Введите дату в формате YYYY-MM-DD', '');

let appData = {
	budget: money,
	expenses: {},
	optionalExpenses: {},
	income: [],
	timeData: time,
	savings: false
};



for (let i = 0; i < 2; i++) {
	let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
		b = prompt("Во сколько обойдется?", '');

	if (typeof(a) === 'string' && typeof(b) === 'string' && a != '' && b != '' && a.length < 50) {
		console.log('Done');
		appData.expenses[a] = b;
	} else {
		console.log('Bad result');
		i--;
	}

}



appData.moneyPerDay = appData.budget / 30;


alert ("Бюджет на 1 день составляет " + appData.moneyPerDay + "руб.");


if (appData.moneyPerDay < 100) {
    console.log ("Это минимальный уровень достатка!");
} else if (appData.moneyPerDay >= 100 && appData.moneyPerDay < 2000) {
    console.log ("Это средний уровень достатка!");
} else if (appData.moneyPerDay >= 2000) {
    console.log ("Это высокий уровень достатка!");
} else {
    console.log ("Произошла ошибка");
}