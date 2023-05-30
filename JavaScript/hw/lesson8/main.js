// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
function User(id, name, surname , email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

// створити пустий масив, наповнити його 10 об'єктами new User(....)
let users = [
    new User(1, 'Vasya', 'Block', 'vasil@mail.com', 4436564),
    new User(2, 'Dimon', 'Don', 'dimas@napas.com', 6767675),
    new User(3, 'Leon', 'Dirty', 'lyla@fgfh.com', 575675674),
    new User(4, 'Vasya', 'Block', 'vasil@mail.com', 4436564),
    new User(5, 'Dimon', 'Don', 'dimas@napas.com', 6767675),
    new User(6, 'Leon', 'Dirty', 'lyla@fgfh.com', 575675674),
    new User(7, 'Vasya', 'Block', 'vasil@mail.com', 4436564),
    new User(8, 'Dimon', 'Don', 'dimas@napas.com', 6767675),
    new User(9, 'Leon', 'Dirty', 'lyla@fgfh.com', 575675674),
    new User(10, 'Vasya', 'Block', 'vasil@mail.com', 4436564),
]

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
let pairId = users.filter(user => !(user.id%2))

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
let raise = users.sort((a,b) => a.id -b.id)

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком
// товарів)
class Client {
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}

// створити пустий масив, наповнити його 10 об'єктами Client
let clients = [
    client1 = new Client(1, 'Roman', 'Malevich', 'roman@narkoman.ru', 534433,
        ['cocos', '4mmc', 'lsd-25'] ),
    client2 = new Client(2, 'John', 'Dillinger', 'johny@mail.com', 687678,
        ['mdma', 'psylocibe']),
    client3 = new Client(3, 'Roman', 'Malevich', 'roman@narkoman.ru', 534433,
        ['dxm', '4mmc', 'lsd-25'] ),
    client4 = new Client(4, 'John', 'Dillinger', 'johny@mail.com', 687678,
        ['mdma', 'extasy']),
    client5 = new Client(5, 'Roman', 'Malevich', 'roman@narkoman.ru', 534433,
        ['cocos', '4mmc', 'mephedron'] ),
    client6 = new Client(6, 'John', 'Dillinger', 'johny@mail.com', 687678,
        ['mdma', 'psylocibe', 'weed', 'gash']),
    client7 = new Client(7, 'Roman', 'Malevich', 'roman@narkoman.ru', 534433,
        ['cocos', '4mmc', 'gash'] ),
    client8 = new Client(8, 'John', 'Dillinger', 'johny@mail.com', 687678,
        ['mdma', 'psylocibe']),
    client9 = new Client(9, 'Roman', 'Malevich', 'roman@narkoman.ru', 534433,
        ['cocos', '4mmc', 'lsd-25', 'metamphetamin'] ),
    client10 = new Client(10, 'John', 'Dillinger', 'johny@mail.com', 687678,
        ['psylocibe']),
]

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
let ordSort = clients.sort((a, b) => a.order.length - b.order.length)

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
// максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
//максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
function CarFun(model, made, year, maxSpeed, value) {
    this.model = model;
    this.made = made;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.value = value;
}
let ferrari = new CarFun('testarossa', 'Italy', 1980, 320, 800)

// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
CarFun.prototype.kmh = function () {
    return this.maxSpeed+'km/h'
}
CarFun.prototype.drive = function () {                       // improving for <drive()> method
    console.log(`їдемо зі швидкістю ${this.kmh()} на годину`)
}

// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
CarFun.prototype.info = function () {
    console.log(`модель - ${this.model}, виробник - ${this.made}, рік випуску - ${this.year},
            максимальна швидкість - ${this.kmh()}, об'єм двигуна - ${this.value}`);
    return this
}

// --  - яка підвищує значення максимальної швидкості на значення newSpeed
CarFun.prototype.increaseMaxSpeed = function (newSpeed){
    this.maxSpeed =  newSpeed;
    return this
}
ferrari.increaseMaxSpeed(360).drive()

// -- changeYear (newValue) - змінює рік випуску на значення newValue
CarFun.prototype.changeYear = function(newValue){
    this.year = newValue;
    return this
}
ferrari.changeYear(1986)

// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
CarFun.prototype.addDriver = function (driver){
    this.driver = driver;
    return this
}
ferrari.driver = {
    name: "Andrew",
    age: 31
}
console.log(ferrari)
 
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна.
class Car {
    constructor(model, made, year, maxSpeed, value) {
        this.model = model;
        this.made = made;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.value = value;
    }
// додати в об'єкт функції:
    drive() {      // -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
        console.log(`їдемо зі швидкістю ${this.maxSpeed}km/h на годину`);
        return this
    }
    info() {                // - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
        console.log(`модель - ${this.model}, виробник - ${this.made}, рік випуску - ${this.year}, максимальна швидкість - 
            ${this.maxSpeed}, об'єм двигуна - ${this.value}`);
        return this
    }
    increaseMaxSpeed (newSpeed){                 // - яка підвищує значення максимальної швидкості на значення newSpeed
        this.maxSpeed = newSpeed;
        return this
    }
    changeYear (newValue){                                                 // - змінює рік випуску на значення newValue
        this.year = newValue;
        return this
    }
    addDriver (driver){   // - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
        this.driver = driver;
        return this
    }
}

let jaguar = new Car('E-type', 'GB', 1984, 220, 600)
jaguar.drive().increaseMaxSpeed(200).changeYear(1972).addDriver({name: 'Andrew', age: 31}).info()

console.log(jaguar)

// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги.
class Girl {
    constructor(name, age, size) {
        this.name = name;
        this.age = age;
        this.size = size;
    }
}

let girls = [                                                                   // Створити масив з 10 попелюшок.
    new Girl('Anny', 24, 34),
    new Girl('Olya', 22, 37),
    new Girl('Lyla', 27, 36),
    new Girl('Kris', 23, 39),
    new Girl('Reen', 24, 35),
    new Girl('Olya', 22, 33),
    new Girl('Anny', 27, 34),
    new Girl('Olya', 22, 38),
    new Girl('Anny', 29, 39),
    new Girl('Kate', 28, 35),
]

// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
class Prince extends Girl{
    constructor(name, age, size) {
        super(name, age, size);
    }
}
let prince = new Prince('Rayan', 32, 37)

// За допомоги циклу знайти яка попелюшка повинна бути з принцом.
console.log(girls.filter(girl => prince.size === girl.size))

// Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
console.log(girls.find(girl => girl.size === prince.size))