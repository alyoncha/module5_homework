let arr =  [1, 2, 3, 4];
let flag = true;
let arrayLength = arr.length;
for (let i = 0; i < arrayLength-1; i = i + 1){
  for (let j = 0; j < arrayLength-i-1; j = j + 1){
    if(arr[j]!=arr[j+1]){
      flag = false;
      break;
    }
  }
}
console.log(flag)