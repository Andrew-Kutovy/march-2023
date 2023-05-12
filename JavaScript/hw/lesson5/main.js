// ВСЕ ЗРОБИТИ СТРІЛОЧНИМИ ФУНКЦІЯМИ!
// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
let triangle = (a,b) => a * b;

// - створити функцію яка обчислює та повертає площу кола з радіусом r
let cyrcle = r => Math.ceil(Math.PI * r**2);

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
let cylinder = (h, r) =>  Math.ceil(2*Math.PI*r*h + 2*Math.PI*r**2);

//- створити функцію яка приймає масив та виводить кожен його елемент
let iterable = arr => {for (let item of arr) console.log(item)};

//- створити функцію яка створює параграф з текстом. Текст задати через аргумент
let paragraf = text => document.write(`<p>${text}</p>`);

//- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
let ul = text => {
    document.write(`<ul>`)
    for (let i=0; i <3; i++) document.write(`<li>${text}</li>`)
    document.write(`</ul>`)
}

/*- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li
визначається другим аргументом, який є числовим (тут використовувати цикл) */
let multyUl = (text, num) => {
    document.write(`<ul>`)
    for (let i=0; i <num; i++) document.write(`<li>${text}</li>`)
    document.write(`</ul>`)
}

//- створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
let list = arr => {
    document.write(`<ul>`)
    for (let item of arr) document.write(`<li>${item}</li>`)
    document.write(`</ul>`)
}

/*- створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного
 об'єкту окремий блок. */
let write = array => { for (let user of array) {
    document.write(`<div>${user.id} - ${user.name} - ${user.age}<hr></div>`)}
}

//- створити функцію яка повертає найменьше число з масиву
let minimum =arr => {let min = arr[0];
    for (let el of arr) if (el < min) min = el
    return min
}

/*- створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад
 sum([1,2,10]) //->13  */
let sum = arr => { let result =0;
    for (let elem of arr) result += elem
    return result
}

/*- створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44] */
let swap = (arr, a, b) => {let [val1, val2] = [arr[a], arr[b]];
    [arr[a], arr[b]] = [val2, val1];
    return arr
}

/*- Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250   */
let exchange = (sumUAH,currencyValues,exchangeCurrency) => { let value;
    for (let i = 0 ; i<currencyValues.length; i++){
        if (exchangeCurrency === currencyValues[i].currency) value = +currencyValues[i].value
    } console.log(sumUAH/value)
}
