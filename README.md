ДЗ 54. N#4. Розробка HTTP сервера з використанням Node.js.

http://localhost:3000 - GET запит, сторінка Home.

http://localhost:3000/about - GET запит, сторінка About.

http://localhost:3000/users -Get запит,  дані користувачів.

http://localhost:3000/users -POST , додавання  користувача.

При додаванні реалізована валідація JSON формата.

Приклад нового користувача: 
{
    "id": 13,
    "userName": "Jasmin",
    "age": 22
  }

  Додавання можно перевірити повторним http://localhost:3000/users GET запитом.

  Інші адреси - 404 Page Not Found!