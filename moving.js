dynamic = document.querySelector(".dynamic_block");
container = document.querySelector(".container");

step=20;
curr = 0;
currTop=0;
function moveR(){
    if (dynamic.style.marginLeft != "420px" ) {
        curr+=step
        dynamic.style.marginLeft =  curr+"px";
        
    } else {
        
    }
}
function moveL(){
    if (dynamic.style.marginLeft != "0px") {
        curr-=step
        dynamic.style.marginLeft =  curr+"px";
    } else {
        
    } 
}
function moveT(){
    if(dynamic.style.marginTop != "0px"){
        currTop-=step
        dynamic.style.marginTop =  currTop+"px"
    }
 
    else{

    }
}
function moveB(){
    if(dynamic.style.marginTop != "420px"){
        currTop+=step
        dynamic.style.marginTop =  currTop+"px"
    }
    else{
        
    }
}