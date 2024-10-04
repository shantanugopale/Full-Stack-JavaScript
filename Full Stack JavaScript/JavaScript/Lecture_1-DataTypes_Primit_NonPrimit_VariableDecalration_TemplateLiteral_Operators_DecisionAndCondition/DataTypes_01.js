// *******************Primitive DataTypes - number, String, Boolean, (null, underfined)-> this two are empty values.*******************

// 1> number
let num1 = 2;
let num2 = 3.8;

console.log(num1);
console.log(num2);
// ----------------------------------------------------------------------------

// 2> String --> Any Quotes used.
let s1 = "Shantanu";
let s2 = 'Gopale';
let s3 = `Shantanu Gopale`
console.log(s1);
console.log(s2);
console.log(s3);
// ----------------------------------------------------------------------------

// 3> Boolean --> George Boole is known as Father of Boolean Algrebra.
let b1 = true;
let b2= false;

console.log(b1);
console.log(b2);
// ----------------------------------------------------------------------------

// 4> null
let e1 = null;
console.log(e1);
// -----------------------------
// 5> undefined
let e2;
console.log(e2);

// ----------------------------------------------------------------------------

// *******************Non-Primitive DataTypes - Array, Objects --> More than one Value******************* 

// 1> Array --> Any type can be Added.
let arr = [3,"Shantanu", true, 9.7, null];
// index - At what positions values are kept
console.log(arr);

// ----------------------------------------------------------------------------

// 2> Objects --> {key:value} pair
const name = {
    // key:value;
    fname:'shantanu',
    lname: 'Gopale',
    info: {
        mail: 'gopaleshantanu@gmail.com',
        address: 'Chakan, Pune, MahaRashtra',
        MobNo: 7350096668
    }
};
console.log(name);
// ----------------------------------------------------------------------------