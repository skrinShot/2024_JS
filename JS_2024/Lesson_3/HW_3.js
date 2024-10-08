//- За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
for (let i = 0; i < 10; i++) {
    document.write('<div>Це блок № ' + i + ' c довільним текстом всередині</div>')
}
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині

for (let i = 0; i < 10; i++) {
    document.write('<div>Це блок № ' + i + ' c довільним текстом всередині індекс № ' + i + '</div>')
}

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
let index = 0;

while (index < 20) {
    document.write('<h1>Це блок № ' + index + ' c довільним текстом всередині</h1>')
    index++;
}

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

let i = 0;

while (i < 20) {
    document.write('<h1>Це блок № ' + i + ' c довільним текстом всередині № ' + i + ' </h1>')
    i++;
}


// - Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону
// Масив:
// замість 'ITEM OF ARRAY' підставити елемент з масиву щоб получився цілий список з даними з масиву
//
let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
function foobar() {
    document.write('<ul>')
    for (const item of listOfItems) {
        document.write(`<li>${item}</li>`)
    }
    document.write('</ul>')
}

console.log(foobar());



// -----------------------------------------------
//
// Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону
// Великими літерами прописанні властивості об'єкту які потрібно впровадити в шаблон
//
let products = [
    {
        title: 'milk',
        price: 22,
        image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
    },
    {
        title: 'juice',
        price: 27,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
    },
    {
        title: 'tomato',
        price: 47,
        image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
    },
    {
        title: 'tea',
        price: 15,
        image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
    },
];

document.write('<div class="product-list">');
for (let i = 0; i < products.length; i++) {
    document.write(`
    <div class="product-card">
      <h3 class="product-title">${products[i].title}. Price - ${products[i].price}</h3>
      <img src="${products[i].image}" alt="" class="product-image">
    </div>
  `);
}
document.write('</div>');

// ШАБЛОН
//  <div class="product-card">
//         <h3 class="product-title">TITLE. Price - PRICE</h3>
//         <img src="IMAGE" alt="" class="product-image">
// </div>
// Замість TITLE PRICE IMAGE - підставити відповідні поля з об'єкту
//
//
//
// --------------------
// є масив
let users1 = [
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

let arrTrue = []
let arrFalse = []

let element = 0
while (element < users1.length) {

    let user = users1[element]
//  за допомоги циклу вивести:
//  - користувачів зі статусом true
    if (user.status) {
        arrTrue[arrTrue.length] = user
//  - користувачів зі статусом false
    } else {
        arrFalse[arrFalse.length] = user
    }
    element++;
}
//  - користувачів які старші за 30 років
for (let i = 0; i < users1.length; i++) {
    if (users1[i].age > 30) {
        console.log('Більше 30')
    }
}
console.log(arrTrue);
console.log(arrFalse);

