//Дана строка. Необходимо вывести в консоль перевёрнутый вариант. Например, "Hello" -> "olleH".

let str = "I love JavaScript";
let reversedStr = str.split("");

reversedStr.reverse();
let arrayToString = reversedStr.toString();
let res = reversedStr.join("");

console.log(res);
