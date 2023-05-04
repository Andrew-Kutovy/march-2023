//Масиви та об'єкти:
//- Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(arr[0])
console.log(arr[1])
console.log(arr[2])
console.log(arr[3])
console.log(arr[4])
console.log(arr[5])
console.log(arr[6])
console.log(arr[7])
console.log(arr[8])
console.log(arr[9])

//- Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
let book1 = {
    title: 'bambaleylo',
    pageCount: 963,
    genre: 'thriller'
}
let book2 = {
    title: '4ikiriki',
    pageCount: 639,
    genre: 'history'
}
let book3 = {
    title: 'tindili-mindili',
    pageCount: 369,
    genre: 'fantastic'
}

/* - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється
 масивом. Кожен автор має поля name та age.             */
let book01 = {
    title: 'tindili-mindili',
    pageCount: 369,
    genre: 'fantastic',
    authors: [
        {
            name: 'Vasya Pupkin',
            age: 33
        },
        {
            name: 'Yurasik Pupkin',
            age: 38
        }
    ]
}
let book02 = {
    title: 'bambaleylo',
    pageCount: 693,
    genre: 'fantastic',
    authors: [
        {
            name: 'Dude',
            age: 39
        },
        {
            name: 'Leonardo',
            age: 88
        }
    ]
}
let book03 = {
    title: '4ikiriki',
    pageCount: 936,
    genre: 'idiotism',
    authors: [
        {
            name: 'Jesus Crysler',
            age: 33
        },
        {
            name: 'Bambaleylo',
            age: 22
        }
    ]
}

/* - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль
пароль кожного користувача          */
let arr2 = [
    {
        name: 'Boris',
        username: 'BarBaris',
        password: 1234
    }, {
        name: 'Jack',
        username: 'BlackJack',
        password: 12345
    }, {
        name: 'Filip',
        username: 'Kirkorov',
        password: 69356
    }, {
        name: 'John',
        username: 'DirtyJohny',
        password: 87987876
    }, {
        name: 'Ruslan',
        username: '4udloid',
        password: 9879877876
    }, {
        name: 'Timon',
        username: 'Murlo',
        password: 675675
    }, {
        name: 'Dmitry',
        username: 'Vafletron',
        password: 68765
    }, {
        name: 'Den',
        username: '4mmc',
        password: 87876
    }, {
        name: 'Irakly',
        username: 'Mefedrony4',
        password: 888888
    }, {
        name: 'Yurasik',
        username: 'Raskalbasik',
        password: 909878
    }
]
console.log(arr2[0].password,
            arr2[1].password,
            arr2[2].password,
            arr2[3].password,
            arr2[4].password,
            arr2[5].password,
            arr2[6].password,
            arr2[7].password,
            arr2[8].password,
            arr2[9].password)

/*  Логічні розгалуження:
- Є змінна х, якій ви надаєте довільне числове значення.
Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює
1, 0, -3 */
let x = -3;

if (x !== 0) {
    console.log('Вірно')
} else console.log('Невірно')

/* - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години
попадає число (в першу, другу, третю или четверту частину години).*/
let time = 23;

if (time > 0 && time <= 15) {
    console.log("It's first quarter")
} else if (time > 15 && time <= 30) {
    console.log("It's second quarter")
} else if (time > 30 && time <= 45) {
    console.log("It's third quarter")
} else if (time > 45 && time <= 59) {
    console.log("It's fourth quarter")
} else console.log("Incorrect number")

/*  - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число
 (у першу, другу чи третю). */
let day = 13;

if (day > 0 && day <= 10) {
    console.log('First')
} else if (day > 10 && day <= 20) {
    console.log('Second')
} else if (day > 20 && day <= 31) {
    console.log('Third')
} else console.log('Incorrect number')

/*  - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані
відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською). */
let input = 3;

switch (input) {
    case 1:
        console.log('Monday');
        break;
    case 2:
        console.log('Tuesday');
        break;
    case 3:
        console.log('Wednesday');
        break;
    case 4:
        console.log('Thursday');
        break;
    case 5:
        console.log('Friday');
        break;
    case 6:
        console.log('Saturday');
        break;
    case 7:
        console.log('Sunday');
    default:
        console.log('Please enter a number from 1 to 7')
}

/*   - Користувач вводить або має два числа. Потрібно знайти та вивести максимальне число з тих двох .
Також потрібно врахувати коли введені рівні числа.   */
let [number1, number2] = [13, 23]

if (number1 > number2) {
    console.log(number1)
} else if (number2 > number1) {
    console.log(number2)
} else console.log('The numbers are equal')

/* - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy
(хибноподібні, тобто приводиться до false)  */
let xx = 'j2'-23;

if (xx === '' || xx === 0 || xx === -0 || isNaN(xx) || xx === null || typeof xx === undefined
    || xx === false) xx = 'default'

console.log(xx)

/* з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен
 його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер". */
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
]

if (coursesAndDurationArray[0].monthDuration > 5) console.log(coursesAndDurationArray[0].title + ' - super');
if (coursesAndDurationArray[1].monthDuration > 5) console.log(coursesAndDurationArray[1].title + ' - super');
if (coursesAndDurationArray[2].monthDuration > 5) console.log(coursesAndDurationArray[2].title + ' - super');
if (coursesAndDurationArray[3].monthDuration > 5) console.log(coursesAndDurationArray[3].title + ' - super');
if (coursesAndDurationArray[4].monthDuration > 5) console.log(coursesAndDurationArray[4].title + ' - super');
if (coursesAndDurationArray[5].monthDuration > 5) console.log(coursesAndDurationArray[5].title + ' - super');