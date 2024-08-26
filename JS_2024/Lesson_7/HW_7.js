//#XjJuucOMR0
// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

function User(id, name, surname, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.phone = phone;
}

let users = [
    new User(1, 'Dima', 'Chornous', +123414511),
    new User(2, 'maks', 'Chornous', +123414511),
    new User(3, 'kola', 'Chornous', +123414511),
    new User(4, 'sanya', 'Chornous', +123414511),
    new User(5, 'anna', 'Chornous', +123414511),
    new User(6, 'liyba', 'Chornous', +123414511),
    new User(7, 'roma', 'Chornous', +123414511),
    new User(8, 'petya', 'Chornous', +123414511),
    new User(9, 'lysia', 'Chornous', +123414511),
    new User(10, 'Kolya ', 'Chornous', +123414511),
];
console.log(users);


// let users2 = [
//     new User(11, 'Dima', 'Chornous', '12354124312'),
//     new User(11, 'Dima', 'Chornous', '12354124312'),
//     new User(11, 'Dima', 'Chornous', '12354124312'),
//     new User(11, 'Dima', 'Chornous', '12354124312'),
// ]
// console.log(users2)
// -------------------------------------------------------------------------------------------
// #2ikXsE2WiKZ
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
// -------------------------------------------------------------------------------------------
// #pOeHKct
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
//

const users1 = users
    .filter(value => value.id % 2 === 0)
    .sort((a, b) => b.id - a.id)
console.log(users1)


// #nkMXISv
// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client



function Client(id, name, surname, email, phone , order) {
    this.id = id;
    this.name = name;
    this.surname = surname
    this.phone = phone;
    this.email = email;
    this.order = order;
}

let clients = [
    new Client (1, 'Dima', 'Chornous', 'emai@asd.com', +123414511, ['book','book','book','book', 'phone']),
    new Client (2, 'maks', 'Chornous', 'emai@asd.com', +123414511, ['book','book','book', 'phone','tv']),
    new Client (3, 'kola', 'Chornous', 'emai@asd.com', +123414511, ['book', 'phone']),
    new Client (4, 'sanya', 'Chornous', 'emai@asd.com', +123414511, ['book', 'phone','tv','tv']),
    new Client (5, 'anna', 'Chornous',  'emai@asd.com', +123414511, ['book', 'phone']),
    new Client (6, 'liyba', 'Chornous', 'emai@asd.com', +123414511, ['book','book', 'phone']),
    new Client (7, 'roma', 'Chornous', 'emai@asd.com', +123414511, ['book', 'phone','tv','tv','tv']),
    new Client (8, 'petya', 'Chornous', 'emai@asd.com', +123414511, ['book','book', 'phone']),
    new Client (9, 'lysia', 'Chornous', 'emai@asd.com', +123414511, ['book', 'phone']),
    new Client (10, 'Kolya ', 'Chornous', 'emai@asd.com', +123414511, ['book','book', 'phone'])
]
console.log(clients)
// #8abtVjRv
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
const client1 = clients
    .sort((a, b) => b.order.length - a.order.length)

console.log(client1)


// #vV9a6584I5
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
// максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
//     -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//     -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//     -- changeYear (newValue) - змінює рік випуску на значення newValue
//     -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
// function Car(mode, producer, year, maxSpeed, engineVolume) {
//
//     this.mode = mode
//     this.producer = producer
//     this.year = year
//     this.maxSpeed = maxSpeed
//     this.engineVolume = engineVolume
//     this.drive = function () {
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
//     };
//     this.info = function () {
//         for (const key in this) {
//             console.log(key, this[key]);
//         }
//     };
//     this.increaseMaxSpeed = function (speedToAdd) {
//         if (speedToAdd > 0) this.maxSpeed = this.maxSpeed + speedToAdd;
//     };
//     this.changeYear = function (year) {
//         if (year > 1815) this.year = year;
//     };
//
//     this.addDriver = function (driver) {
//         if (driver) this.driver = driver;
//     };
// }
//
// const car = new Car('asd', 'qwe', 1234, 122, 4);
// console.log(car);
//
// car.drive();
// car.info();
// car.increaseMaxSpeed(100);
// car.changeYear(2000);
// car.addDriver({});
// console.log(car);
//
//
//
//












// #5kla3yMpgp
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//     -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//     -- changeYear (newValue) - змінює рік випуску на значення newValue
//     -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

class Car{
    constructor(mode, producer, year, maxSpeed, engineVolume) {


        this.mode = mode
        this.producer = producer
        this.year = year
        this.maxSpeed = maxSpeed
        this.engineVolume = engineVolume
    }
    drive() {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
    };

    info() {
        for (const key in this) {
            console.log(key, this[key]);
        }
    };
    increaseMaxSpeed  (speedToAdd) {
        if (speedToAdd > 0) this.maxSpeed = this.maxSpeed + speedToAdd;
    };
    changeYear(year) {
        if (year > 1815) this.year = year;
    };

    addDriver(driver) {
        if (driver) this.driver = driver;
    };
}

const car = new Car('asd', 'qwe', 1234, 122, 4);
console.log(car);

car.drive();
car.info();
car.increaseMaxSpeed(100);
car.changeYear(2000);
car.addDriver({});
console.log(car);
// #zg6Fifnqig
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// За допомоги циклу знайти яка попелюшка повинна бути з принцом.
// Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

class Cinderella {

    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}
class Prince {

    constructor(name, age, slipper) {
        this.name = name;
        this.age = age;
        this.slipper = slipper;
    }
}
const cinderellas = [
    new Cinderella('katya', 19, 34),
    new Cinderella('Yulia', 21, 35),
    new Cinderella('Anna', 27, 36),
    new Cinderella('Tanya', 30, 37),
    new Cinderella('Liyba', 18, 38),
    new Cinderella('Liucia', 20, 39),
];

const prince = new Prince('Dima', 123123, 36);
for (const cinderella of cinderellas) {
    if (cinderella.footSize === prince.slipper) {
        prince.wife = cinderella;
    }
}
console.log(prince);
// #gsKLAsNWM
// *Через Array.prototype. створити власний foreach, filter

// Array.prototype.myForEach = function (callback) {
//     const yourArray = this;
//     for (const item of yourArray) {
//         callback(item);
//     }
// };
//
// [11, 22, 33].myForEach((x) => console.log(x));

Array.prototype.myFilter = function (predicate) {
    const arr = [];
    for (const item of this) {
        if (predicate(item)) {
            arr.push(item);
        }
    }

    return arr;
};

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
    {name: 'max', age: 31, status: true}
];

const result = users.myFilter((user) => user.status);

console.log(result);