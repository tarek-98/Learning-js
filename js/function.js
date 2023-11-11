function Sum (a , b)
{
    let z = a + b;
    console.log(z)
}
Sum(4 , 5);
Sum(7 , 13);

// function Info (name , age)
// {
//     if(age < 20 )
//     {
//         console.log(`Hi ${name} sorry your age is < 20 `)
//     }
//     else
//     {
//         console.log(`Hi ${name} welcome to the main page`)
//     }
// }
// Info("Tarek", 25);
// Info("Ahmed", 18);

function generateYears (start , end)
{
    for (let i=start ; i<=end ; i++)
    {
        console.log(i)
        if(i === 2025)  // stop in 2025
        {
            return;
        }
    }
}
generateYears(2020 , 2030)

function calc(...num)
{
    let result = 0 ;
    for(let i=0 ; i<num.length ; i++)
    {
        result += num[i];
    }
    return `Final result is ${result}`
}
console.log(calc(10,250,50,40))


function show(...details)
{
    let name=0 , age =0 , state = 0;
    for (let i = 0; i < details.length; i++) {  
        //condition ? true : false 
        typeof details[i] === 'string'
        ? (name = details[i])
        : typeof details[i] === 'number'
        ? (age = details[i])
        : typeof details[i] === 'boolean' && details[i] === true
        ? (state = 'Available')
        : (state = 'Not Available')}
        console.log(`Hi ${name}, your age is ${age}, you not are ${state} for Hire`)
}
show("tarek" , 25 , true);
show(true , 25 , "tarek");
show(25 , "tarek" , false);

/**/
function msg (fname , lname)
{
    let messege = "Hello"
    function cmsg ()
    {
        return `${messege} ${fname} ${lname}`
    }
    return cmsg();
}
console.log(msg("Tarek", "Salah"))
/*arrow fn*/
let print = (num1 , num2) => num1+num2;  // for 1 statment remove (return)
console.log(print(50,60))

/*fn challenge*/

let names = function(...nam)
{
    return nam;
}
// let names = (...nam) => nam;
console.log(names("Osama","mahmoud","ali","ibrahim"))
document.write(`<p> String [${names("Osama")}] , [${names("mahmoud")}] , [${names("ali")}] , [${names("ibrahim")}] => Done!</p>`)

let mynum = [20 , 50 , 10 , 60]
let calculate = (one , two , ...nums)  => mynum[0] + mynum[1] + mynum[2];
console.log(calculate(10, mynum[0] , mynum[1] ));

/*higher fn map*/

let myNums = [1 , 2 , 3 , 4 , 5 , 6]
function addition (ele)
{
    return ele + ele;
}
let add = myNums.map(addition)
console.log(add);


//
let swappingcase = "ElTareK";
let sw = swappingcase.split("").map(function(ele)
{
    // return ele.toUpperCase();
    return ele===ele.toUpperCase() ? ele.toLocaleLowerCase() : ele.toUpperCase();
}
)
.join("");
console.log(sw);


let invertedNum = [1, -10, -20, 15, 100, -30]
let invert = invertedNum.map(function(ele)
{
    // return ele * (-1)
    return -ele
}
)
console.log(invert);

let ignorenumber = "El415tar554e3k"
let ign = ignorenumber.split("").map(function(ele)
{
    return isNaN(parseInt(ele)) ? ele : "";
}
).join("")
console.log(ign);

/*higher fn filter*/
let numbers = [20, 15, 22, 13, 19, 10]
let evenNum = numbers.filter(function(el)
{
    return el % 2 === 0 ;
}
)
console.log(evenNum)

let sentence = "I Love Foood Code Too Playing Much"
let moresentence = sentence.split(" ").filter(function(ele)
{
    return ele.length <= 4 ;
}
).join(" ")
console.log(moresentence)

/*higher fn reduce */
let n = [20, 15, 22, 13, 19, 10]
let sum = numbers.reduce(function(ac, el , index , arr)
{
    return ac + el ;
    // return ac>el ? ac : el     // the biggest num in arry
}
)
console.log(sum)

/*higher fn foreach*/
let all = document.querySelectorAll("ul li");
let alldiv = document.querySelectorAll(".content div");

all.forEach(function(ele){
    ele.onclick = function() {
        all.forEach(function(ele){
            ele.classList.remove("active")
        });
        this.classList.add("active")

        alldiv.forEach(function(ele){
            ele.style.display = 'none'
        });
    };
});

/*higher fn challenge*/

let myString = "EE,l,4,1,5,t,7,a_r,5,5,4,e,3,k"
let Str = myString.split("").map(function(ele)
{
    return isNaN(parseInt(ele)) ? ele : "";
}
).filter(function(ele,ind,arr){
    return ! ele.startsWith(",") && ! ele.startsWith("_")
}).reduce(function(acc,cur){
    return acc + cur
}).slice(true)
console.log(Str);