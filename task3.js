let b = prompt ("Введите значение: ");

function reverseString (str) {
  var splitString = str.split("")
  var reverseArray = splitString.reverse();
  var joinArray = reverseArray.join("");
  return joinArray;
}

console.log(reverseString(b))