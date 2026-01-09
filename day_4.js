let numbers_even = [1, 2, 3, 4, 5, 6];
let numbers_odd = [ 1, 2, 3, 4, 5];
console.log(numbers_even); // print entire array
// numbers.length > 5 -1
console.log(numbers_even[0]);   // print first element of the array
console.log(numbers_even[numbers_even.length - 1]); // print last element of 

console.log("odd: ", numbers_odd[(numbers_odd.length - 1) / 2]); // middle--> if odd
console.log("even: ", numbers_even[(numbers_even.length) / 2]); // middle --> if even 



let mixedDataTypes = [1, 2, true, false, "Js", null];
let itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];
let lastElement = itCompanies.pop();
let result = itCompanies.join(", ");
console.log(result);
let arrayWithoutLastElement = itCompanies;
console.log(arrayWithoutLastElement);
arrayWithoutLastElement + "and"
for (let i = 0; i < itCompanies.length; i++) {
  console.log(itCompanies[i]);
}
itCompanies.forEach(company => {
  console.log(company.toUpperCase());
}); 
let sentence = itCompanies.join(", ") + " are big IT companies.";

console.log(sentence);
let companyToCheck = 'instagram';

if (itCompanies.includes(companyToCheck)) {
  console.log(companyToCheck);
} else {
  console.log('Company is not found');
}
for (let company of itCompanies) {
  let count = 0;
  for (let char of company.toLowerCase()) {
    if (char == 'o') count++;
  }
  if (count > 1) {
    console.log(company);
  }
}
itCompanies.sort();
console.log(itCompanies);

itCompanies.reverse();
console.log(itCompanies);

const firstThree = itCompanies.slice(0, 3);
console.log(firstThree);

const lastThree = itCompanies.slice(-3);
console.log(lastThree);

const middleIndex = Math.floor(itCompanies.length / 2);
console.log(itCompanies[middleIndex]);

const removefirst = itCompanies.slice();
console.log(removefirst);
