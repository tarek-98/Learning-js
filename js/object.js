// let myvar = "theLastName"
// let user = {
//     // properties
//     theName: "Tarek",
//     theAge: "25",
//     theLastName: "Salah",
//     //methodes
//     sayHello: function(){
//         return "Hello"
//     }
// };
// console.log(user.theName);
// console.log(user.theAge);
// console.log(user.sayHello());
// console.log(user[myvar]);

let user = {
    // properties
    theName: "Tarek",
    theAge: "25",
    Skills: ["html", "Css", "Js"],
    address:{
        ksa: "Riyadh",
        egypt:{
            one:"Cairo",
            tow: "Minia",
        }
    },
    available: true,
    //methodes
    chechav: function(){
        if(user.available === true){
            return "Ready for Work"
        }
        else
        {
            return "Not Ready"
        }
    },
}
console.log(user.theName);
console.log(user.theAge);
console.log(user.Skills);
console.log(user.chechav());

