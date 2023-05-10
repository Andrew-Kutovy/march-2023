// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
function minimal(a, b, c) {
    result = (a <= b && a <= c) ? a : (b <= a && b <= c) ? b : c;
    console.log(result)
}

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
function maximal(a, b, c) {
    result = (a >= b && a >= c) ? a : (b >= a && b >= c) ? b : c;
    console.log(result)
}

// - створити функцію яка повертає найбільше число з масиву
function maxArr(arr) {
    let max = 0
    for (let el of arr) if (el > max) max = el
    return max
}

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
function mid(arr) {
    let sum = 0
    for (let el of arr) sum += el
    return (+(sum / arr.length).toFixed(2))
}

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math
// використовувати заборонено);
function minMax(...arg) {
    let [min, max, arr] = [999, 0, [...arg]];
    for (let el of arr) if (min > el) min = el; else if (max < el) max = el;
    console.log(max)
    return min
}

// - створити функцію яка заповнює масив рандомними числами
function randomArray(amount) {
    let array = []
    while (array.length < amount) {
        let random = Math.floor(Math.random() * 100);
        array.push(random)
    } return (array)
}

// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який
// характеризує кінцеве значення діапазону.
function randomLimitArray(amount, limit) {
    let array = []
    while (array.length < amount) {
        let random = Math.floor(Math.random() * limit);
        array.push(random)
    } return array
}

// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
function arrReverse(arr) {
    let array = []
    for (let i = arr.length - 1; i >= 0; i--) {
        array.push(arr[i])
    }
    return array
}

// - створити функцію, яка якщо приймає один аргумент, просто вивдоить його, якщо два аргументи - складає або
// конкатенує їх між собою.
function concat(a, b) {
    let result = b ? a + b : a;
    console.log(result)
    return result
}

// - створити функцію  яка приймає два масиви та скаладає значення елементів з однаковими індексами  та повертає новий
// результуючий масив.
//     EXAMPLE:
// [1,2,3,4]
//     [2,3,4,5]
// результат
//     [3,5,7,9]
function sumArr(arr1, arr2) {
    let newArr = []
    for (let i = 0; i < arr1.length; i++) {
        newArr[i] = arr1[i] + arr2[i]
    }
    return newArr
}

// - Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]
function keys(arr) {
    let keysArr = []
    for (let obj of arr) for (let key in obj) keysArr.push(key)
    return keysArr
}

//     - Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]
function values(arr) {
    let newArr = []
    for (let obj of arr) for (let val in obj) newArr.push(obj[val])
    return newArr
}