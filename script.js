/*
1. С помощью цикла while вывести все простые числа в промежутке от 0 до 100.
*/

let i = 0;
let z = 100;

while (i<z+1){
	console.log(i++);
}

/*
2. С этого урока начинаем работать с функционалом интернет-магазина. Предположим, есть сущность корзины. Нужно реализовать функционал подсчета стоимости корзины в зависимости от находящихся в ней товаров. Товары в корзине хранятся в массиве. Задачи:
a) Организовать такой массив для хранения товаров в корзине;
b) Организовать функцию countBasketPrice, которая будет считать стоимость корзины.
*/

let basket = [
{
	product: "pr1",
	price: 10
},
{
	product: "pr2",
	price: 20
},
{
	product: "pr3",
	price: 30
},
{
	product: "pr4",
	price: 40
},
{
	product: "pr5",
	price: 50
},
]

function countBasketPrice(basket){
	let result = 0;
	for (let price of basket){
		result += price.price;
	}
	return result;
}

console.log("Сумма корзины = " + countBasketPrice(basket));


/*
3.*Вывести с помощью цикла for числа от 0 до 9, не используя тело цикла. Выглядеть это должно так:
for(…){// здесь пусто}
*/

for (let i = 0; i<10; console.log(i), i++){
	//Пусто
}

/*
4. *Нарисовать пирамиду с помощью console.log, как показано на рисунке, только у вашей пирамиды должно быть 20 рядов, а не 5:
x
xx
xxx
xxxx
xxxxx
*/
let pyramid = "";

for (let i = 0; i<20; i++){
	pyramid += "x";
	console.log(pyramid);
}
