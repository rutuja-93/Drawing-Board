const child=document.querySelectorAll(".child");
const colorInput=document.getElementById("userInput");
 let color="red";
 let isMouseClicked=false;




for(let i=0;i<child.length;i++){
    child[i].addEventListener("mouseover", changeBg)
}



function changeBg(event){

    if(isMouseClicked){
    event.target.style.backgroundColor=color;
    }
}

function eraser(){
color= "white";
}
function chnageColor(){
    
    color=colorInput.value;
}
colorInput.addEventListener("change", chnageColor);