let x ;

t = typeof x;
if ( t == 'string' ) {
  console.log("x - строка")
} else if ( t == 'number' ) {
    console.log("x - число")
} else if ( t == 'boolean' ) {
  console.log("x - логический")
} else {
    console.log("Тип x не определён")
}