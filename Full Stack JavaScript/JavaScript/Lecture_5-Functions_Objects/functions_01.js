
// for of for Arrays and for in for Objects

// functions :

// Normal Function
function sum() {
    let a = 10;
    let b = 20;
    console.log("Addition is :", a + b);
}
sum();
sum();


// *********************************************************************
// Function with Parameters
function sumByUserValue(val1, val2) // Definintion of a function
{
    console.log("Addition is :", val1 + val2);
}

sumByUserValue(20, 20);
sumByUserValue(20, 40);
sumByUserValue(30, 20); // calling a fucntion


// *********************************************************************
// Function with Return Type
function sumWithReturnType(val1, val2) {
    let result = val1 + val2;
    return result;
}

let ans = sumWithReturnType(10, 60);
console.log("Additon with return type is: ", ans);


// *********************************************************************
// Function used with a String
function URL(url, domain) {
    let con = "https://";
    let result = con + url + domain;
    return result;
}

let myLink = URL("shantanugopale", ".me")
console.log("My WebSite is : ", myLink);


// *********************************************************************
// Passing Array to the Function
function acceptArrayToFunction(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
let arrayElements = [1, 3, 4, 5, 6, 7, 8];
let answer = acceptArrayToFunction(arrayElements);
console.log(answer);


// *********************************************************************
// Passing multiple elements to Function Arguments
function accpetMoreElementsToFunctions()
{   
    // arguments
    let sum = 0;
    for(let i = 0; i<arguments.length; i++)
    {
        sum += arguments[i];
    }
    console.log(arguments);
    console.log("Sum is : ",sum);
}

accpetMoreElementsToFunctions(6,7,8,4,5,3,2);