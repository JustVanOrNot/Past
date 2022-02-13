current = document.querySelector(".current");
btn = document.querySelector("#btn");
out =  document.querySelector(".out");
ol = document.createElement("ol");

i = 1;
function mainCLick(){
    out.append(ol);
    text=current.value;
    li = document.createElement('li');
    li.classList.add("recent");
    li.innerHTML = text;
    li.id="li"+i;
    ol.append(li);
    i++;
    current.value = " "
   
}
