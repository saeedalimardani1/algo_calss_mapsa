function triangle(a, b, c){
    let is_fisa = (a*a + b*b === c*c) || (c*c + b*b === a*a) || (a*a + c*c === b*b)
    
    if(is_fisa){
        return "Yes"
    }
    return "No"
}

const response = triangle(10,4,5)
console.log("response is: ", response);
