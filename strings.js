// last four characters of the string
let a="extravaganza"
console.log({characters:a[8]});
console.log({characters:a[9]});
console.log({characters:a[10]});
console.log({characters:a[11]});

// Insert string at the fourth index

 const food="The quick fox jumps over the lazy dog";
 let foodnew="The \"eat\"quick fox jumps over the lazy dog ";
 console.log({foodnew});


// counting how many times the strings appear
 const story="The quick brown fox over the lazy dog";
console.log((story.match(/the/g)).length);
console.log((story.match(/brown/g)).length);

// // finding words from a string
let string2="The pupils are reading in the libary"
let substring2="the"
console.log(string2.includes(substring2))
let string3="The child was sitting on the table before it fell"
let substring3="sitting"
console.log(string3.includes(substring3))


// converting strings into a specified format
let txt1="wonderful"
const upper=txt1.toUpperCase();
console.log({upper})
let txt2="amazing"
const lower=txt2.toLowerCase();
console.log({lower})
let txt3="UndERneath"
const lower2=txt3.toLowerCase();
console.log({lower2})
let txt4="A wonderful world"
function titlecase(str){
    return str.toLowerCase().replace(/\b\w/g, s=>s.toUpperCase());
}
console.log(titlecase(`A wonderful world`))






