let gridSize=16;
let changeSizeButton=document.querySelector("button");
let gridContainer=document.querySelector(".container");
function generateUnitSize (gridSize) {
    return 960/gridSize;
}
function generateGrid (gridSize) {
    let htmlString="";
    for (let i=1;i<=(gridSize**2);i++){
        htmlString+="<div class='grid-unit' style=''></div>";
    }
    gridContainer.innerHTML=htmlString;
    let units=gridContainer.childNodes;
    for (let unit of units){
        unit.style.border="1px solid red";
        unit.style.height=`${generateUnitSize(gridSize)}px`;
        unit.style.width=`${generateUnitSize(gridSize)}px`;
    }
}
function getUserInput() {
    return prompt("enter the grid size you want","16");
}
generateGrid(gridSize);
changeSizeButton.addEventListener("click",() => {
    let userInput =Number(getUserInput());
    if(typeof userInput==="number"){
        generateGrid(userInput);
    }
    else{
        return;
    }
});


