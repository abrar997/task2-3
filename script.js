const array = [1, 2, 3, 4, 5, 6, 2, 4, 1, 5, 6];

// Exercise-1
function filterArray(numbers) {
  return numbers.filter((item) => item % 2 === 0);
}
document.getElementById("exercise-1").innerHTML = filterArray(array);

// Exercise-2
function findLargestNumber(numbers) {
  return Math.max(...numbers);
}
document.getElementById("exercise-2").innerHTML = findLargestNumber(array);

// Exercise-3
const text = "Hello world !";
function reverseText(text) {
  var splitText = text.split("").reverse("").join("");
  return splitText;
}
document.getElementById("exercise-3").innerHTML = reverseText(text);

// Exercise-4
function removeDuplicate(numbers) {
  return [...new Set(numbers)];
}
document.getElementById("exercise-4").innerHTML = removeDuplicate(array);

document.getElementById("array").innerHTML = `Array : ${array}`;
document.getElementById("text").innerHTML = `Text : ${text}`;
