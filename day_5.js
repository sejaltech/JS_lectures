let nums = [1, 2, 3, 4, 5]
// nums.reduce = nums.reduce((acc, cv)=> acc +cv);
// // console.log(typeof nums.reduce);

console.log(nums.map((num)=> num + 2));


// let result = 0;
// // reduce
// for (i=0; i < nums.length; i++) {
//     result += nums[i];
// }

// //map
// let newarray = [];
// for (i=0; i < nums.length; i++) {
//     newarray.push(nums[i] + 2);
// }

// console.log(result, newarray);



// function myFilter(array, callback){
//     let new_array =[];
// //apply callback 
// for (i = 0; i < array.length; i ++){
//     let mapped = callback(array[i], i, array);
//     new_array.push(mapped)
// }
//     return new_array;
// }
// console.log(myMap(nums, (num) => num + 2))

// let arr = [ 10, null, undefined, 9]
// for (i = 0; i <arr.length; i ++){
//     if(typeof arr[i] === typeof[0]){
//         console.log(arr[i])
//     }
// }
// console.log(arr.filter((valueAtIndex) =>typeof arr[valueAtIndex] === typeof 0))


function myFilter(array, callback){
    let new_array = [];
    for (i=0; i < array.length; i++){
     if (callback(array[i], i, array)){
        new_array.push(array[i])
     }
    }
    return new_array;
}   
const arr = [10, null, undefined, 9];
console.log(myFilter(arr, (valueAtIndex) => typeof valueAtIndex === typeof 0));
