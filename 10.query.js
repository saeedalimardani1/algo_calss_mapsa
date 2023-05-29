let customer = {
    username: "saeed",
    email: "saeed@gmail.com"
}


async function api( input ){
   let query =  customer.aggregate()
    if(input.username){
        query.match()
    }
    if(input.email){

    query.match()
    }
    query.project(

    )
    


    let res = await query

}
