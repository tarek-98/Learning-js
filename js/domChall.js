//header
let header = document.createElement("header")
header.className = "website-head"
header.style.display = "flex"
header.style.justifyContent = "space-between"

let logo = document.createElement("div")
logo.className = "logo"
let logoText = document.createTextNode("El Tarek")
logo.style.paddingTop = "15px"
logo.style.color = "green"
logo.style.fontWeight = "bold"
logo.appendChild(logoText)

let list = document.createElement("ul")
list.className = "list"

let listItem1 = document.createElement("li")
let itemText1 = document.createTextNode("Home")
listItem1.appendChild(itemText1)
let listItem2 = document.createElement("li")
let itemText2 = document.createTextNode("About")
listItem2.appendChild(itemText2)
let listItem3 = document.createElement("li")
let itemText3 = document.createTextNode("Services")
listItem3.appendChild(itemText3)
let listItem4 = document.createElement("li")
let itemText4 = document.createTextNode("Contact")
listItem4.appendChild(itemText4)
list.appendChild(listItem1)
list.appendChild(listItem2)
list.appendChild(listItem3)
list.appendChild(listItem4)
list.style.display = "flex"
listItem1.style.listStyle = "none"
listItem1.style.marginLeft = "10px"
listItem2.style.listStyle = "none"
listItem2.style.marginLeft = "10px"
listItem3.style.listStyle = "none"
listItem3.style.marginLeft = "10px"
listItem4.style.listStyle = "none"
listItem4.style.marginLeft = "10px"

header.appendChild(logo)
header.appendChild(list)
document.body.appendChild(header)

//content
let content = document.createElement("div")
content.className = "content"
content.style.backgroundColor = "#7777"
content.style.display = "grid"
content.style.gridTemplateColumns = "auto auto auto"
content.style.justifyItems = "center"
content.style.alignItems = "center"
for ( let i=1 ; i<=15 ; i++)
{
    let product = document.createElement("div")
    product.className = "product"
    product.style.backgroundColor = "white"
    product.style.width = "96%"
    product.style.height = "90%"
    product.style.textAlign = "center"
    let head = document.createElement("h2")
    let headText = document.createTextNode(i)
    head.appendChild(headText)
    let para = document.createElement("p")
    let paraText = document.createTextNode("Product")
    para.appendChild(paraText)

    product.appendChild(head)
    product.appendChild(para)
    content.appendChild(product)
    document.body.appendChild(content)
}

//footer
let footer = document.createElement("footer")
let footerText = document.createTextNode("Copyright 2023")
footer.appendChild(footerText)
footer.style.backgroundColor = "green"
footer.style.padding = "20px"
footer.style.color = "white"
footer.style.textAlign = "center"
document.body.appendChild(footer)

document.body.style.marginLeft = "50px"
document.body.style.marginRight = "50px"