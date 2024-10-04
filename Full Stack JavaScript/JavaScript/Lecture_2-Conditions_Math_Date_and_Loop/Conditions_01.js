// Conditions :- 
//      if-else, 
//      switch, 
//      Ternary Operator/Ternary Conditions

// ********************If-Else*********************
let a = 87;
let b = 76;

if(a == 0)
{
    console.log(a ,"is Zero");
}
else if(a < b)
{
    console.log(a +"is Smaller");
}
else{
    console.log(b ,"is Smaller");
}

//********************Swicth Case*********************

var option = 6;

switch(option)
{
    case 6:
        console.log("It's Saturday");
        break;
    case 7:
        console.log("It's Sunday");
        break;
    default:
        console.log("Invalid Choice");
}

// ********************Ternary Operator / Condition*********************

let num1 = 8;
let num2 = 9;

(num1 < num2) ? console.log(num1 + " is Smaller") : console.log(num2 + " is Greater"); 
