// loops conditions
let var_name = "random values";

for (let i = 0; i < var_name.length; i++) {
    console.log(`${i} - ${var_name[i]}`);
    console.log(i + " - " + var_name[i]);
}


// for loop – characters with space
let var_name2 = "random values ";
let result1 = "";

for (let i = 0; i < var_name2.length; i++) {
    result1 += var_name2[i] + " ";
}
console.log(result1);


let result2 = "";

for (let i = 1; i < 6; i++) {
    if (i == 2) continue;
    result2 += i + " ";
}
console.log(result2);


// while loop
let i = 1;
let result3 = "";

while (i <= 5) {
    result3 += i;
    i++;
}
console.log(result3);


i = 1;

do {
    console.log(i);
    i++;
} while (i <= 5);
