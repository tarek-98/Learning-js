//array
let myFriends = ["ahmed" , "amr" , "mohammed" , "assem"]
let [a, b, c, d] = myFriends
// console.log(a)
// console.log(b)
// console.log(c)
// console.log(d)

let myFriend = ["ahmed" , "amr" , "mohammed" , ["assem", "salah", ["tarek" , "nermo"]]]
let [ , , , [z, , [ ,x]]] = myFriend
console.log(z)
console.log(x)

//swapping
//old
let book = "video" ;
let video = "book";
// let s = book 
// book = video
// video = s

//destructing
[book , video] = [video , book]

console.log(book)
console.log(video)

//object
let user = 
{
    theName : "tarek",
    theAge : 23,
    theCountry : "egypt",
    theTitle : "developer",
    skills : 
    {
        html : 90,
        css : 60,
    }
}
let {theName, theAge, theCountry, theTitle, skills : {html}} = user;
console.log(html)

let {html:skillOne} = user.skills
console.log(`My html progres is ${skillOne}`)

//Challenge
let chosen = 2; 

let Friends = [
    {title : "osama", age : 39, available: true, skills: ["html", "css"]},
    {title : "tarek", age : 25, available: false, skills: ["python", "django"]},
    {title : "ahmed", age : 33, available: true, skills: ["php", "larvel"]},
];

let sol = [
    {title:t1 , age:a1 , available:v1 , skills:[ , s1]},
    {title:t2 , age:a2 , available:v2 , skills:[ , s2]},
    {title:t3 , age:a3 , available:v3 , skills:[ , s3]},
] = Friends

if (chosen === 1 )
{
    console.log(t1)
    console.log(a1)
    if (v1 === true)
    {
        console.log("available")
    }else
    {
        console.log("not available")
    }
    console.log(s1)
}

if (chosen === 2 )
{
    console.log(t2)
    console.log(a2)
    if (v2 === true)
    {
        console.log("available")
    }else
    {
        console.log("not available")
    }
    console.log(s2)
}

if (chosen === 3 )
{
    console.log(t3)
    console.log(a3)
    if (v3 === true)
    {
        console.log("available")
    }else
    {
        console.log("not available")
    }
    console.log(s3)
}