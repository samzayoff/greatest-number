let numOne = parseFloat(prompt("Enter first number:"));
let numTwo = parseFloat(prompt("Enter second number:"));

if (numOne > numTwo) {
    alert(`${numOne} is the largest number.`);
} else if (numTwo > numOne) {
    alert(`${numTwo} is the largest number.`);
} else {
    alert("Both numbers are equal.");
}