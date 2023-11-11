let text = document.querySelector(`[name = "text"]`)
let add = document.querySelector(`[name = "add"]`)
let task = document.querySelector(".tasks")

function create ()
{
    let newDiv = document.createElement("div")
        //div style
        newDiv.style.backgroundColor = "white"
        newDiv.style.padding = "5px"
        newDiv.style.marginBottom = "10px"
        newDiv.style.display = "flex"
        newDiv.style.justifyContent = "space-between"
        //create div content
        let para = document.createElement("p")
        let pText = document.createTextNode(text.value)
        //add elements
        para.appendChild(pText)
        newDiv.appendChild(para)
        task.appendChild(newDiv)

        //delete
        let del = document.createElement("input")
        //del style
        del.type = "submit"
        del.value = "Delete"
        del.style.backgroundColor = "red"
        del.style.color = "white"
        del.style.border = "none"
        newDiv.appendChild(del)
        del.addEventListener("click" , (e)=>
        {
            newDiv.remove();
            window.localStorage.removeItem("div")
        })

        //localStorage
        window.localStorage.setItem("div" , newDiv)
        if(window.localStorage.getItem("div"))
        {
            task.appendChild(newDiv)
        }
}
add.addEventListener("click", (e)=>
{
    if(text.value !== "")
    {
        create();
    }
})