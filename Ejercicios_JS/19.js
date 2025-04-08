let a = 0, b = 1;

console.log('Serie Fibonacci hasta superar 100:');
while (a <= 100) {
  console.log(a);
  const siguiente = a + b;
  a = b;
  b = siguiente;
}
