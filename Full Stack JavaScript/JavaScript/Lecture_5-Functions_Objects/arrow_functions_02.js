// Arrow Functions is the Standard way for Writing a Functions

// Normal Arrow Function
let fun1 = () => {
    console.log("Hii");
}
fun1();

// Arrow Function with parameters

let sum = (val1, val2) => {
    let result = val1 + val2;
    console.log("Sum of " +val1 + " and " + val2 +" is "+result);
}
sum(10, 20);