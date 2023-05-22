// recursive

// function fac_rec(n){

//     if(n === 0){
//         return 1
//     }

//     return n * fac_rec(n -1)
// }

// console.log(fac_rec(100))

// dynamic

function fac_dynamic(n){

    let result = 1
    for(let i = 2 ; i <= n; i++){
        result = result * i
    }
console.log("result is :",result);

}
fac_dynamic(100)



// 2 6

// 3 * 2 * 1 * 1 