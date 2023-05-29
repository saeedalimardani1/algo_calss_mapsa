let arr1 = [1,2,3,4,5,6]
let arr2 = [5,6,7,8,9]
// [1,2,3,4,7,8,9]

//problem : find unique elements in arr1 that is not in arr2 and elements in arr2 that is not in arr1 
//and return as an array. 
let arr4 = arr1.filter(item => !arr2.includes(item))
let arr5 = arr2.filter(item => !arr1.includes(item))

let arr3 = arr4.concat(arr5)
console.log(arr3);