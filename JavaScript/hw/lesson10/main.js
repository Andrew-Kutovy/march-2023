// Стоврити форму з трьома полями для name,sruname,age та кнопкою. При натисканні на кнопку зчитати данні з полів, та
// вивести об'єкт в документ. Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом
let form = document.createElement('form')
form.name = 'form'
document.body.appendChild(form)

let name = document.createElement('input')
//name.type = 'text'
name.placeholder = 'name'
let surname = document.createElement('input')
//surname.type = 'text'
surname.placeholder = 'surname'
let age = document.createElement('input')
//age.type = 'text'
age.placeholder = 'age'
let button = document.createElement('button')
button.type = 'submit'
button.textContent = 'send form'

form.style.display = 'flex'
form.style.flexDirection = 'column'
form.style.width = '200px'
form.append(name, surname, age, button)

form.onsubmit = function (ev) {
    ev.preventDefault()
    let div = document.createElement('div');

    let outName = document.createElement('p')
    outName.innerText = `name: ${name.value}`
    let outSurname = document.createElement('p')
    outSurname.innerText = `surname: ${surname.value}`
    let outAge = document.createElement('p')
    outAge.innerText = `age: ${age.value}`

    div.append(outName, outSurname, outAge)
    document.body.appendChild(div)
}

// ==========================
// є сторінка, на якій є блок, я кому знаходиьтся цифра. написати код, який при кожному перезавантажені сторінки буде
// додавати до неї +1
let count = document.getElementById('count')
if (localStorage.getItem('count')){
    let current = localStorage.getItem('count')
    let newNum = Number(current) +1
    let str = 'visit counter: '
    count.innerText = str+newNum
    localStorage.setItem('count', newNum.toString())
} else {
    localStorage.setItem('count', '1')
}

// ==========================
// Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховще, в масив sessions зберігається
// інформація про дату та час відвідування сторінки. Є ще сторінка sessions.html (назва довільна), при відвідуванні якої
// потрібно відмалювати всю інформацію про відвідування сторінки index.html. Інфу НЕ виводити в консоль, а побудувати
// дом структуру під кожну сессію
let sessions = localStorage.getItem('sessions');
if (!sessions) {
    sessions = [];
} else {
    sessions = JSON.parse(sessions);
}
sessions.push({
    page: 'index.html',
    timestamp: new Date().toString()
});
localStorage.setItem('sessions', JSON.stringify(sessions));

// =========================
// зробити масив на 100 об'єктів та дві кнопки prev next
let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true},
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true},
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true},
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true},
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true},
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true},
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true},
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true},
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true}
];

let usersContainer = document.getElementById('usersContainer');

let currentPage = 0;
let usersPerPage = 10;

function showUsers(startIndex, endIndex) {
    usersContainer.innerHTML = '';
    for (let i = startIndex; i < endIndex; i++) {
        let user = users[i];
        let userElement = document.createElement('div');
        userElement.className = 'user';
        userElement.innerHTML = `Name: ${user.name},
          ,Age: ${user.age},
          ,Status: ${user.status}
        `;
        usersContainer.appendChild(userElement);
    }}

function showNextUsers() {   // При натисканні next виводяться настпні 10 об'єктів
    if (currentPage + 1 < Math.ceil(users.length / usersPerPage)) {
        currentPage++;
        let startIndex = currentPage * usersPerPage;
        let endIndex = startIndex + usersPerPage;
        showUsers(startIndex, endIndex);
    }
}
function showPreviousUsers() {   // При натисканні prev виводяться попередні 10 об'єктів
    if (currentPage > 0) {
        currentPage--;
        let startIndex = currentPage * usersPerPage;
        let endIndex = startIndex + usersPerPage;
        showUsers(startIndex, endIndex);
    }
}
showUsers(0, usersPerPage);

// - Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так, щоб при
// натисканні на кнопку зникав елемент з id="text".
let text = document.createElement('p')
text.id = 'text'
text.innerText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias consectetur, cumque deserunt'

let but = document.createElement('input')
but.type = 'submit'
but.value = 'hide message'
document.body.append(text, but)

but.addEventListener('click', () => {text.classList.toggle('hide')
    but.value = text.classList.contains('hide') === true? 'show massage': 'hide massage'
})

//     - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати
//     інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
let but2 = document.createElement('input')
but2.type = 'submit'
let textt = document.createElement('p')
textt.innerText = 'Enter your age and push button'
let input = document.createElement('input')

document.body.append(textt, input, but2)
but2.addEventListener('focus', ()=> textt.textContent = +input.value >= 18? 'access allow': 'access denied'  )

// *** Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)
function createTable() {
    let rowCount = parseInt(document.getElementById('rowCountInput').value);
    let cellCount = parseInt(document.getElementById('cellCountInput').value);
    let cellContent = document.getElementById('cellContentInput').value;
    let table = document.createElement('table');

    for (let i = 0; i < rowCount; i++) {
        let row = document.createElement('tr');
        for (let j = 0; j < cellCount; j++) {
            let cell = document.createElement('td');
            cell.textContent = cellContent;
            row.appendChild(cell);
        }
        table.appendChild(row);
    }
    let tableContainer = document.getElementById('tableContainer');
    tableContainer.innerHTML = '';
    tableContainer.appendChild(table);
}

// *** (подібне було вище, але...будьте уважні в другій частині) створити сторінку з довільним блоком, в середині якого
// є значення "100грн"
// при перезавантаженні сторінки до значаення додається по 10грн, але !!!
// зміна ціни відбувається тільки на перезавантаження, які відбулись пізніше ніж 10 секунд після попереднього.
// При перезавантаженні, яке відбулось раніше ніж минуло 10 секунд - нічого не відбувається
window.onload = function() {
    let priceBlock = document.getElementById('priceBlock');
    let lastReloadTime = localStorage.getItem('lastReloadTime');
    let currentTime = new Date().getTime();

    // Проверяем, прошло ли 10 секунд с последней перезагрузки страницы
    if (!lastReloadTime || (currentTime - lastReloadTime) >= 10000) {
        let currentPrice = localStorage.getItem('currentPrice');
        if (!currentPrice) currentPrice = 100;

        let newPrice = parseInt(currentPrice) + 10;
        priceBlock.textContent = newPrice;
        localStorage.setItem('currentPrice', newPrice);
        localStorage.setItem('lastReloadTime', currentTime);
    } else {
        let currentPrice = localStorage.getItem('currentPrice');
        priceBlock.textContent = currentPrice;
    }
};