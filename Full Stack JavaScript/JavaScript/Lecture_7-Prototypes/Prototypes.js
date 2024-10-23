// alert("Hello Shantanu")

let myHeros = ["thor", "Spiderman"]
let dcHeros = ["batman", "black adam", "superman"]


let heropower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPowder: function () {
        console.log(`Spider Power is ${this.spiderman}`);
    }
}

Object.prototype.shantanu = function () {
    console.log(`Shantanu is Present All Objects..`);

}

myHeros.shantanu()

// Inheritance

const User = {
    name: 'top name',
    email: 'topuser@gmail.com'
}

const Teacher = {
    makeVideos: true
}

const TeachingSupport = {
    isAvailable: false
}

const TSAssistant = {
    makeAssignment: 'JS Assignment',
    fullTime: true,

    //Injecting the Properties inside the Object of Another Object by Using __proto__and It's an Old Way
    __proto__: TeachingSupport  // --> Old Syntax
}

Teacher.__proto__ = User

// Modern Synax

Object.setPrototypeOf(TeachingSupport, Teacher) // Not connected the Correct Prototypal Chain need to Check again

// ---->>>> Goal : Get truelength() of a String <<<<------//

String.prototype.truelength = function () {
    console.log(`True Length is : ${this.trim().length}`);
}