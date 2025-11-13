let x = 16.75;
let summary = `
Number: ${x}
Rounded: ${Math.round(x)}
Square Root: ${Math.sqrt(x).toFixed(2)}
Cube (x³): ${Math.pow(x, 3).toFixed(2)}
Random (10–50): ${Math.floor(Math.random() * 41) + 10}
`;
console.log(summary);
