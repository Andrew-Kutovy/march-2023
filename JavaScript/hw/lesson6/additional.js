// - Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов.
// document.writeln(cutString('наслаждение',3)) // [нас,лаж,ден,ие]
let cutString = (str, n) => {
    let res = []
    for (let i = 0; i < str.length; i+=n) {
        let sub = str.slice(i, i+n)
        res.push(sub)
    } return res
}

// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
//     let str = 'Каждый охотник желает знать';
// document.writeln(delete_characters(str, 7)); // Каждый
let delete_characters = (str, length) => str.slice(0, length);

// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі
// символи рядка необхідно перевести у верхній регістр.
//     let str = "HTML JavaScript PHP";
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'
let insert_dash = str => { let arr = str.split(' ');
    for (let i = 0; i<arr.length; i++){
        arr[i] = arr[i].toUpperCase()
    }
    return arr.join('-')
}

// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.
let upper = str => str.slice(0,1).toUpperCase()+str.slice(1)

// - Дано список імен.
// let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'
let n1 = 'Harry..Potter'
let n2 = 'Ron---Whisley'
let n3 = 'Hermione__Granger'
let normalizer = str => str.replaceAll('..', ' ').replaceAll('---', ' ').replaceAll('__', ' ');
n1 = normalizer(n1)
n2 = normalizer(n2)
n3 = normalizer(n3)

// - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.
let randomArray = (amount) => {
    let array = []
    while (array.length < amount) {
        let random = Math.floor(Math.random() * 100);
        array.push(random)
    } return array
}

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень.
// Відсортувати його за допомоги sort
let numbers = randomArray(8);
numbers.sort((a, b) =>  a - b);
console.log(numbers);

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати
// його за допомоги filter, залишивши тільки парні числа (без 0!)
console.log( numbers.filter(elem => elem % 2 === 0 && elem !== 0));

// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.
let capitalize = str => {
    let arr = str.split(' ')
    for (let i = 0; i< arr.length; i++) arr[i] = arr[i].slice(0,1).toUpperCase() + arr[i].slice(1)
    return arr.join(' ')
}

// - Створити функцію-валідатор для адрес електронної пошти. Перевірка повинна включати в себе :
// 1) данні до знака равлика(@), 2)наявність равлика, 3)крапку яка знаходиться не меньше ніж на 2 символ далі після равлика,
// 4)функція не чутлива до регістру
// (some@email.com,SOME@EMAIL.COM,some@EMAIL.com, і тд - однакові значення)
// Протестувати на значеннях
// someemail@gmail.com
// someeMAIL@gmail.com
// someeMAIL@i.ua
// some.email@gmail.com
// Примітка
// Для тих, хто дуже розумний, та почне використовувати регулярні вирази одразу "ні". Своїм мозком подумайте над протоколом,
// з регулярками будете потім бавитись.
function isValidEmail(mail) {
    let str = mail.toLowerCase()
    let dog = str.indexOf('@');
    let dot = str.slice(dog+1).indexOf('.');

    if (dog >= 4 && dot >= 2) console.log("Your mail is correct")
    else if (dog === -1) console.log("second validation is not correct, your mail adress have not <@>")
    else if (dog < 4) console.log("first validation is not correct, before <@> can't been less sign then 4")
    else if (dot < 2) console.log("third validation is not correct, between <@> & <.> must been more less 2 sign")
}

// - є масив
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];
// відсортувати його в спадаючому порядку за кількістю елементів в полі modules
let quantity = coursesArray.sort((a, b) => b.modules.length - a.modules.length);

// - Напишіть функцію count(str, stringsearch), яка повертає кількість символів stringsearch у рядку str.
//     let symb = "о", str = "Астрономия это наука о небесных объектах";
// document.writeln(count(str, symb)) // 5
let count = (str, stringsearch) => {
    let res = 0;
    for (let i =0; i<str.length-1; i++) (str[i] === stringsearch)? res+=1: ''
    return res
}

// - Напишіть функцію cutString(str, n), яка видаляє зайві слова з рядка str, залишивши у ній n слів.
// let str = "Сила тяжести приложена к центру масс тела";
// document.writeln(cutString(str, 5)) // 'Сила тяжести приложена к центру'
let cutStr = (str, n) => str.split(' ').splice(0, n).join(' ');

// -стоврити масив книжок (назва, кількість сторінок, автори , жанри).
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
const bookWithMaxPages = books.reduce((maxPagesBook, currentBook) => currentBook.pages > maxPagesBook.pages? currentBook: maxPagesBook);
console.log(bookWithMaxPages);

// - знайти книжку/ки з найбільшою кількістю жанрів
const bookWithMaxGanres = books.reduce((maxGanresBook, currentBook) => currentBook.ganre.length > maxGanresBook.ganre.length? currentBook: maxGanresBook);
console.log(bookWithMaxGanres);

// - знайти книжку/ки з найдовшою назвою
const bookWithMaxName = books.reduce((maxBook, currentBook) => currentBook.name.length > maxBook.name.length? currentBook: maxBook);
console.log(bookWithMaxName);

// - знайти книжку/ки які писали 2 автори
const twoaut = books.filter(book => book.authors.length === 2);
console.log(twoaut);

// - знайти книжку/ки які писав 1 автор
const oneaut = books.filter(book => book.authors.length === 1);
console.log(oneaut);

// - вісортувати книжки по кількості сторінок по зростанню
let res = books.sort((a,b) => a.pages - b.pages)
console.log(res)
