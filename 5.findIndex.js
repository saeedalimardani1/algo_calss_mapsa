let arr = [{name:"saeed",family: "mardani"},{name:"reza",family: "rezaie"},{name:"hasan",family: "hasani"}]
let index = arr.findIndex(item => item.family === "rezaie")
if(index >= 0){
    arr[index].family = "mohammadi"
}
console.log("new arr is: ",arr);


let arr1 = ["saeed","amir"]
console.log(arr1.indexOf("amir"))
