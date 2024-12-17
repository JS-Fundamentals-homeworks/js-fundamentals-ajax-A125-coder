// На сторінці index.html знаходяться поля зазначені коментарем Task2
// При введені імені користувача в поле #userNameInput та натиску на кнопку
// #getUserButton потрібно зробити запит Fetch за посиланням - https://jsonplaceholder.typicode.com/users
// Віднайти користувача із введеним ім'ям, отримати місто його проживанння та
// відобразити у тезі #userCity
// Запустити програму потрібно за допомогою Live Server
// Перевірити правильність програми - команда node tests/task2.test.js

const userNameInput = document.getElementById("userNameInput");
const getuserBtn = document.getElementById("getUserButton");
let userCity = document.getElementById("userCity");

getuserBtn.addEventListener('click', async () => {
    userCity.innerHTML = "";
    let result = await fetch("https://jsonplaceholder.typicode.com/users");
    let data = await result.json();
    data.find(user => {
        if(user.name === userNameInput.value){
            userCity.innerHTML = `${user.address.city}`;
        }
    })
})