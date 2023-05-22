function sumOfDigits(number){
    let sum = 0
    number_string = number.toString()
    for(let i = 0; i < number_string.length; i++ ){
        sum += Number(number_string[i])
    }

    if(sum > 9){
        return sumOfDigits(sum)
    }
     
    return sum


}
const result = sumOfDigits(123456)
console.log("result is : ",result);


// "1234"
// 10
// 1