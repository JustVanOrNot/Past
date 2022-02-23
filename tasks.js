let arr = [1,2,3,4,5];
let sum;
for(let i =0; i<arr.length; i++){
    sum+=arr[i];
    console.log(arr[i]);
}
console.log(sum)
console.log("||")
let array = [2,5,9,15,0,4];
for(let i=0; i<=arr.length;i++){
    if(array[i]>3&&array[i]<10) console.log(array[i]);
}
console.log("||")
let user={
    name:"John",
    surname: "Smith",
}

user.name="Pete";
console.log(user)
delete user.name;
console.log(user)
console.log("||")
let salaries = {
    Ann:160,
    John:100,
    Pete:130
}
let sum2=0;
for(let code in salaries){
    cur = ~~salaries[code]
    
    sum2+=cur
}
console.log(sum2)
console.log("||")
let obj = {
    Kolya:200,
    Vasya:300,
    Petya:400,
}
for(key in obj){
    console.log(key + "- salary "+ obj[key] + " $");
}
