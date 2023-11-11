let myString = "my name is Tarek Salah tarek"
let regRe = /(salah|tarek)/ig;
console.log(myString.match(regRe));

let nums = "12345678910";
let numRe = /[4-9]/g;
console.log(nums.match(numRe))

let noNumRe = /[^4-9]/g;
console.log(nums.match(noNumRe))

let practice = "os1 os1os os2 os8 os8os";
let practiceRe = /os[5-9]os/g;
console.log(practice.match(practiceRe))

let dot = /./g;  //         \w \W \d \D \s \S
console.log(practice.match(dot))

let names = "tareksalah mohammedtarek tarektarek"
let nameRe = /(\btarek)/ig
console.log(names.match(nameRe))

let emails = "tarek@gmail.com tata55@yahoo.com a@sa.net tarek.com"
let validEmail = /\w+@\w+.\w+/ig
// let validEmail = /\w+@?\w+.\w+/ig     all email
console.log(emails.match(validEmail))

let series = "S100S S3000S S50000S S950000S"
console.log(series.match(/s\d{3}s/ig)) //number of
console.log(series.match(/s\d{4,5}s/ig)) //range
console.log(series.match(/s\d{4,}s/ig)) // at least number

console.log(/^s/ig.test(series))  // start with , $ end with
console.log(series.match(/s\d{3}(?=s)/ig))  // ?= followed by , ?! not followed by

// form
document.getElementById("register").onsubmit = function () {
    let phoneInput = document.getElementById("phone").value;
    let phoneRe = /\(\d{4}\)\s\d{3}-\d{4}/ig
    if (phoneRe.test(phoneInput) === false) {
        alert("Invalid phone number");
        return false;
    }
    return true;
}

// challenge

let url1 = 'elzero.org';
let url2 = 'http://elzero.org';
let url3 = 'https://elzero.org';
let url4 = 'https://www.elzero.org';
let url5 = 'https://www.elzero.org:8080/articles.php?id=100&cat=topics';

let re = /(https?:)?(\/\/)?(www.)?\w+.\w+(:\d{4}\/\w+.php\?id=100&cat=topics)?/ig;

console.log(url1.match(re));
console.log(url2.match(re));
console.log(url3.match(re));
console.log(url4.match(re));
console.log(url5.match(re));