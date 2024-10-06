// for of loop

let fruits = ["Apple", "Mango", "Banana", "Cherry"];
console.log(fruits);

let upperCaseFruits = [];

for (const newFruit of fruits) {
    upperCaseFruits.push(newFruit.toUpperCase())
}

console.log(upperCaseFruits);