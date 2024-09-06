// #sH8c4er
// - Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".
const buttons = document.getElementsByTagName('button');
const button = buttons[0];

button.onclick = function () {
    // document.getElementById('text').remove();
    const div = document.getElementById('text');
    div.style.display = 'none';


};
// button.addEventListener('click', () => {
//     // document.getElementById('text').remove();
//     const div = document.getElementById('text');
//     div.style.display = 'none';
// });

















//         #j693ca8
//     - створити інпут який приймає вік людини та кнопку яка підтверджує дію.
//     При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача




// #ymAmN2xJ
// Стоврити форму з трьома полями для name,sruname,age та кнопкою. При натисканні на кнопку зчитати данні з полів, та вивести об'єкт в документ.
// Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом

const someForm = document.forms.someForm;

// const sendButton = someForm.sendButton;
// console.log(sendButton);
// sendButton.addEventListener('click', () => {
//     const nameValue = someForm.name.value;
//     const surnameValue = someForm.surname.value;
//     const ageValue = someForm.surname.age;
//     let obj = {nameValue,surnameValue,ageValue}
//     console.log(obj);
//
// });

// someForm.onsubmit = function () {};
const target = document.getElementById('target');

someForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const nameValue = someForm.name.value;
    const surnameValue = someForm.surname.value;
    const ageValue = +someForm.age.value;
    let obj = {nameValue, surnameValue, ageValue}
    console.log(obj);
    target.innerText = obj.nameValue + ' ' + obj.surnameValue + ' ' + obj.ageValue;
});


// #2VaLt4vDczH
// є сторінка, на якій є блок, я кому знаходиьтся цифра. написати код, який при кожному перезавантажені сторінки буде додавати до неї +1
let currentNumber = +localStorage.getItem('number'); // 0
currentNumber += 1;
localStorage.setItem('number', currentNumber);
document.getElementById('target1').innerText = currentNumber;

// #LhSfdhM3
// Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховще, в масив sessionsList зберігається інформація про дату та час відвідування сторінки.
// Є  сторінка sessionsListPage.html (назва довільна), при відвідуванні якої потрібно відмалювати всю інформацію про відвідування сторінки index.html. Інфу НЕ виводити в консоль, а малювати в DOM


let sessionsList = JSON.parse(localStorage.getItem('sessionsList')) || [];
sessionsList.push(new Date());
localStorage.setItem('sessionsList', JSON.stringify(sessionsList));
// #Jg0gPO00
// створити конвертор ваги з кг в фунти. данні заповнюються через інпут. При введенні даних обрахунок стається миттєво, без натискань додаткових кнопок

const input = document.getElementById('xxx');
const resultDiv = document.getElementById('result');
input.oninput = function () {
    resultDiv.innerText = +this.value * 2.2;

};
// #RbQGnH5DuC
// В localStorage зберігаються масиви. Вам потрібно зробити функцію, які дістає потрібний вам масив з localStorage та додає в нього об'єкт
// сигнатура функції -
// addToLocalStorage(arrayName:string,objToAdd:any{}):void
function addToLocalStorage(arrayName, objToAdd) {
    const lsItem = localStorage.getItem(arrayName);
    if (!lsItem) {
        throw new Error('there is no such array');
    }

    const array = JSON.parse(lsItem);
    if (typeof objToAdd === 'object') {
        array.push(objToAdd);
    }
    localStorage.setItem(arrayName, JSON.stringify(array));

}

//     #kUSgFqWY
// Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
const table = document.getElementById('table');

const tableGeneratorFrom = document.forms['tableGeneratorFrom'];

tableGeneratorFrom.onsubmit = function (e) {
    table.innerText = '';
    e.preventDefault();
    const linesValue = +tableGeneratorFrom.lines.value;
    const cellsValue = +tableGeneratorFrom.cells.value;
    const dataValue = tableGeneratorFrom.data.value;
    console.log(linesValue, cellsValue, dataValue);

    for (let i = 0; i < linesValue; i++) {
        const tr = document.createElement('tr');
        for (let j = 0; j < cellsValue; j++) {
            const td = document.createElement('td');
            td.innerText = dataValue;
            tr.appendChild(td);
        }

        table.appendChild(tr);

    }

};
//     #bq1zkx7WP
// *** (подібне було вище, але...будьте уважні в другій частині) створити сторінку з довільним блоком, в середині якого є значення "100грн"
// при перезавантаженні сторінки до значаення додається по 10грн, але !!!
//     зміна ціни відбувається тільки на перезавантаження, які відбулись пізніше ніж 10 секунд після попереднього.
//     При перезавантаженні, яке відбулось раніше ніж минуло 10 секунд - нічого не відбувається
//
//
// #NKB0tgWIK1G
// ***PAGINATION
// зробити масив на 100 об'єктів та дві кнопки prev next
// при завантажені сторінки з'являються перші 10 об'єктів.
//     При натисканні next виводяться наступні 10 об'єктів
// При натисканні prev виводяться попередні 10 об'єктів