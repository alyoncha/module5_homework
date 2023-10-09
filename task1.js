let b = prompt ("Введите значение: ");
a++;
t = typeof a;
alert ("a = " + a);
if ( t == 'number' ) {
  if (a%2 === 0) {
    console.log("четное")
  } else if (t == 'NaN') {
    console.log("Ошибка")
  } else {
    console.log("нечетное")
  }
} else {
    console.log("Упс, кажется, вы ошиблись")
}