// #I2XsG6f
// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function square(a, b) {
    return a * b;
}

console.log(square(2,12))
console.log(square(4,14))
// #ETGAxbEn8l
// - створити функцію яка обчислює та повертає площу кола з радіусом r
function sCircle(r) {
    return Math.PI * r * r;
}
console.log(sCircle( 3));
console.log(sCircle( 5));
// #Mbiz5K4yFe7
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
function cylinder(r, h) {
    return (2 * Math.PI * r * r) + (2 * Math.PI * r * h);
}
console.log(cylinder(3,5))
// #SIdMd0hQ
// - створити функцію яка приймає масив та виводить кожен його елемент


const array = [
    {name: 'Dima', username: 'Skrin_shot', password: '123345'},
    {name: 'Anna', username: 'Skrin_shot', password: '123314345'},
    {name: 'Kolya', username: 'Skrin_shot', password: '1235626345'},
    {name: 'Serega', username: 'Skrin_shot', password: '123345'},
    {name: 'Vitya', username: 'Skrin_shot', password: '123345'},
    {name: 'Roma', username: 'Skrin_shot', password: '1234asda'},
    {name: 'Natya', username: 'Skrin_shot', password: 'asd1sad1'},
    {name: 'Lysya', username: 'Skrin_shot', password: 'asd123'},
    {name: 'Maks', username: 'Skrin_shot', password: 'asd123tsdt'},
    {name: 'Kostya', username: 'Skrin_shot', password: 'as1234h2131'},
]
//for of перебирає весь массив
function foobar(arr) {
    for (const item of array) {
        console.log(item);
    }
}
console.log(foobar(array));

// #59g0IsA
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

function foobar1(text) {
    document.write(`<p>${text}</p>`);
}
foobar1('asdasd');
foobar1('asdasd');
foobar1('asdasd');
foobar1('asdasd');
// #hOL6126
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

function foobar2(text) {
    document.write(`
            <ul>
                <li>${text}</li>
                <li>${text}</li>
                <li>${text}</li>
            </ul>   
            `)
}
foobar2('123asd')
// #0Kxco1edSN
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
function foobar3(text, counter) {
    document.write('<ul>')
    for (let i = 0; i < counter; i++) {
        document.write(`<li>${text}</li>`)
    }
    document.write('</ul>')
}
foobar3('t1234xt',6)
// #gEFoxMMO
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

function foobar4(arrayOfPrimitives) {
    document.write('<ul>')
    for (const item of arrayOfPrimitives) {
        document.write(`<li>${item}</li>`)
    }
    document.write('</ul>')
}
foobar4([2134,12314,453,'adsf1',1234,true ])
// #bovDJDTIjt
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. 
// Для кожного об'єкту окремий блок.

function foobar5 (users) {

    for (const user of users) {
        document.write(`<div>${user.id}, ${user.name}, ${user.age}</div>`);
    }

}
foobar5([{id: 1, name: 'Dima', age: 25},
    {id: 2, name: 'Dima', age: 25},
    {id: 3, name: 'Dima', age: 25},
    {id: 4, name: 'Dima', age: 25},
])


//     #pghbnSB
// - створити функцію яка повертає найменьше число з масиву

function calculet(numbers) {
    let min = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        let number = numbers[i];
        if (number < min){
            min = number
        }
    }
    return min;
}

console.log(calculet([123,54,-1,432,345, -672]));


// #EKRNVPM
// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13

function sum(arr) {
    let basket = 0;
    for (const item of arr) {
        basket = basket + item;
    }
    return basket;
}

console.log(sum([1, 2, 10]));
// #kpsbSQCt2Lf
// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]



function swap(arr, index1, index2) {
    
}

// #mkGDenYnNjn
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250


function fexchange(sumUAH,currencyValues,exchangeCurrency) {

}
