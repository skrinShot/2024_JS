const userInfo = document.getElementById('userInfo');
fetch('https://jsonplaceholder.typicode.com/users/1')
    .then(response => response.json())
    .then(user => {
        console.log(user);
        const div = document.createElement('div');
        div.classList.add('divInfo');
        const divWithInfo = document.createElement('div');
        divWithInfo.classList.add('divWithInfo')
        divWithInfo.innerText = `
                   id: ${user.id},
                   name: ${user.name},
                   username: ${user.username},
                   email: ${user.email}
           `
        const divWithInfo2 = document.createElement('div');
        divWithInfo2.classList.add('divWithInfo2')
        divWithInfo2.innerText = `
                   address: 
           `
        console.log(divWithInfo2)

        const ol = document.createElement('ol');
        ol.classList.add('ol')
        ol.style.listStyleType = 'none';
        const li = document.createElement('li');
        const info = document.createElement('p');
        info.innerText = `
                      street: ${user.address.street},
                      suite: ${user.address.suite},
                      city: ${user.address.city},
                      zipcode: ${user.address.zipcode}
                    `
        const divWithInfo3 = document.createElement('div');
        divWithInfo3.classList.add('divWithInfo2')
        divWithInfo3.innerText = `
                   geo: 
           `
        const ol2 = document.createElement('ol');
        ol2.classList.add('ol2')
        ol2.style.listStyleType = 'none';
        const li2 = document.createElement('li');
        li2.classList.add('li2')
        const info2 = document.createElement('p');
        const div2 = document.createElement('div');
        div2.classList.add('divInfo2');
        info2.innerText = `
                      lat: ${user.address.geo.lat},
                      lng: ${user.address.geo.lng}
                    `
        const divWithInfo4 = document.createElement('div');
        divWithInfo4.classList.add('divWithInfo4')
        divWithInfo4.innerText = `
                   phone: ${user.phone},
                   website: ${user.website}
            `
        const divWithInfo5 = document.createElement('div');
        divWithInfo5.classList.add('divWithInfo5')
        divWithInfo5.innerText = `
                   company: 
            `

        const ol3 = document.createElement('ol');
        ol3.classList.add('ol3')
        ol3.style.listStyleType = 'none';
        const li3 = document.createElement('li');
        const info3 = document.createElement('p');
        info3.innerText = `
                      name: ${user.company.name},
                      catchPhrase: ${user.company.catchPhrase}
                      bs: ${user.company.bs}
                    `
//         5 Додати кнопку "post of current user", при кліку на яку, з'являються title всіх постів поточного юзера
// // (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
// //     6 Каждому посту додати кнопку/посилання, при кліку на яку відбувається перехід на сторінку
// //     post-details.html, котра має детальну інфу про поточний пост.





        let form1 = document.forms.form1;
        form1.addEventListener('submit', function (eventObject) {
            eventObject.preventDefault()
        })
        const button = document.getElementById('button');
        button.classList.add('button')
        button.onclick=function () {
            document.getElementsByClassName('popap')[0].classList.toggle('show');
        }

        fetch('https://jsonplaceholder.typicode.com/users/1/posts')
            .then(response => response.json())
            .then(posts => {
                console.log(posts);
                for (const post of posts) {
                    const div = document.createElement('div');
                    div.classList.add('post-container');



                    const divWithInfo6 = document.createElement('div');
                    divWithInfo6.classList.add('divWithInfo6');//Перевірка для себе, чи правильно зрозумів
                    divWithInfo6.innerText = `
                    Title: ${post.title}
                `

                }

            });

//asdasd











        li3.appendChild(info3)
        ol3.appendChild(li3)
        userInfo.appendChild(div)
        div.append(divWithInfo, divWithInfo2, ol, divWithInfo4, divWithInfo5, ol3, )
        li2.appendChild(info2)
        ol2.appendChild(li2)
        ol.appendChild(li);
        li.append(info,divWithInfo3, ol2);

    });
