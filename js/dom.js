let mydiv = document.getElementById("my-div");
console.log(mydiv);

let tagname = document.getElementsByTagName("p")
console.log(tagname[0]);

let classname = document.getElementsByClassName("tarek")
console.log(classname);
//
let myElement = document.querySelector(".get");
console.log(myElement.innerHTML);
console.log(myElement.textContent);

myElement.textContent = "Hello from <span>js</span>"
myElement.innerHTML = "Hello from <span>js</span>"

document.images[0].id="Pic"
document.images[0].className="img"
document.images[0].title="Pic"


let myLink = document.querySelector(".link");
console.log(myLink.getAttribute("href"));
//change from google to twitter
myLink.setAttribute("href","http://twitter.com");
myLink.textContent="Twitter";
console.log(myLink.getAttribute("href"));

console.log(document.getElementsByTagName("p")[2].attributes)

let myPa = document.getElementsByTagName("p")[2];
if(myPa.hasAttribute("data-src" === "")){
    console.log("true")
}else
{
    myPa.removeAttribute("data-src")
}

//create elements

let myNewdiv = document.createElement("div");
let myAttr = document.createAttribute("data-custom");
let myText = document.createTextNode("Tarek Salah Mohammed");
let myComment = document.createComment("This is Div");

myNewdiv.className = "js";
myNewdiv.setAttribute("data-test","testing");
myNewdiv.setAttributeNode(myAttr);

//append coment to element
myNewdiv.appendChild(myComment)

//append text to element
myNewdiv.appendChild(myText)

//append element to body
document.body.appendChild(myNewdiv);

//events
let myBtn = document.getElementById("btn");
myBtn.onclick = function(){
    console.log("Clicked")
}
// window.onscroll = function(){
//     console.log("Scroll");
//     for(i=0 ; i<=1 ; i++)
//     {
//         let myH=document.createElement("h1");
//         let myT = document.createTextNode("tarek");
//         myH.appendChild(myT);
//         document.body.appendChild(myH)
//     }
// }

/*validation*/
let userInput = document.querySelector("[name=username]");
let ageInput = document.querySelector("[name=age]");

document.forms[0].onsubmit = function (e) {
    let userValid = false;
    let ageValid = false;

    if(userInput.value !== "" && userInput.value.length <= 10 ){
        userValid = true
    }
    
    if(ageInput.value !== ""){
        ageValid = true
    }

    if(userValid === false || ageValid === false){
        e.preventDefault();
    }
}

/*class list*/
let one = document.getElementById("clist");
// one.onclick = function()
// {
//     console.log(one.classList);
//     console.log(one.classList.contains("one"));
//     console.log(one.classList.item("3"));
//     one.classList.toggle("show");
// }
/*css style*/
mydiv.style.color = "red";
mydiv.style.cssText = "color: green; font-weight: bold";

document.styleSheets[1].cssRules[0].style.setProperty("background-color","white")
/*before after apend prepend  remove */
mydiv.after("tarek added with js (after)")
// mydiv.remove();

/*addEvetListener*/
function fone() {
    console.log("Messege from js 1")
}
function ftwo() {
    console.log("Messege from js 2")
}

one.addEventListener("click", function(){
    console.log("Messege from js eventListiner")
})
one.addEventListener("click", fone)
one.addEventListener("click", ftwo)

one.addEventListener("click", function(){
    let newP = one.cloneNode(true);
    newP.className = "clone";
    document.body.appendChild(newP);
})
document.addEventListener("click", function(e){
    if(e.target.className === "clone")
    {
        console.log("I am cloned")
    }
})
//style addevent
let box = document.querySelector(".st"),
    input = document.querySelector(".in");

    input.addEventListener("input", () =>
    {
        box.style.borderRadius = input.value;
        box.style.background = input.value;
    })

//show password
let inp = document.querySelector(".pass")
let show = document.querySelector(".sh")
show.style.cursor= "pointer";
show.style.width= "40px";
show.style.display= "inline";
let showN = document.querySelector(".pa")

show.onclick = function() {
    let textpas = document.createTextNode(inp.value);
    showN.appendChild(textpas)
}