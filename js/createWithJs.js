for(i=1 ; i<51 ; i++ )
{
    let myDiv = document.createElement("div");
    myDiv.className = "product"

    let myHead = document.createElement("h2");
    let myHText = document.createTextNode(`Products Title ${i}`)
    myHead.appendChild(myHText);

    let myPara = document.createElement("p");
    let myPText = document.createTextNode("Products Description");

    myPara.appendChild(myPText);
    myDiv.appendChild(myHead);
    myDiv.appendChild(myPara);
    document.body.appendChild(myDiv);
}