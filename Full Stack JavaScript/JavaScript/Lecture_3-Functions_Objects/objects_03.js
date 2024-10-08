//  Objects

let userName = {
    firstName: "Shantanu",
    lastName : "Gopale",
    mailId : "gopaleshantanu@gmail.com",
    mobNo : 7350096668,
    role : "MERN DEV",
    loginCOunt : 800,
};

console.log(userName);
console.log(userName.role);
console.log(userName['role']);
console.log(userName.mailId);

userName.role = "Devops Engineer";

console.log(userName);