// for in loop is for Objects only

let userName = {
    firstName : "Shantanu",
    lastName : "Gopale",
    role : "Software Engineer",
    salary : 7247100558,
};

console.log(userName);

for(const x in userName)
{
    console.log(userName[x]);
}