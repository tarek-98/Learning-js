let mynum = [1, 1, 1, 2, 3, "T"]

let myUniqeData = new Set (mynum)

console.log(mynum)
console.log(myUniqeData)
console.log(myUniqeData.has("t".toUpperCase()))


let myobject = {}
console.log(myobject)

let myMap = new Map ([
    [10, "number"],
    ["10", "string"],
    [false, "boolean"]
]);

// myMap.set(10, "number")
// myMap.set("10", "string")

console.log(myMap)
console.log(myMap.size)
console.log(myMap.get(10))
console.log(myMap.get("10"))
console.log(myMap.get(false))

console.log(myMap.delete("10"))
console.log(myMap)

myMap.clear()
console.log(myMap.size)

/*array methoed*/

console.log(Array.from("tarek"))
console.log(Array.from("12345", (n) => +n + +n )
)

console.log(Array.from(myUniqeData))
console.log([...new Set(mynum)])

function arrfrom ()
{
    return Array.from(arguments)
}
console.log(arrfrom("tarek","salah",22))


//arrayWithin

let myarray = [10 ,20 ,30, 40, 50, "A", "B"]

// myarray.copyWithin(1,-2)
myarray.copyWithin(1,-2,-1)
console.log(myarray)

/*array.some == any item*/
let check = myarray.some((e) => e > 40)
console.log(check)

function checkValues (arre, val)
{
    return arre.some(function(e){
        return e === val
    })
}
console.log(checkValues(myarray, 30))
console.log(checkValues(myarray, 70))

/*array.every == all items*/

let checkevery = myarray.every((e) => e > 40)
console.log(checkevery)
//
let locations = {
    10 : "place 1",
    20 : "place 2",
    30 : "place 3",
    40 : "place 4"
}
let minLocation = 15;

let locationsArray = Object.keys(locations);
console.log(locationsArray)

let locationsArryNum = locationsArray.map((n) => +n)
console.log(locationsArryNum)

let checkNumLocation = myarray.some((e) => e > this, minLocation)
console.log(checkNumLocation)

// challenge 
let n1 = [10, 30, 10, 20]
let n2 = [30, 20, 10]

let n3 = [...n1 , ...n2] // n3.lenght = 7
console.log(Math.max(...n1) * n3.length)   //210
//another sol
console.log(Math.max(...n1) * [...n1 , ...n2].length)   //210