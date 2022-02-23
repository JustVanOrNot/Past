let dynamic = document.querySelector("dynamic_block");
let container = document.querySelector(".container");
let inpW =document.querySelector("#width");
let npH =document.querySelector("#height");

let color = document.querySelector("#color");
let click = 0;
let created  = false;



    

let step=10;
let curr = 0;
let currTop=0;
let currentW=40;
let currentH=40;

function moveR(){
    if(created == true){
        if(~~document.querySelector(".dynamic_block").style.marginLeft.slice(0,-2)+ ~~document.querySelector(".dynamic_block").style.width.slice(0,-2) >= 800-~~document.querySelector(".dynamic_block").style.width.slice(0,-2)) {
            
        }
        else{
            curr+=step;
            document.querySelector(".dynamic_block").style.marginLeft = curr+"px"
          
        }
    }
    
}
function moveL(){
    if(created == true){
        if(document.querySelector(".dynamic_block").style.marginLeft <= 0+"px") {
     
    }
    else{
      
        curr-=step;
        document.querySelector(".dynamic_block").style.marginLeft = curr+"px"
    }
    }
    
}
function moveT(){
    if(created == true){}
    if(document.querySelector(".dynamic_block").style.marginTop <= 0+"px") {
    
    }
    else{
        
        currTop-=step;
        document.querySelector(".dynamic_block").style.marginTop = currTop+"px"
    }
    
}
function moveB(){
    if(created == true){

       if(~~document.querySelector(".dynamic_block").style.marginTop.slice(0,-2)+~~document.querySelector(".dynamic_block").style.height.slice(0,-2)== 400) {
        
    }
    else{
       
        currTop=currTop+step;
        document.querySelector(".dynamic_block").style.marginTop = currTop+"px"
    }  
    }
   

}
function create(){
    currentW = ~~(document.querySelector("#width").value.toString().slice(0,-2));
    currentH = ~~(document.querySelector("#height").value.toString().slice(0,-2));
    if(currentH<=0||currentW<=0||currentH>=400||currentW>=800){
        console.log("no"+"err")
        console.log("error");
    }
    else{
        div = document.createElement("div");
    div.classList.add("dynamic_block");
    div.style.width = currentW+"px";
    div.style.height = currentH+"px";
    container.append(div);
    
    Enter = document.querySelector("#Enter");
    Enter.remove();
    created = true;
    }
    
}











  
    
    

function Del(){
    let b =  document.querySelector(".dynamic_block");
    b.remove();
    enter = document.createElement("input");
    enter.setAttribute("type", "button");
    enter.id = "Enter";
    enter.setAttribute("onclick", "create()")
    enter.setAttribute("value", "Enter")
    
    document.querySelector(".second").append(enter);
    enter.style.marginTop = "5px";
    document.querySelector("#height").value = " ";
    document.querySelector("#width").value = " ";
}
function Col(){
    click++;
    if(click==1){
        color.style.backgroundColor = "green";
        document.querySelector(".dynamic_block").style.backgroundColor = "green";
    }
    if(click==2){
        color.style.backgroundColor = "blue";
        document.querySelector(".dynamic_block").style.backgroundColor = "blue";
    }
    if(click==3){
        color.style.backgroundColor = "red";
        document.querySelector(".dynamic_block").style.backgroundColor = "red";
    }
    if(click==4){
        color.style.backgroundColor = "indigo";
        document.querySelector(".dynamic_block").style.backgroundColor = "indigo";
    }
    if(click>4){
        click=0;
    }
}