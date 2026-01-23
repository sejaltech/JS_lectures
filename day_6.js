// let product = {
//     id:1,
//     name:"Samsung Galaxy",
//     price: 80000,
//     availability: "True"
// };

// let now = new Date();
// console.log(now.getDay());

// let currentDate = new Date();
// console.log(currentDate);


// //Create a function `formatDate` that takes a Date object and returns a formatted string in the format 'dd-mm-yyyy'/
// function formatDate(currentDate) {
//     return currentDate.getDate() + "-" + (currentDate.getMonth() + 1) + "-" + currentDate.getFullYear();

// }
// console.log(formatDate(currentDate));
// let currentDate = new Date();
// console.log(currentDate);

// export function formatDate(currentDate) {
//     let month = currentDate.getMonth() + 1;

//     if (month < 10) {
//         month = "0" + String(month);
//     }
//     return currentDate.getDate() + "-" + month + "-" + currentDate.getFullYear();
// }
// console.log(formatDate(currentDate));
 

//dAY 4 CHALLENGE

export default class Singleton {
    message() {
        return "Hello singleton";
    }
}
let obj = new Singleton();
console.log(obj.message());
console.log (Singleton.length);

// export function something(){
//     console.log("something");
// }

