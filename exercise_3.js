let numbers = [10, 20, 30, 40, 50, 60, 70];
console.log(numbers.length);
console.log(numbers[0]);
let middleIndex = Math.floor(numbers.length / 2);
console.log(numbers[middleIndex]);
console.log(numbers[numbers.length - 1]);

let mix = [1, "Hello", true, null, 3.14, undefined, { name: "JS" }];
console.log(mix.length);
let itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];
console.log(itCompanies.length);
console.log(itCompanies[0]);
let middleIndexx = Math.floor(itCompanies.length / 2);
console.log(itCompanies[middleIndex]); 
for (let i = 0; i < itCompanies.length; i++) {
  console.log(itCompanies[i]);
}
itCompanies.forEach(company => {
  console.log(company.toUpperCase());
}); 
