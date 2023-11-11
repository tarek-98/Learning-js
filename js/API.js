let myJsonObject = '{"username": "Tarek" , "Age": 25}';
console.log(typeof myJsonObject)
console.log(myJsonObject)

//convert json to js
let myJsObject = JSON.parse(myJsonObject)
console.log(typeof myJsObject)
console.log(myJsObject)
//edit
myJsObject["username"] = "Salah"
myJsObject["Age"] = 30

//reconvert js to json
let myJsonObjectToserver = JSON.stringify(myJsObject);
console.log(typeof myJsonObjectToserver)
console.log(myJsonObjectToserver)


//Synchronous  //operation wait the before opre to done 
//Asynchronous // all run in parallel

//call stack  (LIFO) last in first out

//AJAX  Approach to use many tech thoghether [html, css, js, dom]

let req = new XMLHttpRequest();
console.log(req);

//ready state > status of the req
/*
1 req intialized
2 server connection established
3 req received
4 req is finished and responde is ready
*/

//status
/*
200 responde is successful
404 not found
*/

//promise with XHR
let getData = (apiLink) => {
  return new Promise((resolve, reject) => {
    let myRequest = new XMLHttpRequest();
    myRequest.onload = function () {
      if(this.readyState === 4 && this.status === 200)
        {
          resolve(JSON.parse(this.responseText))
        } else
        {
          reject(Error("Api Not Found"))
        }
      };
    myRequest.open("GET",apiLink);
    myRequest.send();
    })
}
getData("http://api.github.com/users/tarek-98/repos")
.then((result) => {
  result.length = 5;   //5 repo only
  return result;
})
.then ((result) => console.log(result[0].name))
.catch ((rej) => console.log(rej));


// same code with fetch api
fetch("http://api.github.com/users/tarek-98/repos").then((result) => 
{
  let data = result.json();
  return data;
  })
  .then((data)=>{
    data.length = 5;
    return data;
  })
  .then((data)=>{
    console.log(data[0].name)
  })


// myRequest.open("GET","http://api.github.com/users/tarek-98/repos");
// myRequest.send();
/*
  let jsData = JSON.parse(this.responseText);
    for(let i=0 ; i<jsData.length ; i++)
    {
      let div = document.createElement("div");
      let divText = document.createTextNode(jsData[i].name);
      div.appendChild(divText);
      document.body.appendChild(div)
    } */


//promise
let myPromise = new Promise ((resolvedFun , rejectedFun) => {
  let friends = ["tarek", "salah", "moahmmed", "ahmed"];
  if (friends.length === 4)
  {
    resolvedFun(friends)
  }
  else
  {
    rejectedFun(Error("number of friends is not 4"))
  }
})
.then
(
  (resolveValue) => {
    resolveValue.length === 2;
    return resolveValue;
})
.then ((resolveValue) => {
  resolveValue.length = 1;
  return resolveValue;
})
.then ((resolveValue) => {
  console.log(`the friend name is ${resolveValue}`) ;
})
.catch((rejectedValu) => console.log(rejectedValu))
.finally(console.log("Done"))

/*
promise.all > return array of promise all resolved if one rejected return rejected only
promise.allsettled > return array of promise all promises and show statu of each one
promise.race > return the first one it meet (res or rej)
 */


function getNewData() {
  return new Promise ((res, rej) =>
  {
    let list =["Tarek"];
    if (list.length > 0)
    {
      res("User Found")
    }
    else
    {
      rej("No User Found")
    }
  })
}
getNewData().then(
  (resolve) => console.log(resolve),
  (reject) => console.log(reject)
  )

function getNewDataTow() {
  let list =["Tarek"];
    if (list.length > 0)
    {
      return Promise.resolve("User Found")
    }
    else
    {
      return Promise.reject("User Found")
    }
}
getNewDataTow().then(
  (resolve) => console.log(resolve),
  (reject) => console.log(reject)
  )


// async > make normal function return promise
async function getNewDataAsy() {
  let list =[];
    if (list.length > 0)
    {
      return "User Found"
    }
    else
    {
      throw new Error("User Not Found")
    }
}
getNewDataAsy().then(
  (resolve) => console.log(resolve),
  (reject) => console.log(reject)
  )

// await work in async function, make js wait promis result, more easy for promise

// let myNewPromise = new Promise((res, rej) => {
//   setTimeout(()=>{
//     res('Hello World')
//     // rej('No Hello World')
//   },3000);
// })

// async function readData() {
//   console.log("Before Promise")
//   console.log(await myNewPromise)
//   // console.log(await myNewPromise.catch((rejected) => rejected))
//   console.log("After Promise") // wiat the top promise to done and work
// }
// readData();


// try catch finally
async function readFetch() {
  console.log("Before Fetch")
  try
  {
    let myData = await fetch("http://api.github.com/users/tarek-98/repos");
    console.log(await myData.json())
  }
  catch(err){
    console.log(`error ${err}`)
  }
  finally
  {
    console.log("After Fetch") 
  }
}
readFetch();