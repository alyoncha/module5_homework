let map = new Map([
  ["apple", "green"],
  ["strawberry", "red"],
  ["blueberry", "blue"]
]);
for (let [key, value] of map) {
  console.log("Ключ - " + key + ", значение - " + value);
}
