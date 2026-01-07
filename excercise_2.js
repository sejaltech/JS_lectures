let challenge = "50 days of javascript";
console.log(challenge);
console.log(challenge.length); // length ko refer kiya hai
console.log(challenge.toUpperCase()); // upper case ko call kiya hai jab () hai to call krte hai 
console.log(challenge.toLowerCase());
console.log(challenge.substring(0, 2));
console.log(challenge.substring(3));
console.log(challenge.includes("Script"));
console.log(challenge.split(""));
console.log(challenge.split(" "))

let social = "Facebook, Google, Microsoft, apple, IBM, Oracle, Amazon";
console.log(social.split(", "));
console.log(challenge.replace("javascript", "Python"));
console.log(challenge.charAt(15));
console.log(challenge.charCodeAt("j"))
console.log(challenge.lastIndexOf("a"))

let sentence = "You cannot end a sentence with because because because is a conjunction";
console.log(sentence.indexOf("because"));
console.log(sentence.lastIndexOf("because"));
console.log(sentence.search("because"));

console.log(challenge.indexOf("a"))
console.log(challenge.trim())
console.log(challenge.startsWith())
console.log(challenge.endsWith())
console.log(challenge.match("a"))