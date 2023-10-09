let result;
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return result = Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}
result = getRandomIntInclusive(0,100)
console.log(result);