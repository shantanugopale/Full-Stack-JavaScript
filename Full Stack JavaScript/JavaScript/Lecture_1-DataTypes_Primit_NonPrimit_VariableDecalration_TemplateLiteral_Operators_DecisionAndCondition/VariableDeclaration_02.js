// Variable :--> It's the PlacedHolder of any Value

    // there are 3 ways to create variable :
                                        // i> var
                                        // ii> let 
                                        // iii> const

// i> var --> It can be Re-defined and Re-Declared
var a = "Shantanu Gopale";
a = "Shantanu Dnyaneshwar Gopale";
console.log(a);
var a = "SDE-IV";
console.log(a);

// ii> let --> It can be Re-Defined not Re-Declared;
let b = "Backend Dev";
// let b = "Frontend Dev"; --> It gives Error
b = "Frontend Dev";
console.log(b);

// iii> const --> It never be Change.
const c = "SDE-IV";
// c = "MANAGING DIRECTOR"; --> It Gives Error: Assignment to Constant Variables
console.log(c);