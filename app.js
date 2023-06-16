// Question 1
let name = "Praabindh";
let res = name.split("").reverse().join("");
console.log(res);

// Question 2
// Combination Of A = "abc"

var a = "abc";
let resu = [];
a.split("").forEach((item, index) => {
    for (let i = 0; i < a.length; i++) {
        if(a[i] !== item)
            resu.push(item + a[i]);
    }
});

console.log(resu);

// console.log(a.split("").reverse().join(""));

// Question 3
let collection = [1, 2, 3, 4, 5];
let b = collection.reduce((acc, item) => {
    return acc + item;
});

console.log(b);

// Question 4

let str = "Hello Praabindh";
let array = str.split("");
let result = array.reduce((acc, item) => {
    if((item.trim()))
        if(acc[item])
            acc[item] += 1;
        else
            acc[item] = 1;
        return acc;
}, {});

console.log(result);