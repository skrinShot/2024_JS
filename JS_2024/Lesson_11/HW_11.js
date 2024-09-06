// #HmvAfRQM
// - взяти https://dummyjson.com/docs/carts та вивести інформацію про всі корзини.
// // Відобразити всі поля кожної корзини.


const cartsDiv = document.getElementById('carts');
fetch('https://dummyjson.com/carts')
    .then(value => value.json())
    .then(cartsObject => {
        const {carts} = cartsObject;
        console.log(carts);

        for (const cart of carts) {
            const div = document.createElement('div');
            div.classList.add('cart-container');
            const divWithInfo = document.createElement('div');
            divWithInfo.classList.add('divWithInfo')//Перевірка для себе, чи правильно зрозумів
            divWithInfo.innerText = `
                    "total": ${cart.total},
                    "discountedTotal": ${cart.discountedTotal},
                    "userId": ${cart.userId},
                    "totalProducts": ${cart.totalProducts},
                    "totalQuantity": ${cart.totalQuantity}
                `

            const ol = document.createElement('ol');
            ol.classList.add('ol')//Перевірка для себе, чи правильно зрозумів
            for (const product of cart.products) {
                const li = document.createElement('li');
                const info = document.createElement('p');
                info.innerText = `
                      "id": ${product.id},
                      "title": ${product.title},
                      "price": ${product.price},
                      "quantity": ${product.quantity},
                      "total": ${product.total},
                      "discountPercentage": ${product.discountPercentage},
                      "discountedTotal": ${product.discountedTotal},
                    `

                const img = document.createElement('img');
                img.src = product.thumbnail;
                li.append(img, info);
                ol.appendChild(li);

            }

            div.append(divWithInfo, ol);
            cartsDiv.appendChild(div);

        }

    });











// #whXxOBlYS0H
// - взяти https://dummyjson.com/docs/recipes та вивести інформацію про всі рецепти.
// // Інгредієнти повинні бути список під час відображення.

const url = new URL('https://dummyjson.com/recipes');
url.searchParams.set('limit', '2');

const target = document.getElementsByClassName('target')[0];
fetch(url)
    .then(value => value.json())
    .then(recipesObject => {
        const {recipes} = recipesObject;
        for (const recipe of recipes) {
            console.log(recipe);
            const recipeDiv = document.createElement('div');
            for (const recipeKey in recipe) {
                if (Array.isArray(recipe[recipeKey])) {
                    const arrayAndTitleDiv = document.createElement('div');
                    const title = document.createElement('div');
                    title.innerText = `${recipeKey}:`;
                    const ol = document.createElement('ol');
                    const array = recipe[recipeKey];
                    for (const item of array) {
                        const li = document.createElement('li');
                        li.innerText = item;
                        ol.appendChild(li);
                    }
                    arrayAndTitleDiv.append(title, ol);
                    recipeDiv.appendChild(arrayAndTitleDiv);
                } else {
                    if (recipeKey !== 'image') {

                        const keyDiv = document.createElement('div');
                        keyDiv.innerText = `${recipeKey} : ${recipe[recipeKey]}`
                        recipeDiv.appendChild(keyDiv);
                    }
                }
            }

            const img = document.createElement('img');
            img.src = recipe.image;
            recipeDiv.appendChild(img);


            target.appendChild(recipeDiv);
        }


    });

