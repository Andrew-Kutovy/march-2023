// --створити масив з:
// - з 5 числових значень
let numArr = [1,3,6,8,34]
for (let item of numArr) console.log(item)

// - з 5 стічкових значень
let strArr = ['bambaleylo1','bambaleylo2','bambaleylo3','bambaleylo4','bambaleylo5']
for (let item of strArr) console.log(item)

// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль
let arr = [13, true, 'bambaleylo', 23, false]
for (let item of arr) console.log(item)

// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
arr = []
arr[0] = 'hello'
arr[3] = 'bambaleylo'
arr[2] = 13
arr[1] = true

console.log(arr)

// - є масив :
arr = [2,17,13,6,22,31,45,66,100,-18]
// 1. перебрати його циклом while
let count=0
while (count < arr.length){
    console.log(arr[count])
    count++
}

//     2. перебрати його циклом for
for (let item of arr) console.log(item)

//     3. перебрати циклом while та вивести  числа тільки з непарним індексом
count = 0
while (count < arr.length) {
    if (arr[count]%2) console.log(arr[count])
    count++
}

// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
for (let item of arr) {
    if (item%2) console.log(item)
}

// 5. перебрати циклом while та вивести  числа тільки парні значення
count = 0
while (count < arr.length) {
    if (!(arr[count]%2)) console.log(arr[count])
    count++
}

// 6. перебрати циклом for та вивести  числа тільки парні  значення
for (let item of arr){
    if (!(item%2)) console.log(item)
}

// 7. замінити кожне число кратне 3 на слово "okten"
for (let i=0; i < arr.length; i++){
    if (!(arr[i]%3)) arr[i] = 'okten'
}
console.log(arr)

// 8. вивести масив в зворотньому порядку.
arr = [2,17,13,6,22,31,45,66,100,-18]
for (let i = arr.length-1; i >= 0; i--) console.log(arr[i])

// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
// 9.1. перебрати його циклом while
count = arr.length-1
console.log('--task 9.1--')
while (count >= 0){
    console.log(arr[count])
    count--
}

// 9.2. перебрати його циклом for
console.log('--task 9.2--')
for (let i = arr.length-1; i >= 0; i--) console.log(arr[i])

// 9.3. перебрати циклом while та вивести  числа тільки з непарним індексом
count = arr.length-1
console.log('--task 9.3--')
while (count >=0){
    if (arr[count]%2) console.log(arr[count])
    count--
}

// 9.4. перебрати циклом for та вивести  числа тільки з непарним індексом
console.log('--task 9.4--')
for (let i=arr.length-1; i>=0; i--){
    if (arr[i]%2) console.log(arr[i])
}

// 9.5. перебрати циклом while та вивести  числа тільки парні  значення
console.log('--task 9.5--')
count = arr.length-1
while (count>=0){
    if (!(arr[count]%2)) console.log(arr[count])
    count--
}

// 9.6. перебрати циклом for та вивести  числа тільки парні  значення
console.log('--task 9.6--')
for (let i = arr.length-1; i>=0; i--){
    if (!(arr[i]%2)) console.log(arr[i])
}

// 9.7. замінити кожне число кратне 3 на слово "okten"
console.log('--task 9.7--')
for (let i =arr.length-1; i>=0; i--){
    if (!(arr[i]%3)) arr[i] = 'okten'
}
console.log(arr)

// 9.8. вивести масив в зворотньому порядку.
console.log('--task 9.8--')
arr = [2,17,13,6,22,31,45,66,100,-18]
let newArr = []
for (let i = arr.length-1; i>=0; i--) newArr.push(arr[i])
console.log(newArr)

// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
arr = [2,17,13,6,22,31,45,66,100,-18]
for (let elem of arr) console.log(elem)

// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
arr = ['bambaleylo1','bambaleylo2','bambaleylo3','bambaleylo4','bambaleylo5','bambaleylo6','bambaleylo7',
    'bambaleylo8','bambaleylo9','bambaleylo10']
for (let bam of arr) console.log(bam)

// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
arr = ['hello', 11, 'h34h3h34', true, 13, '4ikiriki', 'petuhon', 'mefedron', false, 23]
for (let el of arr) console.log(el)

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки
// булеві елементи
for (let el of arr) {
    if (typeof el === "boolean" ) console.log(el)
}

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки
// числові елементи
for (let el of arr) {
    if (typeof el === 'number') console.log(el)
}

// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки
// рядкові елементи
for (let el of arr) {
    if (typeof el === 'string') console.log(el)
}

// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів.
// Вивести в консоль всі його елементи в циклі.
arr = []
arr[0] = 'bambaleylo'
arr[1] = 435
arr[3] = true
arr[5] = 'holla'
arr[6] = null
arr[7] = false
arr[9] = 543
for (let el of arr) console.log(el)

// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
for (let i = 0; i<10; i++) {
    console.log(i)
    //document.write(i)
}

// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
for (let i =0; i<100; i++){
    console.log(i)
    //document.write(i)
}

// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
for (let i =0; i<100; i+=2){
    console.log(i)
    //document.write(i)
}

// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
for (let i = 0; i <100; i++){
    if (!(i%2)) {
        console.log(i)
        //document.write(i)
    }
}

// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
for (let i=0; i<100; i++){
    if (i%2) {
        console.log(i)
        //document.write(i)
    }
}

// стоврити масив книжок (назва, кількість сторінок, автори , жанри).
let books = [
    {
        name: 'book first',
        pages: 404,
        authors: [{
            name: 'Author1',
            age: 54
        }, {
            name: 'Author2',
            age: 43
        }],
        ganre: ['some ganre', "some ganre2"]
    },{
        name: 'book second',
        pages: 404,
        authors: [{
            name: 'Author1',
            age: 54
        }],
        ganre: ['some ganre']
    },{
        name: 'book3',
        pages: 304,
        authors: [{
            name: 'Author1',
            age: 24
        }, {
            name: 'Author2',
            age: 83
        }],
        ganre: ['some ganre']
    },{
        name: 'book name',
        pages: 94,
        authors: [{
            name: 'Author1',
            age: 54
        }],
        ganre: ['some ganre','some ganre2', 'some ganre3']
    },
]

// -знайти наібльшу книжку.
let str = ''
let gross = 0
for (let el in books){
    if (books[el].pages > gross){
        gross = books[el].pages
        str = `the largest book is ${books[el].name} have ${gross} pages`
    }
}
console.log(str)

// - знайти книжку/ки з найбільшою кількістю жанрів
str = ''
gross = 0
for (let el in books){
    if (books[el].ganre.length > gross){
        gross = books[el].ganre.length
        str = `the book with more amount ganres is ${books[el].name}, have ${gross} ganres`
    }
}
console.log(str)

// - знайти книжку/ки з найдовшою назвою
str = ''
gross = 0
for (let el in books){
    if (books[el].name.length > gross){
        gross = books[el].name.length
        str = `the book with most lange name is ${books[el].name}`
    }
}
console.log(str)

// - знайти книжку/ки які писали 2 автори
str = ''
gross = ''
for (let el in books){
    if(books[el].authors.length === 2)
        gross += `${books[el].name} / `
    str = `the books with two authors: ${gross}`
    // }
}
console.log(str)

// - знайти книжку/ки які писав 1 автор
str = ''
gross = ''
for (let el in books){
    if(books[el].authors.length === 1)
        gross += `${books[el].name} / `
    str = `the books with one author: ${gross}`
    // }
}
console.log(str)