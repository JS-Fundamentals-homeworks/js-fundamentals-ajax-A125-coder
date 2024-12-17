// Завдання: отримання даних про користувачів
// За допомогою засобі Fetch отримати інформацію про користувачів
// за посиланням - https://jsonplaceholder.typicode.com/users
// Імена користувачів відобразити в ненумерованому списку ul.usersList,
// який створений у файлі index.html
// Запустити програму за допомогою Live Server
// Перевірити за допомогою команди npm tests/task1.test.js

const userList = document.querySelector('ul.usersList');

(async function getUserNames() {
  let result = await fetch("https://jsonplaceholder.typicode.com/users");
  let data = await result.json();
  let userItems = "";
  data.forEach((user) => {
    userItems += `<li>${user.name}</li>`;
  });
  userList.innerHTML = userItems;
})();

