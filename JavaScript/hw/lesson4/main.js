//- створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function triangle(a, b) {
    let result;
    const y = Math.PI / 2
    result = a * b * Math.sin(y) / 2
    return result
}

//- створити функцію яка обчислює та повертає площу кола з радіусом r
function cyrcle(r) {
    let pre = Math.PI * r**2
    let result = +pre.toFixed(2)
    return result
}

//- створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
function cylinder(h, r){
    let pre = 2*Math.PI*r*h + 2*Math.PI*r**2
    let result = +pre.toFixed(2)
    return result
}

//- створити функцію яка приймає масив та виводить кожен його елемент
function iterable(arr) {
    for (let item of arr) console.log(item)
}

//- створити функцію яка створює параграф з текстом. Текст задати через аргумент
function paragraf(text) {
    document.write(`<p>${text}</p>`)
}

//- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function ul(text) {
    document.write(`<ul>`)
        document.write(`<li>${text}</li>`)
        document.write(`<li>${text}</li>`)
        document.write(`<li>${text}</li>`)
    document.write(`</ul>`)
}

/*- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li
визначається другим аргументом, який є числовим (тут використовувати цикл) */
function multyUl(text, amount) {
    document.write(`<ul>`)
        for (let i=0; i <amount; i++) document.write(`<li>${text}</li>`)
    document.write(`</ul>`)
}

//- створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
function list(arr) {
    document.write(`<ul>`)
        for (let item of arr) document.write(`<li>${item}</li>`)
    document.write(`</ul>`)
}

/*- створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного
 об'єкту окремий блок. */
function write(array) {
    for (let user in array){
        document.write(`<div># ${array[user].id} - name: ${array[user].name} , age: ${array[user].age}<hr></div>`)
    }
}

//- створити функцію яка повертає найменьше число з масиву
function minimum(arr) {
    let min = 9999;
    for (let el of arr) if (el < min) min = el
    return min
}

/*- створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад
 sum([1,2,10]) //->13  */
function sum(arr) {
    let result =0;
    for (let elem of arr) result += elem
    return result
}

/*- створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44] */
function swap(arr, a, b) {
    let newArr = []
    for (let i = 0; i < arr.length; i++) newArr[i] = i === a? arr[b]: i === b? arr[a]: arr[i]
    arr = newArr
    console.log(arr)
}

/*- Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250   */
function exchange(sumUAH,currencyValues,exchangeCurrency) {
    let value;
    for (let i = 0 ; i<currencyValues.length; i++){
        if (exchangeCurrency === currencyValues[i].currency) value = +currencyValues[i].value
    } console.log(sumUAH/value)
}