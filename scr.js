let  dynamic = document.querySelector(".dynamic_block");
let container = document.querySelector(".container");
let inpW =document.querySelector("#width");
let npH =document.querySelector("#height");

let color = document.querySelector("#color");
let click = 0;


container.style.width= "800px";
dynamic.style.width="40px";
dynamic.style.height="40px";
    

let step=10;
let curr = 0;
let currTop=0;
let currentW=40;
let currentH=40;

function moveR(){
    if(dynamic.style.marginLeft == 800-currentW+"px") {
       
    }
    else{
        
        curr+=step;
        dynamic.style.marginLeft = curr+"px"
    }
}
function moveL(){
    if(dynamic.style.marginLeft <= 0+"px") {
     
    }
    else{
      
        curr-=step;
        dynamic.style.marginLeft = curr+"px"
    }
}
function moveT(){
    if(dynamic.style.marginTop <= 0+"px") {
    
    }
    else{
        
        currTop-=step;
        dynamic.style.marginTop = currTop+"px"
    }
}
function moveB(){
    if(dynamic.style.marginTop == 400-currentH+"px") {
        
    }
    else{
       
        currTop=currTop+step;
        dynamic.style.marginTop = currTop+"px"
    }

}










function setWidth(){
    
    
        let promptW = document.querySelector("#width").value;
        let attempt = ~~promptW;
        let promptH=document.querySelector("#height").value;
        let attempt1= ~~promptH;
        currentH= promptH;
        currentW=promptW;
        if(attempt1<=0||currentH + ~~(dynamic.style.marginTop.slice(0,-2).trim())>=400){
            console.warn("дурак?")
            Del()
        }
        else{
          dynamic.style.height=promptH+"px";  
        }
        if((attempt<=0)||currentH+ ~~(dynamic.style.marginLeft.slice(0,-2).trim())>=800){
            console.warn("дурак?")
            Del()
        }
        else{
            
            dynamic.style.width=promptW+"px";
            
        }
    }
  
    
    

function Del(){
    document.querySelector("#height").value = " ";
    document.querySelector("#width").value = " ";
}
function Col(){
    click++;
    if(click==1){
        color.style.backgroundColor = "green";
        dynamic.style.backgroundColor = "green";
    }
    if(click==2){
        color.style.backgroundColor = "blue";
        dynamic.style.backgroundColor = "blue";
    }
    if(click==3){
        color.style.backgroundColor = "red";
        dynamic.style.backgroundColor = "red";
    }
    if(click==4){
        color.style.backgroundColor = "indigo";
        dynamic.style.backgroundColor = "indigo";
    }
    if(click>4){
        click=0;
    }
}