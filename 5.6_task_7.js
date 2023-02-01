//Дан массив. Нужно вывести в консоль количество чётных и нечётных элементов в массиве. Если в массиве есть нулевой элемент, то он учитывается и выводится отдельно.
//При выполнении задания необходимо учесть, что массив может содержать не только числа, но и, например, знаки, null и так далее.

let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 10, 11, "привет", "пока", null];

let evenCount = 0;
let oddCount = 0;
let zeroCount = 0;
let stringCount = 0;
let nullCount = 0;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] === 0) {
    zeroCount += 1;
  } else if (typeof arr[i] === "number") {
    if (arr[i] % 2 === 0) {
      evenCount += 1;
    } else if (arr[i] % 2 !== 0) {
      oddCount += 1;
    }
  } else if (typeof arr[i] === "string") {
    stringCount += 1;
  } else {
    nullCount += 1;
  }
}
console.log(
  `Количество чётных элементов = ${evenCount}; Количество нечётных элементов = ${oddCount}; Количество нулевых элементов = ${zeroCount}; Количество элементов-строк = ${stringCount}; Количество элементов null = ${nullCount};`
);
