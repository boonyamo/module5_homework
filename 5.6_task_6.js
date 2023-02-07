//Дан массив. Проверить, одинаковые ли элементы в массиве и вывести результат true или false в консоль. Речь идёт не о двух рядом стоящих одинаковых элементах, а обо всех. Проверить, все ли элементы в массиве одинаковые.

const nums = [1, 2, 1, 1, 1];
let result = nums.every(checkNums);

function checkNums(nums) {
  return nums === num[0];
}
console.log(result);
