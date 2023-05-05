// - Нам дано масив друзів  Потрібно зробити перевірку якщо кількість елементів у масиві більше або дорівнює 3, то виводиться повідомлення про те, що це великий масив, в якому 3
//і більше елементи.Інакше слід вивести на екран повідомлення про те, що це маленький масив, в якому менше 3-х елементів.
let friends = ["Ivan", "Slavik", "Grisha", "Lera", "Ira"];

if (friends.length < 3) console.log('You have less than 3 friends')
else console.log('You have a good company')

// - Маємо 3 числа і між ним  нам потрібно знайти те що посередині. Знайти, яке з них є середнім (більше одного, але
// менше за інше). Перевірити, чи знаходиться перше число між двома іншими.
let num1 = 73
let num2 = 93
let num3 = 54

if (num1 < num2 && num2 < num3) console.log(`middle number is num2 - ${num2}`)
else if (num1 < num2 && num1 > num3) console.log(`middle number is num1 - ${num1}`)
else if (num3 < num2 && num3 > num1) console.log(`middle number is num3 - ${num3}`)

// - Перепишіть конструкцію if з використанням умовного оператора '?':
// let result;
// if (a + b < 4) {
//     result = 'Мало';
// } else {
//     result = 'Багато';
// }
let a = 3
let b = 0
let result = (a+b<4)? console.log('Мало'): console.log('Багато')

// - Маємо будь яке число від -100 , 0 , +100 потрібно перевірити яким є число: позитивним, негативним або нулем
// напишіть це тернарним оператором
let number = -8
result = number < 0? console.log('Negative') : number > 0? console.log('Positive') : console.log('Null')

// - У нас є змінна test, якщо дорівнює true, виведіть 'Вірно', інакше виведіть 'Неправильно'.
//     Перевірте роботу скрипта при test, що дорівнює true, false. Напишіть два варіанти скрипта - з коротким записом
//     (тернаркою)
let test = false
result = test === true? console.log('Вірно'): console.log('Неправильно')
result = test ? console.log('Вірно'): console.log('Неправильно')

// - Використовуючи конструкцію if..else, напишіть код, який запитуватиме: „Яка «офіційна» назва JavaScript?“
// Якщо користувач вводить «ECMAScript», то показати: «Правильно!», інакше – відобразити: «Не знаєте? ECMAScript!

//let enquire = prompt("Яка «офіційна» назва JavaScript?")
let enquire;
if (enquire === 'ECMAScript') console.log('Правильно!')
else console.log('Не знаєте? ECMAScript!')

//     - У першому під'їзді квартири з 1 до 20. У другому з 21 по 48. У третьому з 49 по 90.
// Користувач вводить номер квартири просто в змінні або через prompt('') .
//     Програма повинна зазначити, в якому під'їзді знаходиться дана квартира.
let input = 34;

if (input > 0 && input <21) console.log('first')
else if (input > 20 && input <49) console.log('second')
else if (input > 48 && input <91) console.log('third')

// - Ми маємо змінну number в яку користувач задає числове значення,  якщо змінна рівна 10 вивести повідомлення ВІРНО,
// якщо змінна не рівна 10 - тоді НЕВІРНО
number = 10
result = number === 10? console.log('ВІРНО'):console.log('НЕВІРНО')

// - Задача-гра "чи ми йдемо сьогодні в OKTEN на навчання?".
//     Змінна, яка характеризує температуру. Якщо температура від +10 до +22 вивести повідомлення що ми йдемо ВЧИТИСЯ .
//     Якщо інша темпаретура, тоді виводимо повідомлення що сидимо вдома і вчимося ОНЛАЙН
let temp = 22
result = (temp > 9 && temp <23)? console.log('ми йдемо ВЧИТИСЯ'):console.log('сидимо вдома і вчимося ОНЛАЙН')

// - За допомогою switch case - реалізувати гру - вікторину, де ми вводимо число від 1 до 5. І взалежності від введеного
//числа нам дається приз. (Авто, Мото, Телефон, і т.д ) і якщо число не підходить тоді  вивести Повідомлення - що число
// не вірне ... .
input = 1;
switch (input) {
    case 1:
        console.log("You'r win FERRARI TESTAROSSA")
        break;
    case 2:
        console.log("You'r win flat in Berlin")
        break;
    case 3:
        console.log("You'r win motorbike")
        break;
    case 4:
        console.log("You'r win Ifone 13")
        break;
    case 5:
        console.log("You'r win chocolate bar")
        break;
    default:
        console.log("Need enter a number from 1 to 5")
}