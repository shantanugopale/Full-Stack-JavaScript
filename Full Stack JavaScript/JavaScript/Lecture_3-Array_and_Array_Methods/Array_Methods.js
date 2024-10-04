
// Array Methods 

let names = ['shantanu','sushant','shivam','aniket','pooja','anurag'];

console.log(names);

// length : Array Property which returns the length of an Array.
console.log(names.length);

// Particular index wise Access Element
console.log(names[4]);

// Last Value Access
console.log(names[names.length-1]);

// Another way to Create an Array but (Not Recommended)
let arr = new Array(4,5,6,7,4,3,5,7,9);
console.log(arr);

// push --> It will Adds the Element of an Array at the End.
// console.log(arr.push("Maharaja"));
arr.push("Maharaja");
console.log(arr);

// pop --> It will remove the Element of an Array at the End.
// console.log(arr.pop());
arr.pop();
console.log(arr);

// unshift --> It will insert the element Inside of an Array from the Start.
// console.log(arr.unshift(3,"Shantanu"));
arr.unshift(3,"Shantanu")
console.log(arr);

// shift --> It will removes the Element of an Array from the Start.
// console.log(arr.shift());
arr.shift();
console.log(arr);