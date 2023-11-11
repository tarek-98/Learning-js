//consturactor function

//parent class
class User {
    constructor(id, username, salary) {
        //properties
        this.i = id;
        this.u = username;
        this.s = salary;
        this.msg = function()
        {
            return `Hello ${this.u} Your Salary ${this.s}`
        }
    }
    //methods
    writeMsg(){
        return `Hello ${this.u} Your Salary ${this.s}`
    }
    updateName(newName){
        this.u = newName;
    }
}
//chiled class
class Admin extends User {
    constructor(id, username, salary, premession){
        super(id, username, salary)
        this.p = premession;
    }
}
let adminOne = new Admin(99, "Abdo", 5000, "ttttt")
console.log(adminOne.msg())


let userOne = new User(100, "Tarek", 1000)
let userTwo = new User(102, "Salah", 2000)
let userThree = new User(103, "Ahmed", 3000)
let userFour = new User(104, "Mohammed", 4000)

console.log(userOne.u)
userOne.updateName("Teto"); //update username
console.log(userOne.u)
console.log(userOne.s)
console.log(userOne.msg())
console.log(userOne.writeMsg())

console.log(userOne instanceof User)
console.log(userOne.constructor === User)


//privet property
class Customer {
    #s;
    constructor(id, name, salary){
        this.i = id;
        this.n = name;
        this.#s = salary;
    }
    getsalary()
    {
        return parseInt(this.#s)
    }
}
let cusOne = new Customer(1, "Tata", "5000 le")
console.log(cusOne.getsalary())

class head extends Customer{
    constructor(id, name, salary, posision){
        super(id, name, salary)
        this.p = posision
    }
}
let headOne = new head(7, "Mohammed", "7000 le", "dev")
console.log(headOne.getsalary(),headOne.i,headOne.n,headOne.p)

Customer.prototype.sayWelcome = function (){
    return `Welcome ${this.n}`
}
console.log(Customer.prototype)


//Date and Time
let dateNow = new Date();
let dateBirth = new Date("24 jan, 98");
console.log((dateNow - dateBirth )/1000 /60 /60 /24 /365); // my age in year
console.log(dateNow)
console.log(dateNow.getTime())
console.log(dateNow.getDate())
console.log(dateNow.getDay()) // sunday first day in the week = index 0
console.log(dateNow.getFullYear())
console.log(dateNow.getMonth()) // january index 0
console.log(dateNow.getHours())

//duration of operation in (ms)
let start = new Date();
for(let i=0 ; i<1000; i++)
{
    let div = document.createElement("div");
    div.appendChild(document.createTextNode(i));
    document.body.appendChild(div)
}
let end = new Date();
let duration = end - start;
console.log(duration)