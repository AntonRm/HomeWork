// Тест 1

// let a = 34;
// let b = 20;
// let c = 'Новая';

// a = a + 2;
// b = b - 5;
// c = c + ' строка!';

// console.log(a);
// console.log(b);
// console.log(c);
//===========================================


// Тест 2

// let user = prompt('Введите сумму зарплаты:');
// user = +user;
// user = user + (user / 100 * 15);
// console.log(user);
// alert('Премия: 15%, итого: ' + user);
// user = user - (user / 100 * 10);
// console.log(user);
// alert('Налоги: 10%, итого: ' + user);
// user = user - 190;
// console.log(user);
// alert('В магазине: -190, итого: ' + user);
// user = user / 2;
// console.log(user);
// alert('Отдал: половину, итого: ' + user);
//===========================================


// Тест 3

// let pie = 17;
// pie = --pie;
// console.log('После кота: ' + pie);
// pie = pie - 2;
// console.log('После деда и внука: ' + pie);
// pie = pie - 3;
// console.log('После соседки: ' + pie);
// pie = pie - 2;
// console.log('После малышек: ' + pie);
// pie = --pie;
// console.log('После доярки: ' + pie);
// pie = pie - 5;
// console.log('После друзей: ' + pie);
// pie = ++pie;
// console.log('Один вернули: ' + pie);
//===========================================


// Тест 4

// alert('Задумайте число!');
// alert('Умножьте на 2.');
// alert('Прибавьте к результату 7.');
// let number = prompt('Введите что получилось:');
// number = (number - 7) / 2;
// alert('Вы задумали число: ' + number);
// console.log(number);
//===========================================


// Тест 5

// let person1 = prompt('Введите имя и фамилию студента: ');
// let person2 = prompt('Введите имя и фамилию студента: ');
// let person3 = prompt('Введите имя и фамилию студента: ');

// document.write('<p>Параграф:</p><p>' + person1 + '<br>' + person2 + '<br>' + person3 + '</p>');
// document.write('<p>Список:</p><ol><li>1. ' + person1 + '</li><li>2. ' + person2 + '</li><li>3. ' + person3 + '</li></ol>');


// let person;
// let result = '';
// for (let i = 1; i <= 3; i++) {
// 	person = prompt('Введите еще раз: ');
// 	result = result + ('<li>' + i + '. ' + person + '</li>');
// }
// document.write('<p>Список циклом:</p><ol>' + result + '</ol>');
//===========================================


//=================================================================================================================================================
// Условные конструкции if...else, switch ... case, тернарный оператор, операторы сравнения:
//=================================================================================================================================================


// Тест 1

// let name = prompt('Введите имя:');
// let yearBorn = prompt('Введите год рождения:');
// let age = 2021 - +yearBorn;
// document.write('<p>' + name + ': ' + age + '</p>');
// console.log(name + ': ' + age);
//===========================================


// Тест 1.a

// let name = prompt('Введите имя:');
// let yearBorn = prompt('Введите год рождения:');
// let age = 2021 - +yearBorn;
// if (age > 10 && age <= 14) {
// 	document.write('<p>' + name + ': ' + age + ' лет.</p>');
// 	console.log(name + ': ' + age + ' лет.');
// } else if ((age % 10) === 1) {
// 	document.write('<p>' + name + ': ' + age + ' год.</p>');
// 	console.log(name + ': ' + age + ' год.');
// } else if ((age % 10) > 1 && (age % 10) <= 4) {
// 	document.write('<p>' + name + ': ' + age + ' года.</p>');
// 	console.log(name + ': ' + age + ' года.');
// } else {
// 	document.write('<p>' + name + ': ' + age + ' лет.</p>');
// 	console.log(name + ': ' + age + ' лет.');
// }
//===========================================


// Тест 1.b

// let name = prompt('Введите имя:');
// let yearBorn = prompt('Введите год рождения:');
// let age = 2021 - +yearBorn;
// (age > 10 && age <= 14) ? document.write('<p>' + name + ': ' + age + ' лет.</p>') :
// 	((age % 10) === 1) ? document.write('<p>' + name + ': ' + age + ' год.</p>') :
// 		((age % 10) > 1 && (age % 10) <= 4) ? document.write('<p>' + name + ': ' + age + ' года.</p>') :
// 			document.write('<p>' + name + ': ' + age + ' лет.</p>');
//===========================================


// Тест 1.c

// let name = prompt('Введите имя:');
// let yearBorn = prompt('Введите год рождения:');
// let currentDate = new Date();
// let currentYear = currentDate.getFullYear();
// let age = currentYear - +yearBorn;
// (age > 10 && age <= 14) ? document.write('<p>' + name + ': ' + age + ' лет.</p>') :
// 	((age % 10) === 1) ? document.write('<p>' + name + ': ' + age + ' год.</p>') :
// 		((age % 10) > 1 && (age % 10) <= 4) ? document.write('<p>' + name + ': ' + age + ' года.</p>') :
// 			document.write('<p>' + name + ': ' + age + ' лет.</p>');
//===========================================


// Тест 2

// let floor = +prompt('Введите этаж:');
// let prise = 0;
// for (let i = 2; i <= floor; i++) {
// 	if (i > 1 && i < 5) {
// 		prise = prise + 20;
// 	} else if (i > 4 && i < 8) {
// 		prise = prise + 30;
// 	} else {
// 		prise = prise + 40;
// 	}
// }
// document.write('<p>Заносим на ' + floor + ' этаж за ' + prise + ' грн.</p>');
//===========================================


// Тест 3

// let userNumber = +prompt('Введите число от 1 до 10 включительно:');
// let gameNumber = Math.floor(Math.random() * 10 + 1);
// if (userNumber === gameNumber) {
// 	document.write('<p>Вы угадали!</p>');
// } else {
// 	document.write('<p style="color:green">Не угадали! Ваше число ' + userNumber + ', а выпало число ' + gameNumber + '</p>');
// }
//===========================================


// Тест 4

// let userNumber = prompt('Введите четырехзначное число:');
// let arr = userNumber.split('');
// console.log(arr)
// let result = 0;
// if ((userNumber % 2) === 0) {
// 	result = 1;
// 	for (let i = 0; i < arr.length; i++) {
// 		result = result * +arr[i];
// 	}
// 	document.write('<p>Число четное, произведение цифр: ' + result + '</p>');
// } else {
// 	for (let i = 0; i < arr.length; i++) {
// 		result = result + +arr[i];
// 	}
// 	document.write('<p>Число нечетное, сумма цифр: ' + result + '</p>');
// }
//===========================================


// Тест 5

// let userNumber = +prompt('Введите число:');
// if (isNaN(userNumber)) {
// 	document.write('<p>Это не число!</p>');
// }
// let result = '';
// for (let i = 2; i <= 10; i++) {
// 	if (!(userNumber % i)) {
// 		result = result + '<p>Число делится на ' + i + '</p><br>';
// 	}
// }
// document.write(result);
//===========================================


// Тест 6

// let userNumber = +prompt('Введите оклад:');
// if (userNumber <= 6000) {
// 	let tax = (userNumber / 100) * 10;
// 	let salary = userNumber - tax;
// 	document.write('<p>Налог: ' + tax + ', Оклад: ' + salary + '.</p>')
// } else if (userNumber <= 10000) {
// 	let tax = (userNumber / 100) * 15;
// 	let salary = userNumber - tax;
// 	document.write('<p>Налог: ' + tax + ', Оклад: ' + salary + '.</p>')
// } else if (userNumber <= 15000) {
// 	let tax = (userNumber / 100) * 17.5;
// 	let salary = userNumber - tax;
// 	document.write('<p>Налог: ' + tax + ', Оклад: ' + salary + '.</p>')
// } else {
// 	let tax = (userNumber / 100) * 20;
// 	let salary = userNumber - tax;
// 	document.write('<p>Налог: ' + tax + ', Оклад: ' + salary + '.</p>')
// }
//===========================================


// Тест 7

// let userBook;
// let choice = '';
// userBook = +confirm("Про волшебство?");
// choice = choice + userBook;
// userBook = +confirm("Чтобы было смешно?");
// choice = choice + userBook;
// userBook = +confirm("Детективная история?");
// choice = choice + userBook;
// userBook = +confirm("Ужастик?");
// choice = choice + userBook;
// if (choice === '0000') {
// 	document.write('<p>Л.Н. Толстой. Война и мир</p>');
// } else if (choice === '1000') {
// 	document.write('<p>Джоан Роулинг.Гарри Поттер</p>');
// } else if (choice === '1100') {
// 	document.write('<p>Братья Стругацкие. Понедельник начинается в субботу</p>');
// } else if (choice === '1110') {
// 	document.write('<p>Агата Кристи. Вечеринка в Хэллоуин</p>');
// } else if (choice === '1111') {
// 	document.write('<p>Джонатан Страуд. Кричащая лестница</p>');
// } else if (choice === '1010') {
// 	document.write('<p>Диана Маш. Заноза для драконьего военачальника</p>');
// } else if (choice === '0101') {
// 	document.write('<p>Кирилл Круганский. Смешно или страшно</p><br><p>А. Маринина. Безупречная репутация</p>');
// } else if (choice === '0001') {
// 	document.write('<p>Стивен Кинг. Мизери</p>');
// } else if (choice === '0011') {
// 	document.write('<p>Эдгар По. Очень страшные истории</p>');
// }
//===========================================


//=================================================================================================================================================
// Циклы:
//=================================================================================================================================================


// Тест 1

// let choice = confirm("Вывести изображения?");
// if (choice) {
// 	for (let i = 0; i < 2; i++) {
// 		document.write('<img src="img/' + i + '.jpg" alt="">')
// 	}
// }
//===========================================


// Тест 2

// let result = 0;
// for (let i = 1; i <= 10; i++) {
// 	result = result + i;
// }
// document.write('<p>Цикл for: ' + result + '</p>');
// let result1 = 0;
// let i = 1;
// while (i <= 10) {
// 	result1 = result1 + i;
// 	i++;
// }
// document.write('<p>Цикл while: ' + result1 + '</p>');
// let result2 = 0;
// let j = 10;
// do {
// 	result2 = result2 + j;
// 	j--;
// } while (j >= 1);
// document.write('<p>Цикл do while: ' + result2 + '</p>');
//===========================================


// Тест 3 (class: .style-1)

// let width = 200;
// for (let i = 1; i <= 5; i++) {
// 	document.write('<p class="style-1" style="width: ' + width + 'px">Абзац' + i + '</p>');
// 	width = width + 100;
// }
//===========================================


// Тест 3 (class: .style-2)

// for (let i = 1; i <= 5; i++) {
// 	let a = Math.floor(Math.random() * 256);
// 	let b = Math.floor(Math.random() * 256);
// 	let c = Math.floor(Math.random() * 256);
// 	document.write('<p class="style-2" style="background-color: rgb(' + a + ', ' + b + ', ' + c + ')">Абзац' + i + '</p>');
// }
//===========================================


//================
// Вложенные циклы
//================


// Тест 1


//===========================================

// Тест 2

// let star = '';
// for (let i = 1; i <= 7; i++) {
// 	star = star + '*';
// 	document.write('<p>' + star + '</p><br>');
// }
//===========================================


// Тест 3

// let row = '';
// let column = '';
// let counter = 1;
// for (let i = 1; i <= 6; i++) {

// 	for (let j = 1; j <= 4; j++) {
// 		column = column + '<td>' + counter + '</td>';
// 		counter++;
// 	}
// 	row = row + '<tr>' + column + '</tr>';
// 	column = '';
// }
// document.write('<table>' + row + '</table>');
//===========================================


// Тест 4 (class: .style-table, .style-td, .style-td-black)

// let row = '';
// let column = '';
// let counter = 1;
// for (let i = 1; i <= 8; i++) {

// 	for (let j = 1; j <= 8; j++) {
// 		if (counter % 2) {
// 			column = column + '<td class="style-td">\u00A0</td>';
// 			counter++;
// 		} else {
// 			column = column + '<td class="style-td-black">\u00A0</td>';
// 			counter++;
// 		}
// 	}
// 	row = row + '<tr>' + column + '</tr>';
// 	column = '';
// 	counter++;
// }
// document.write('<table class="style-table">' + row + '</table>');
//===========================================


//=================================================================================================================================================
// Массивы
//=================================================================================================================================================


// Тест 1a

// const poem = ['Мороз', 'и', 'солнце', 'день', 'чудесный'];
// let deleteNumber = +prompt('Введите номер слова, которое хотите заменить, от 1 до ' + poem.length);
// while ((deleteNumber < 1) || (deleteNumber > poem.length)) {
// 	deleteNumber = +prompt('Нужно ввести число от 1 до ' + poem.length);
// }
// let replaceWord = prompt('Введите слово, на которое хотите заменить:');
// poem.splice(deleteNumber - 1, 1, replaceWord);
// document.write('<p>' + poem.join(' ') + '</p>');
//===========================================


// Тест 1b

// const poem = ['Мороз', 'и', 'солнце', 'день', 'чудесный'];
// poem.splice(poem.length - 2, 1, 'пень');
// document.write('<p>' + poem.join(' ') + '</p>');
//===========================================


// Тест 2
// let arr = [];
// for (let i = 0; i < 20; i++) {
// 	arr[i] = Math.floor(Math.random() * 100 + 1);
// }
// let divisionTwo = arr.filter(function (item) {
// 	if (item % 2 === 0) {
// 		return true;
// 	}
// })
// document.write('<p>' + divisionTwo + '</p>');
// let divisionThree = arr.filter(function (item) {
// 	if (item % 3 === 0) {
// 		return true;
// 	}
// })
// document.write('<p>' + divisionThree + '</p>');
// let divisionFive = arr.filter(function (item) {
// 	if (item % 5 === 0) {
// 		return true;
// 	}
// })
// document.write('<p>' + divisionFive + '</p>');
// let divisionTen = arr.filter(function (item) {
// 	if (item % 10 === 0) {
// 		return true;
// 	}
// })
// document.write('<p>' + divisionTen + '</p>');
//===========================================


// Тест 3
// let group1 = ["Агеев", "Дмитренко", "Иванов", "Семенов", "Шаповалов"];
// let group2 = ["Филонов", "Изюмов", "Кабанов", "Дюдарев"];
// group1.unshift('Березина');
// group1.push('Ященко');
// document.write('<ol start="0"><li>' + group1.join('</li><li>') + '</li></ol><br>');
// group1.splice(4, 1, 'Ковалевa', 'Горобченко');
// document.write('<ol start="0"><li>' + group1.join('</li><li>') + '</li></ol><br>');
// let groupAll = group1.concat(group2);
// document.write('<ol start="0"><li>' + groupAll.join('</li><li>') + '</li></ol><br>');
// groupAll.sort();
// document.write('<ol start="0"><li>' + groupAll.join('</li><li>') + '</li></ol><br>');
//===========================================


//=================================================================================================================================================
// setTimeout(), setInterval()
//=================================================================================================================================================


