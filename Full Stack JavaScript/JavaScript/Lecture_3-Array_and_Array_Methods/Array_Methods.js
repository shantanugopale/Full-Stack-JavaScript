
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

// indexOf() --> Returns the index on which specified element is presents or not.
console.log(arr.indexOf(9));

// push() --> It will Adds the Element of an Array at the End.
// console.log(arr.push("Maharaja"));
arr.push("Maharaja");
console.log(arr);

// pop() --> It will remove the Element of an Array at the End.
// console.log(arr.pop());
arr.pop();
console.log(arr);

// unshift() --> It will insert the element Inside of an Array from the Start.
// console.log(arr.unshift(3,"Shantanu"));
arr.unshift(3,"Shantanu")
console.log(arr);

// shift() --> It will removes the Element of an Array from the Start.
// console.log(arr.shift());
arr.shift();
console.log(arr);

// slice() --> If you want to access some part of it (arg1(from start), arg2(to end-1))
console.log(arr.slice(1,4)); // 1,2,3     excluded - 4

// splice() --> If you add some data into an Array from particular index to the Particular Index then we used Splice
            // splice(args0, args1, args2,..) args0-->start point, 
                                            // args1-->after start position No of elements removed
                                            // args2-->Data/Elements which we want to Add into an Array
console.log(arr.splice(2,0,"Dnyaneshwar"));  // []
console.log(arr);

// concat() --> For Concatenation Purpose
let ary1 = [1,2,3,4,5,8,5,6,6,7,8,9,0];
let ary2 = [6,7,8,9,10];
let ary3 = [8,89,75,4,6];
console.log(ary1.concat(ary2));
console.log(ary1.concat(ary2, ary3));

// fill() --> It will fill the values inside an Array by Replacing Another values and it change on Original Array.
// console.log(ary1.fill(1));       //fill(value) - apply on entire array
// console.log(ary1.fill(1,4));     //fill(value, start) - apply on array from starting position
console.log(ary1.fill(1,4,8));      //fill(value, start, end) - apply on array from start pos to end pos
console.log(ary1);

// join() --> It will join the usergiven context to the entire array elements.
console.log(ary1.join('$ '));
let a = ary1.join(" ");
// console.log(a);
console.log(typeof(a)); // string

// include() --> Check wheather the Array Element is includes/present or Not.
                // Returns boolean value (true/false)
console.log(ary1.includes(8));

// lastIndexOf()
let no = [1,2,1,3,4,5,6,3];
console.log(no.lastIndexOf(3));

// isArray()
// let naaw = "Shantanu";
// console.log(Array.isArray(naaw)); --> Op :-  false
console.log(Array.isArray(no)); // true

// map()  --> It'll map to the All elements of an Arrays.
let number = [6,4,34,98,5,7,78];
console.log(number.map(Math.sqrt))
console.log(number);

// reverse() --> It'll reverse the Elements of an Array and Changes reflected on Original Array.
console.log(number.reverse());
console.log(number);

// sort() --> It'll sort all Elements of an Array
let nums = [9,8,7,6,5,4,4,3,2,1];
console.log(nums.sort());
let studNames = ["Pooja","Anurag","Hitesh","Shantanu","Sushant","Rakesh","Ganesh"];
console.log(studNames.sort());

// split() 
let myName = "Shantanu";
console.log(myName.split(''));