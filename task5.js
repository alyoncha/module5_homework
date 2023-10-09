let arr =  ['pig', 'dog', 'cat'];
console.log(arr.length);
let result = arr.map(function(item, index, array) {
  return console.log(item);
});