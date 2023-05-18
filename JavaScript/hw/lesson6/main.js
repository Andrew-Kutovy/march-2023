// - Знайти та вивести довижину настипних стрінгових значень
let [str, str1, str2] = ['hello world', 'lorem ipsum', 'javascript is cool'];
console.log(str.split(' ').join('').length, str1.split(' ').join('').length,
            str2.split(' ').join('').length);

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
str = str.toUpperCase();
str1 = str1.toUpperCase();
str2 = str2.toUpperCase();

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
str = str.toLowerCase();
str1 = str1.toLowerCase();
str2 = str2.toLowerCase();

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
str = ' dirty string   '
str = str.split(' ').filter(word => word !== '').join(' ');

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
let stringToarray = str => str.split(' ')

// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
arr = [10,8,-7,55,987,-1011,0,1050,0]
arr = arr.map(el=>String(el))

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки
// в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
let sortNums = (arr, direction) => { if (direction === 'ascending') return arr.sort((a, b) =>  a - b);
else if (direction === 'descending') return arr.sort((a, b) =>  b - a);}

// ==========================
// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// -- відсортувати його за спаданням за monthDuration
coursesAndDurationArray.sort((a, b) => b.monthDuration - a.monthDuration)

// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
coursesAndDurationArray.filter(elem => elem.monthDuration > 5)

// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
coursesAndDurationArray.map((el, index) => el.id = index);

// =========================
//описати колоду карт (від 6 до туза без джокерів)// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//     value:   '', // '6'-'10', 'ace','jack','queen','king'
//     color:  '', // 'red','black'
// }
const deck = {
    suits: ['spade', 'diamond','heart', 'clubs'],
    values: ['6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace'],
    colors: ['black', 'red'],
};
let cards = [];
function initializeDeck() {
    for (let suit of deck.suits) {
        for (let value of deck.values) {
            color = (suit === 'spade' || suit === 'clubs')? 'black': 'red'
            cards.push({value: value, suit: suit, color: color});
        }}};
initializeDeck();
console.log(cards)

//// - знайти піковий туз
let desiredCard = cards.filter(card => card.suit === 'clubs' && card.value === 'Ace')

// - всі шістки
let sixCards = cards.filter((card => card.value === '6'))

// - всі червоні карти
//const redCards = deck.cards.filter(card => card.endsWith('heart') || card.endsWith('diamond'))
let redCards = cards.filter(card => card.color === 'red')

// - всі буби
let diamonds = cards.filter(card => card.suit === 'diamond');

// - всі трефи від 9 та більше
let clubCards = cards.filter(card => card.suit === 'clubs' && card.value !== '6'&& card.value !== '7'&& card.value !== '8')

// =========================
//     Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//     diamonds:[],
//     hearts:[],
//     clubs:[]
// }
const deckBySuits = cards.reduce((result, card) => {
    const { suit } = card;
    if (!result[suit]) {
        result[suit] = [];
    }
    result[suit].push(card);
    return result;
}, {});
console.log(deckBySuits);

// =========================
//     взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
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
// --написати пошук всіх об'єктів, в який в modules є sass
const coursesWithSass = coursesArray.filter(course => course.modules.includes('sass'));
console.log(coursesWithSass);

// --написати пошук всіх об'єктів, в який в modules є docker
const coursesWithDocker = coursesArray.filter(course => course.modules.includes('docker'));
console.log(coursesWithDocker);

