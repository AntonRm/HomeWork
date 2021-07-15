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
// Задачи, которы можно вызвать из списка.
//=================================================================================================================================================


let list = document.querySelectorAll('ul li');
let listPara = document.querySelectorAll('ul p');
for (let i = 0; i < list.length; i++) {
	list[i].addEventListener('click', function () {
		listPara[i].setAttribute('style', 'display: block');
	})
}


let showTask = document.querySelector('.show-task');


let t_1_1 = document.getElementById('task_1_1');
t_1_1.addEventListener('click', task_1_1);

let t_1_2 = document.getElementById('task_1_2');
t_1_2.addEventListener('click', task_1_2);

let t_1_3 = document.getElementById('task_1_3');
t_1_3.addEventListener('click', task_1_3);

let t_1_4 = document.getElementById('task_1_4');
t_1_4.addEventListener('click', task_1_4);



let t_2_1 = document.getElementById('task_2_1');
t_2_1.addEventListener('click', task_2_1);

let t_2_2 = document.getElementById('task_2_2');
t_2_2.addEventListener('click', task_2_2);

let t_2_3 = document.getElementById('task_2_3');
t_2_3.addEventListener('click', task_2_3);

let t_2_4 = document.getElementById('task_2_4');
t_2_4.addEventListener('click', task_2_4);

let t_2_5 = document.getElementById('task_2_5');
t_2_5.addEventListener('click', task_2_5);

let t_2_6 = document.getElementById('task_2_6');
t_2_6.addEventListener('click', task_2_6);



let t_3_1 = document.getElementById('task_3_1');
t_3_1.addEventListener('click', task_3_1);

let t_3_2 = document.getElementById('task_3_2');
t_3_2.addEventListener('click', task_3_2);

let t_3_3 = document.getElementById('task_3_3');
t_3_3.addEventListener('click', task_3_3);

let t_3_4 = document.getElementById('task_3_4');
t_3_4.addEventListener('click', task_3_4);



let t_4_1 = document.getElementById('task_4_1');
t_4_1.addEventListener('click', task_4_1);

let t_4_2 = document.getElementById('task_4_2');
t_4_2.addEventListener('click', task_4_2);

let t_4_3 = document.getElementById('task_4_3');
t_4_3.addEventListener('click', task_4_3);


//=================================================================================================================================================
// setTimeout(), setInterval()
//=================================================================================================================================================


// Тест 1 (style: #svetofor)

function task_1_1() {
	let start = document.getElementById('block_1');
	start.setAttribute('style', 'display: block')

	let svetofor = document.querySelector('.svetofor');
	let red = svetofor.children[0];
	let yellow = svetofor.children[1];
	let green = svetofor.children[2];
	setInterval(function () {
		if (red.classList.contains('red')) {
			red.classList.remove('red');
			yellow.classList.add('yellow');
			return;
		} else if (yellow.classList.contains('yellow')) {
			yellow.classList.remove('yellow');
			green.classList.add('green');
			return;
		} else if (green.classList.contains('green')) {
			green.classList.remove('green');
			red.classList.add('red');
			return;
		} else {
			red.classList.add('red');
		}
	}, 1500);
}
//===========================================


// Тест 2

function task_1_2() {
	let str = `Все аргументы имеют такое же значение. 
			Но отличие этого метода от setTimeout в том, 
			что функция запускается не один раз, 
			а периодически через указанный интервал времени.`
	let arr = str.split('');
	let i = 0;
	let stopId = setInterval(function () {
		if (i == arr.length) {
			clearInterval(stopId);
			return;
		}
		showTask.insertAdjacentHTML('beforeend', '<span>' + arr[i] + '</span>');
		i++;
	}, 50)
}

// Тест 2a

// function task_1_2_a() {
// 	let str = `Все аргументы имеют такое же значение. 
// 			Но отличие этого метода от setTimeout в том, 
// 			что функция запускается не один раз, 
// 			а периодически через указанный интервал времени.`
// 	let arr = str.split('');
// 	let i = 0;
// 	let stopId = setTimeout(function time() {
// 		if (i == arr.length) {
// 			clearTimeout(stopId);
// 			return;
// 		}
// 		document.write('<span>' + arr[i] + '</span>');
// 		i++;
// 		stopId = setTimeout(time, 50);
// 	}, 50)
// }
//===========================================


// Тест 3 (style: .circle)

function task_1_3() {
	let i = 0;
	let j = 1;
	let color = '';
	let stopId = setInterval(function () {
		if (i == 20) {
			clearInterval(stopId);
			return;
		}
		if (j == 1) {
			color = 'red';
		}
		if (j == 2) {
			color = 'yellow';
		}
		if (j == 3) {
			color = 'green';
			j = 0;
		}
		showTask.insertAdjacentHTML('beforeEnd', '<div class="circle ' + color + '"></div>');
		i++;
		j++;
	}, 300)
}
//===========================================


// Тест 4

function task_1_4() {
	let userNum = +prompt('Сделайте ставку:');
	let randomNum = Math.floor(Math.random() * 11) - 5;
	setTimeout(function () {
		if (randomNum > 0) {
			alert('Выполучаете: ' + userNum * randomNum + '$');
		} else {
			alert('В другой раз');
		}
	}, 800);
}
//===========================================


//=================================================================================================================================================
// Функции
//=================================================================================================================================================


// Тест 1

function task_2_1() {
	let a = +prompt('Введите число а:');
	let b = +prompt('Введите число b:');
	function moreNum1(a, b) {
		if (a > b) {
			return 1;
		} else if (a < b) {
			return -1;
		} else if (a == b) {
			return 0;
		}
	}
	showTask.insertAdjacentHTML('beforeend', '<p>' + moreNum1(a, b) + '</p>');
	function moreNum2(a, b) {
		return a > b ? 1 : a < b ? -1 : 0;
	}
	showTask.insertAdjacentHTML('beforeend', '<p>' + moreNum2(a, b) + '</p>');
	let moreNum3 = (a, b) => a > b ? 1 : a < b ? -1 : 0;
	showTask.insertAdjacentHTML('beforeend', '<p>' + moreNum3(a, b) + '</p>');
}
//===========================================


// Тест 2

function task_2_2() {
	function myParagraph(bgColor, strColor, str) {
		showTask.insertAdjacentHTML('beforeend', '<span style="background-color: ' + bgColor + '; color: ' + strColor + '">' + str + '</span>');
	}
	myParagraph("yellow", "blue", "Lorem ipsum sit amet");
}
//===========================================


// Тест 3

function task_2_3() {
	let a = +prompt('Введите длину прямоугольника:');
	let b = +prompt('Введите шириу прямоугольника (для площади квадрата можно не вводить):');
	b = b == 0 ? undefined : b;
	function square(a, b = a) {
		return a * b;
	}
	showTask.insertAdjacentHTML('beforeend', '<p>' + square(a, b) + '</p>');
}
//===========================================


//=================================================================================================================================================
// Свойство  arguments функции
//=================================================================================================================================================


// Тест 1

function task_2_4() {
	function showWords() {
		let result = '';
		for (let i = 0; i < arguments.length; i++) {
			result = result + arguments[i] + ' ';
		}
		showTask.insertAdjacentHTML('beforeend', '<p>' + result + '</p>');
	}
	showWords("I've", "been", "learning", "JavaScript", "for", "a", "month");
}
//===========================================


// Тест 2

function task_2_5() {
	function complexDigit() {
		let result = '';
		for (let i = 0; i < arguments.length; i++) {
			result = result + arguments[i];
		}
		showTask.insertAdjacentHTML('beforeend', '<p>' + Number(result) + '</p>');
	}
	complexDigit(1, 9, 4, 8, 3);
}


//=================================================================================================================================================
// Функции-замыкания
//=================================================================================================================================================


// Тест 1

function task_2_6() {
	function minifyImg(widthImg) {
		let leftImg = (document.documentElement.clientWidth - widthImg) / 2;
		let topImg = (document.documentElement.clientHeight - widthImg) / 2;
		showTask.insertAdjacentHTML('beforeend', '<img style="position: absolute; width: ' + widthImg + 'px; left: ' + leftImg + 'px; top: ' + topImg + 'px;" src="img/1.jpg" alt="">');
	}
	let widthImg = +prompt('Введите ширину изображения:');
	let min = +prompt('Укажите на сколько уменьшить иображение:');
	let counter = +prompt('Сколько раз вывести изображение:');
	function laps(fn) {
		let stop = setInterval(function () {
			if (counter == 0) {
				clearInterval(stop);
				return;
			};
			fn();
			widthImg = widthImg - min;
			counter--;
		}, 200)
	}
	laps(function () { minifyImg(widthImg) })
}
//===========================================


//=================================================================================================================================================
// Создание html-элементов в JavaScript. Обработка событий
//=================================================================================================================================================


// Тест 1 (style: .slide)

function task_3_1() {
	let start = document.getElementById('block_2');
	start.setAttribute('style', 'display: block')

	let allImg = document.querySelectorAll('.slide__box img');
	let overlayImg = document.querySelector('.overlay__img img')
	let overlayBox = document.querySelector('.overlay__box')
	let overlay = document.querySelector('.overlay')
	overlayBox.addEventListener('click', function () {
		overlayBox.classList.remove('overlay__box-active');
		overlay.classList.remove('overlay-active');
	});
	for (let i = 0; i < allImg.length; i++) {
		allImg[i].addEventListener('click', function () {
			let src = allImg[i].getAttribute('src');
			overlayImg.setAttribute('src', src);
			overlayBox.classList.add('overlay__box-active');
			overlay.classList.add('overlay-active');
		})
	}
}
//===========================================


// Тест 2 (style: .replace)

function task_3_2() {
	let start = document.getElementById('block_3');
	start.setAttribute('style', 'display: block')

	let allImg = document.querySelectorAll('.replace-box__img img');
	for (let i = 0; i < allImg.length; i++) {
		allImg[i].addEventListener('click', function () {
			let src = allImg[i].getAttribute('src');
			let arr = src.split('');
			let results = arr.filter(function (item) {
				return !isNaN(item);
			});
			allImg[i].setAttribute('src', 'img/flowers/flower' + results + '.png');
			console.log(allImg[i])
		})
	}
}
//===========================================


// Тест 3 (style: .replace)

function task_3_3() {
	let start = document.getElementById('block_3');
	start.setAttribute('style', 'display: block')

	let allImg = document.querySelectorAll('.replace-box__img img');
	for (let i = 0; i < allImg.length; i++) {
		allImg[i].addEventListener('click', function () {
			if (allImg[i].parentElement.nextElementSibling === null) {
				allImg[i].setAttribute('src', 'img/cars/car1.jpg');
			} else {
				let src = allImg[i].parentElement.nextElementSibling.firstElementChild.getAttribute('src');
				allImg[i].setAttribute('src', src);
			}
		})
	}
}
//===========================================


// Тест 4 (style: .replace)

function task_3_4() {
	let start = document.getElementById('block_3');
	start.setAttribute('style', 'display: block')

	let allImg = document.querySelectorAll('.replace-box__img img');
	let arr = [];
	for (let i = 0; i < allImg.length; i++) {
		arr[i] = allImg[i].getAttribute('src');
	}
	for (let i = 0; i < allImg.length; i++) {
		allImg[i].addEventListener('click', function () {
			let src = allImg[i].getAttribute('src');
			let currenIndex = arr.findIndex(function (item) {
				if (item === src) return true;
			})
			if (currenIndex === 7) currenIndex = -1;
			src = arr[currenIndex + 1];
			allImg[i].setAttribute('src', src);
		})
	}
}


//=================================================================================================================================================
// Генерация случайных чисел
//=================================================================================================================================================


// Тест 1

function task_4_1() {
	function rundomColor() {
		return Math.floor(Math.random() * 256);
	}
	for (let i = 0; i < 7; i++) {
		let paragraf = document.createElement('p');
		paragraf.textContent = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.'
		paragraf.setAttribute('style', 'background-color: rgb(' + rundomColor() + ', ' + rundomColor() + ', ' + rundomColor() + ')');
		showTask.appendChild(paragraf);
	}
}
//===========================================


// Тест 2 (style: .numBox)

function task_4_2() {
	function rundomNum() {
		let num = 0;
		while (num < 1000) {
			num = Math.floor(Math.random() * 10000);
		}
		return num;
	}
	let arr = rundomNum().toString().split('');
	for (let i = 0; i < arr.length; i++) {
		let numBox = document.createElement('div');
		numBox.className = 'numBox';
		numBox.textContent = '1';
		numBox.setAttribute('num-value', arr[i]);
		showTask.appendChild(numBox);
		if (arr[i] === '1') {
			numBox.classList.add('red');
			numBox.setAttribute('style', 'cursor: not-allowed');
			continue;
		}
		numBox.addEventListener('click', plusOne);
	}
	function compare(e) {
		if (e.target.textContent === e.target.getAttribute('num-value')) {
			e.target.classList.add('red');
			e.target.setAttribute('style', 'cursor: not-allowed');
			return true;
		} else if (e.target.textContent === '10') {
			e.target.textContent = '0';
			e.target.classList.add('red');
			e.target.setAttribute('style', 'cursor: not-allowed');
			return true;
		}
	}
	function plusOne(e) {
		e.target.setAttribute('style', 'background-color: rgb(' + rundomColor() + ', ' + rundomColor() + ', ' + rundomColor() + ')');
		e.target.textContent = +e.target.textContent + 1;
		if (compare(e)) {
			e.target.removeEventListener('click', plusOne);
		}
	}
	function rundomColor() {
		return Math.floor(Math.random() * 256);
	}
}
//===========================================


// Тест 3 (style: .table-guess)

function task_4_3() {
	function rundomNum() {
		let num = 100;
		while (num > 45) {
			num = Math.floor(Math.random() * 100 + 1);
		}
		return num;
	}

	let tableNum = [];
	for (let i = 0; i < 15; i++) {
		tableNum[i] = rundomNum();
	}

	let counter = 0;
	let table = document.createElement('table');
	table.className = 'table-guess';
	showTask.appendChild(table);

	for (let i = 1; i <= 3; i++) {

		let row = document.createElement('tr');
		table.appendChild(row);

		for (let j = 1; j <= 5; j++) {

			let column = document.createElement('td');
			row.appendChild(column);
			column.textContent = tableNum[counter];
			counter++;
		}
	}

	let button = document.createElement('button');
	button.setAttribute('style', 'width: 70px; height: 30px; margin-left: 145px; background-color: green')
	button.textContent = 'GO'
	showTask.appendChild(button);

	let para = document.createElement('p');
	showTask.appendChild(para);

	button.addEventListener('click', game);

	function game() {
		let guessNum = [];
		for (let i = 0; i < 5; i++) {
			guessNum[i] = rundomNum();
		}
		let allCell = document.querySelectorAll('table td');
		for (let i = 0; i < allCell.length; i++) {
			allCell[i].setAttribute('style', '');
		}
		let counter = 0;
		for (let i = 0; i < allCell.length; i++) {
			for (let j = 0; j < guessNum.length; j++) {
				if (allCell[i].textContent == guessNum[j]) {
					allCell[i].setAttribute('style', 'background-color: darksalmon')
					counter++;
				}
			}
		}
		para.textContent = '';
		switch (counter) {
			case 1:
				para.textContent = 'Вы получаете 5 пирожков';
				break;
			case 2:
				para.textContent = 'Вы получаете 10 пирожков';
				break;
			case 3:
				para.textContent = 'Вы получаете 15 пирожков';
				break;
			case 4:
				para.textContent = 'Вы получаете 20 пирожков';
				break;
			case 5:
				para.textContent = 'Вы получаете 25 пирожков';
				break;
			default:
				para.textContent = 'А ничего Вы не получаете получаете';
				break;
		}
		counter = 0;
	}
}