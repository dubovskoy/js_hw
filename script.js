/*
1. Написать функцию, преобразующую число в объект. Передавая на вход число от 0 до 999, 
мы должны получить на выходе объект, в котором в соответствующих свойствах описаны единицы, 
десятки и сотни. Например, для числа 245 мы должны получить следующий объект: {‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2}. 
Если число превышает 999, необходимо выдать соответствующее сообщение с помощью console.log и вернуть пустой объект.
*/

let x = 0;

while (true) {
	x  = prompt('Введите число от 0 до 999: ')
	
	if (x < 0 || x > 999) {
            console.log("Введено неверное число.");
    }
	else{
		console.log(objNumber(x));
		break;
	}
}


function objNumber(number){
	let objNumber = {
		units: 0,
		dozens: 0,
		hundreds: 0,
	};
	
	switch(number.length) {
        case 3:
           objNumber.units = number[2];
           objNumber.dozens = number[1];
           objNumber.hundreds = number[0];
           break;
        case 2:
           objNumber.units = number[1];
           objNumber.dozens = number[0];
           break;
        default:
          objNumber.units = number;
    }
	return objNumber;
	
}

/*
2.Продолжить работу с интернет-магазином:
2.1. В прошлом домашнем задании вы реализовали корзину на базе массивов. Какими объектами можно заменить их элементы?
2.2. Реализуйте такие объекты.
2.3. Перенести функционал подсчета корзины на объектно-ориентированную базу.
*/

function newItem(name, price, count) {
    let item = {
		name,
		price,
		count,
	};
    return item;
}

let basket = {
    bascket: [],
    countBasketPrice() {
		let result = 0;
		for (i in this.bascket) {
            result += this.bascket[i].count * this.bascket[i].price;
        }
        return result;
    },
    addPr(item) {
        this.bascket.push(item)
    }
};

basket.addPr(newItem("pr1", 10, 3));
basket.addPr(newItem("pr2", 20, 1));
basket.addPr(newItem("pr3", 30, 1));
basket.addPr(newItem("pr4", 40, 1));
basket.addPr(newItem("pr5", 50, 1));

console.log(basket.countBasketPrice());
