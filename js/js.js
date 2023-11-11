// console.log("Hello")
// console.error("eroor")
// console.table(["Hello","tarek", "salah"])

// // concatination
// let theTitle = "Elzero", 
// card_desc = "Elzero web school",
// cardDate = "25/10";

// let card = 
// `<div class="card">
//     <div class="content">
//         <h3>Hello ${theTitle}</h3>
//         <p>${card_desc}</p>
//         <span>${cardDate}</span>
//     </div>
// </div>
// `;
// document.write(card.repeat(4));

// //
// let a = "-100";
// let b = "20";
// let c = 30;
// let d = true

// console.log(-a * +b);
// console.log(-a*2 - c + 3*d)


// console.log(100.555555.toFixed(2))
// console.log(parseInt("100"))

// //math opject 
// console.log(Math.round(99.3));
// console.log(Math.round(99.7));
// console.log(Math.ceil(99.3));
// console.log(Math.ceil(99.7));
// console.log(Math.floor(99.3));
// console.log(Math.floor(99.7));

// console.log(Math.min(10 , 15 , 55 , 5))
// console.log(Math.max(10 , 15 , 55 , 5))

//if
let price = 100;
let discount = true;
let discountamount = 30;

if(discount === true)
{   
    price -= discountamount; //price = price - 30
}
console.log(price)

let name = "tarek";
let Gender = "male";

if (Gender === "male")
{
    document.write("Mr")
}
else
{
    document.write("Mrs")
}

let result = Gender === "male" ? "Mr" : "mrs";
console.log(result)

let num = null;
console.log(`The price is ${num || 200}`)
console.log(`The price is ${num ?? 200}`)

/*switch*/
let grade = 90;
switch (grade) {
    case grade = 90 :
    console.log("pass")
        break;
    default:
        console.log("Fail")
        break;
}
/*arry*/

let myfreinds = ["Tarek" , "Ahmed" , "Abood"]

console.log(`Hello ${myfreinds [1]}`)

/*add & remove */
console.log(myfreinds);
myfreinds.unshift("Saif");
console.log(myfreinds);
myfreinds.push("Saif");
console.log(myfreinds);

myfreinds.shift();
console.log(myfreinds);
myfreinds.pop();
console.log(myfreinds);

/*search*/
console.log(myfreinds.indexOf("Ahmed"))
console.log(myfreinds.includes("Tarek"))

/*slice*/
console.log(myfreinds.slice(2))

myfreinds.splice(3,0,"yassen")
console.log(myfreinds)

let myallfreind = myfreinds.concat("amr","tata")
console.log(myallfreind)

console.log(myallfreind.join(" - "))

/*for*/

for (let i=0 ; i<6 ; i++)
{
    console.log(myallfreind[i])
}


let names = [1 , 2 , "Tata" , "Ahmed", 3 , "Mohammed"];
let strnames = [];

for(let j=0 ; j< names.length ; j++)
{
    if(typeof names[j] === "string")
    {
        strnames.push(names[j]);
    }
}
console.log(strnames)

/*product practice*/

let product = ["Keyboard" , "Mouse" , "Screen" , "Pad" , "Monitor" , "iphone"]
let colors = ["red" , "blue" , "green"]
let conunt = 4 ;


for (let i=0 ; i< conunt ; i++)
{
    document.write(`<div>`)
    document.write(`<h3> [ ${i +1} ] ${product[i]} </h3>`)
    for( let j=0 ; j < colors.length ; j+=1)
    {
        document.write(`<p> - ${colors[j]}</p>`)
        
    }
    document.write(`</div>`)
}
document.write(`<hr>`)
document.write(`<hr>`)
/* while loop*/
// loop challenge

let myAdmins = ["Ahmed" , "Osama" ,  "Saif" ,  "Tarek" , "Eid" , "Wafe"]
let myEmployees = ["Samer" , "Sameh" , "Ameer" , "Samera" , "Teto" , "Omar" , "Othman" , "Amany" , "Tata" , "Taher"]
let cont=0;
for (let i=0 ; i<myAdmins.length ; i++)
{
    
    if ( i ===  myAdmins.indexOf("Eid")) 
    {
        document.write(`<div><h2>We Have ${i} Admins</h2></div>`)
        
        for (let i = 0; i < myAdmins.indexOf("Eid"); i++)
        {
            document.write("<div>");
            document.write(`The Admin For Team ${i + 1} Is ${myAdmins[i]}`);
            document.write("<h3>Team Members :</h3>")
            
            for(let j =0 ; j<myEmployees.length ; j++)
            {
                if(myAdmins[i][0] === myEmployees[j][0])
                document.write(`<p> ${j+1} - ${myEmployees[j]}</p>`)
            }
            document.write(`<hr>`)
            document.write(`</div>`)
        }
    }
}

