const child=document.querySelectorAll(".child");
const colorInput=document.getElementById("user-input");
 let color="red";
 let isMouseClicked=false;

document.addEventListener("mousedown", toggleMouseClickedToTrue)
document.addEventListener("mouseup", toggleMouseClickedToFalse)

function toggleMouseClickedToTrue(){
    isMouseClicked=true;
    
}

function toggleMouseClickedToFalse(){
    isMouseClicked=false;
}

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
function chageColor(){
    
    color=colorInput.value;
}
colorInput.addEventListener("change", chageColor);

function downloadImage() {
    const board = document.querySelector('.draw-board');
    html2canvas(board).then(canvas => {
        const link = document.createElement('a');
        link.download = 'drawing.png';
        link.href = canvas.toDataURL();
        link.click();
    });
}