function* generatNumbers(){
    yield 1;
    console.log("Tarek1")
    yield 2;
    console.log("Tarek2")
    yield 3;
    yield 4;
}
let generator = generatNumbers();

console.log(generator)
console.log(generator.next())
console.log(generator.next())
console.log(generator.next())
console.log("#".repeat(40))

//delegate
function* generatNum(){
    yield 1;
    yield 2;
    yield 3;
}
function* generatLetter(){
    yield "A";
    yield "B";
    yield "C";
}
function* generateAll(){
    yield* generatNum();
    yield* generatLetter();
    yield* [4, 5, 6]
}
let gener = generateAll();
console.log(gener.next())
console.log(gener.next())
console.log(gener.next())
console.log(gener.next())
console.log(gener.next())
console.log(gener.next())
console.log(gener.next())
console.log(gener.next())
console.log(gener.next())
console.log(gener.next())