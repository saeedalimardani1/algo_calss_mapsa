

//0, 1, 1, 2, 3, 5, 8, ...
function fibbo(n){
    if(n <= 2){
        return 1
    }
    return fibbo(n - 1) + fibbo(n - 2)
}


function fibbo_dynamic(n){
    let list = [0, 1, 1]
    for(let i = 2; i < n; i++){
        list.push(list[i] + list[i - 1])
    }
}