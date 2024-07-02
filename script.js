let gridSize=16;
let gridColorChangeTo="blue"
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
        if(userInput<=100){
            gridSize=userInput;
            generateGrid(gridSize);
        }
        else{
            generateGrid(gridSize);
            alert("enter a number and it should be less than or equal to 100");
        }
    }
    else{
        generateGrid(gridSize);
        alert("enter a number and it should be less than or equal to 100");
    }
    gridUnitsNodeList=document.querySelectorAll(".grid-unit");
    applyEventListener();
});
let gridUnitsNodeList=document.querySelectorAll(".grid-unit");
function changeBackgroundColor(event){
    event.target.style.backgroundColor=`rgb(0,0,255)`;
}
function changeBackgroundColorToNormal (event){
    event.target.style["background-color"]="white";
}
function applyEventListener () {
    gridUnitsNodeList.forEach((unit)=> {
        unit.addEventListener("mouseover",changeBackgroundColor);
        unit.addEventListener("mouseleave",changeBackgroundColorToNormal);
    });
}
applyEventListener();


