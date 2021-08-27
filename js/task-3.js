//ЗАДАНИЕ

//Напиши скрипт имитирующий авторизацию администратора в панели управления.

// Есть переменная message в которую будет записано сообщение о результате. При загрузке страницы у посетителя запрашивается пароль через prompt:

// Если нажали Cancel, записать в message строку 'Отменено пользователем!'
// В противном случае, если введен пароль который совпадает со значением константы ADMIN_PASSWORD, записать в message строку 'Добро пожаловать!'
// В противном случае, то есть если ни одно из предыдущих условий не выполнилось, записать в message строку 'Доступ запрещен, неверный пароль!'
// После всех проверок вывести в alert значение переменной message.

//РЕШЕНИЕ

//объявить переменные
const ADMIN_PASSWORD = "jqueryismyjam";
let message;

//попросить пользователя ввести пароль и сохранить его в переменную
const userPassword = prompt("Введите пароль:");

// сравнить введенный пользователем пароль с сохраненным в базе и подобрать соответствующее сообщение
if (userPassword === null) {
  message = "Отменено пользователем!";
} else if (userPassword === ADMIN_PASSWORD) {
  message = "Добро пожаловать!";
} else {
  message = "Доступ запрещен, неверный пароль!";
}

// вывести результат проверки в alert
alert(message);