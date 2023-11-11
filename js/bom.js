// alert("Tarek Salah")

// let text = document.getElementById("bom")
// text.style.display = "none"

// setTimeout(function(){
//     text.style.display = "block"
// },3000)

let div = document.getElementById("bom")
function countdoown (){
    div.innerHTML -= 1 ;
    if(div.innerHTML === "0"){
        clearInterval(counting);
        div.innerHTML = "Welcom"
    }
}
let counting = setInterval(countdoown , 1000)

// setTimeout(function(){
//     window.open("https://google.com","_blank","width=500 , height=500")
// },10000)

/*localstorage*/
// window.localStorage.setItem("color","#F00")

//practice

let list = document.querySelectorAll("ul li")
let exp = document.querySelector(".experiment")

list.forEach((li)=>{
    li.addEventListener("click", (e)=>
    {
        list.forEach(li => {
            li.classList.remove("active")
        })

        e.currentTarget.classList.add("active")
        window.localStorage.setItem("color", e.currentTarget.dataset.color)
        exp.style.backgroundColor = e.currentTarget.dataset.color
    })
})

if(window.localStorage.getItem("color"))
{
    exp.style.backgroundColor = window.localStorage.getItem("color");

    list.forEach(li => {
        li.classList.remove("active")
    })

    document.querySelector(`[data-color = "${window.localStorage.getItem("color")}"]`).classList.add("active")

}