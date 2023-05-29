// given a number find if it has sum in array with two elements
//5
//[1,2,3,4,5,6], 5      a + b = c     c - a = b passed : { 1: true, 2: true , 13 : true}   

// i =0  , sum = 5 , 5 - 1 = 4 passed : {} , passed: {1 : true}
// i =1 , sum = 5 , 5 - 2 = 3 , passed : { 1 : true} , passed: {1: true , 2 : true}
// i = 2 , sum = 5 , 5 - 3 = 2 , passed: {1: true , 2 : true}



function has_sum(arr, sum){
    let passed = {}
    for(let i = 0; i < arr.length; i++){
        let result = sum - arr[i]
        if(passed[result]){
            return [result , arr[i]]
        }
        passed[arr[i]] = true
    }
    return null
}


