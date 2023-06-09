// 1. Створити пустий масив та :
// a. заповнити його 50 парними числами за допомоги циклу.
let arr = []

count = 0
for (let i = 1; count < 50; i++) {
    if (!(i%2)){
        arr.push(i)
        count++
    }
}
console.log(arr)

// b. заповнити його 50 непарними числами за допомоги циклу.
arr = []

count = 0
for (let i = 1; count < 50; i++) {
    if (i%2){
        arr.push(i)
        count++
    }
}
console.log(arr)

// c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)
arr =[]
count = 0
while (count<20){
    let random = Math.floor(Math.random() * 99);
    arr.push(random)
    count++
}

console.log(arr)

// d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)
arr = []
count = 0
while (count<20) {
    let random = Math.floor(Math.random() * (732 - 8) + 8);
    arr.push(random)
    count++
}

console.log(arr)

// 2. Вивести за допомогою console.log кожен третій елемен
for (let i = 2 ; i < arr.length; i+=3){
    console.log(arr[i])
}

// 3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.
for (let i = 2 ; i < arr.length; i+=3){
    if (!(arr[i]%2)) console.log(arr[i])

}

// 4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив
let newArr = []
for (let i = 2 ; i < arr.length; i+=3){
    if (!(arr[i]%2)) {
        newArr.push(arr[i])
        console.log(arr[i])
    }
}

// 5. Вивести кожен елемент масиву, сусід справа якого є парним
for (let i =0; i<arr.length; i++){
    if (!(arr[i+1]%2)) console.log(arr[i])
}

// EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56
arr = [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ]
for(let el of arr){
  if(el === 1 || el === 9 || el === 56){
    console.log(el)
  }
}

// 6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.
arr = [100,250,50,168,120,345,188]
let sum = 0;
for (let el of arr){
  sum += el
}
let resalt = sum/arr.length
console.log(resalt)

// 7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.
arr =[]
count = 0
while (count<20){
    let random = Math.floor(Math.random() * 99);
    arr.push(random)
    count++
}
newArr = []
for (let el of arr){
  newArr.push(el*5)
}
console.log(newArr)

// 8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом - додати його в інший масив.
arr = ['hello', 13, true, 0, 'bambaleylo', 54, '35', false, 32]
newArr = []
for(let el of arr){
  if(typeof el === String) newArr.push(el)
}
console.log(newArr)

// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
let usersWithId = [
        {id: 1, name: 'vasya', age: 31, status: false},
        {id: 2, name: 'petya', age: 30, status: true},
        {id: 3, name: 'kolya', age: 29, status: true},
        {id: 4, name: 'olya', age: 28, status: false}
    ];

let citiesWithId = [
    {user_id: 3, country: 'USA', city: 'Portland'},
    {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
    {user_id: 2, country: 'Poland', city: 'Krakow'},
    {user_id: 4, country: 'USA', city: 'Miami'}
];
// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
//     Записати цей об'єкт в новий масив
// Example:
//     let usersWithCities = [
//             {
//                 id: 1, // <===
//                 name: 'vasya',
//                 age: 31,
//                 status: false,
//                 address: {
//                     user_id: 1, // <===
//                     country: 'Ukraine',
//                     city: 'Ternopil'
//                 }
//             },
//             // TO BE CONTINUED .....
//         ]
for (let el of usersWithId){
    for (let j = 0; j< citiesWithId.length; j++){
        if (el.id === citiesWithId[j].user_id) el.adress = citiesWithId[j]
    }
}
for (let el of usersWithId) console.log(el)


//         - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.
arr = [1,1,2,3,5,8,13,21,34,55]
for(let el of arr){
  if(!(el%2)) console.log(el)
}

// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.
arr = [1,1,2,3,5,8,13,21,34,55]
newArr = []
for(let el of arr){
  newArr.push(el)
}

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
let abc = [ 'a', 'b', 'c'];
let str = ''
for (let i = 0; i<abc.length; i++) {
    str += abc[i]
}
console.log(str)

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
str = ''
let i = 0
while (i<3){
    str+= abc[i++]
}
console.log(str)

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
str = ''
for (let item of abc) str+=item
console.log(str)