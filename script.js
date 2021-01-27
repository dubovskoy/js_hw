/* 1. Дан код:
var a = 1, b = 1, c, d;
c = ++a; alert(c);           // 2
d = b++; alert(d);           // 1
c = (2+ ++a); alert(c);      // 5
d = (2+ b++); alert(d);      // 4
alert(a);                    // 3
alert(b);                    // 3
Почему код даёт именно такие результаты?
*/

//Постфиксная форма - первоначально возвращение значения, а потом инкрементирование (b++).
//Префиксная форма - первоначально инкрементирование, а потом возврат обновленного значения.


/*
2. Чему будет равен x в примере ниже?
var a = 2;
var x = 1 + (a *= 2);
*/

let a = 2;
let x = 1 + (a *= 2); // x = 5
console.log('x = ' + x);


/*
3. Объявить две целочисленные переменные a и b и задать им произвольные начальные значения. Затем написать скрипт, который работает по следующему принципу:
если a и b положительные, вывести их разность;
если а и b отрицательные, вывести их произведение;
если а и b разных знаков, вывести их сумму; ноль можно считать положительным числом. ### 
*/

let d = 5;
let f = -3;

function Maths (a, b) {
	if (a>=0 && b>=0){
		console.log('Разность ' + (a-b));
	}
	else if (a<0 && b<0){
		console.log('Произведение ' + (a*b));
	}
	else {
		console.log('Сумма ' + (a+b));
	}
}

Maths(d, f);


/*
4. Присвоить переменной а значение в промежутке [0..15]. С помощью оператора switch организовать вывод чисел от a до 15. ### 
*/

let e = 8;

switch(e) {
  case 1: 
    console.log('1');
  case 2:
    console.log('2');
  case 3:
    console.log('3');
  case 4:
    console.log('4');
  case 5:
    console.log('5');
  case 6:
    console.log('6');
  case 7:
    console.log('7');
  case 8:
    console.log('8');
  case 9:
    console.log('9');
  case 10:
    console.log('10');
  case 11:
    console.log('11');
  case 12:
    console.log('12');
  case 13:
    console.log('13');
  case 14:
    console.log('14');
  case 15:
    console.log('15');
  default:
  console.log('Значений не найдено');
    break;
}


/*
5. Реализовать основные 4 арифметические операции в виде функций с двумя параметрами. Обязательно использовать оператор return. ### 
*/

function sum (a, b) {
	return a + b;
}


function dif (a, b) {
	return a - b;
}

function mul (a, b) {
	return a * b;
}

function div (a, b) {
	return a / b;
}

let resultSum = sum(2, 3);
console.log(resultSum);

let resultDif = dif(2, 4);
console.log(resultDif);

let resultMul = mul(2, 5);
console.log(resultMul);

let resultDiv = div(2, 6);
console.log(resultDiv);

/*
6. Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation), 
где arg1, arg2 – значения аргументов, operation – строка с названием операции. В зависимости 
от переданного значения операции выполнить одну из арифметических операций (использовать функции из пункта 3) 
и вернуть полученное значение (использовать switch). ### 
*/

function mathOperation(arg1, arg2, operation) {
	switch(operation) {
		case 'сумма':
			console.log(sum(arg1, arg2));
			break;
		case 'разность':
			console.log(dif(arg1, arg2));
			break;
		case 'произведение':
			console.log(mul(arg1, arg2));
			break;
		case 'частное':
			console.log(div(arg1, arg2));;
			break;
	}
}

/*
7. *Сравнить null и 0. Попробуйте объяснить результат. ### 
*/

/*
8. *С помощью рекурсии организовать функцию возведения числа в степень.
Формат: function power(val, pow), где val – заданное число, pow – степень.
*/