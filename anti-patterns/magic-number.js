function calculateArea(radius) {
  // Using a magic number (3.14) without explanation
  return 3.14 * radius * radius;
}

// Usage
const area = calculateArea(5);
console.log(area);


/* Better way
const PI = 3.14;

function calculateArea(radius) {
  return PI * radius * radius;
}

const area = calculateArea(5);
console.log(area);
*/