
// Nearly all objects in JavaScript are instances of Object; 
// console.log(this)

const object = {
    rocket: '/>',
    home: '|^|'
}

// console.log(object);

// for(k in object)
// {
//     console.log(k);
// }

// string, number, bigint, boolean, null, undefined, symbol


// --------------------------------Part - 1------------------------------------
const obj1 = {
    rocket: '/>',
    fuel: 2,
    config: {
        name: 'mars'
    }
}

obj1.fuel = 300
obj1['year'] = 2000

// console.log(obj1)

// --------------------------------Part - 2------------------------------------
const obj2 = new Object() // Constructor
obj2.redBook = 'rbook'
obj2.blueBook = 'bbook'
obj2.myValue = '1 Blue Book'
// console.log(obj2);

// --------------------------------Part - 3------------------------------------
const power = {
    fly: true,
    cordinate: Math.random() + 2
}

const obj3 = Object.create(power) // Inherits the Another Objects Properties
// To Keep Object clean inside its Prototype because we Instatiates it
// By using this we apply Certain Restriction that it doesn't directly Access to Anyone
// console.log(obj3); // {}

// console.log(obj3.fly);
// console.log(obj3.cordinate);

// console.log(Object.getPrototypeOf(obj3))

// --------------------------------Part - 4------------------------------------
const obj4 = Object.create({})
// To Add Property to a Control we need Getter and Setter

// console.log(obj4); // {}

// obj4.name = "Shantanu"
// console.log(obj4);

Object.defineProperty(obj4, 'book', {
    // icon : '✔' // undefined
    get: () => '✔', // This is Getter
    enumerable: true // Is not Default we have Explicitly On it
})
// console.log(obj4) //{}
// console.log(Object.getPrototypeOf(obj4)) //{}
// console.log(obj4.book)

// Nothing is Happens for LOOP the Object then I Need to Explicitly On it.
for (k in obj4) {
    // console.log("Value of K is ",k);
}

// Explore --> Setters

const objSet = Object.create({})
// console.log(objSet)
let a = []
objSet.a = a
Object.defineProperty(objSet, 'name', {
    set(x) {                            // Setter
        this.a.push(x)
    },
    get: () => objSet.name,             // Getter
    enumerable: true
})
objSet.name = 'ShantanuDnyaneshwarGopale'
objSet.name = 'ShantanuGopale'
// console.log(objSet);

// --------------------------------Part - 5------------------------------------
const obj5 = {
    comics: 'marvel',
    pen: '',
    // printComic(){

    // },
    printAComic: function () {
        this.pen += '🖊📗'
        console.log(this);
        return this
    },
    printBComic: () => {
        this.pen += '🖊📗😊'
        console.log(this)
    },
}

console.log(obj5.printAComic())
console.log(obj5.printBComic())

console.log(obj5.printAComic().printAComic().printAComic())