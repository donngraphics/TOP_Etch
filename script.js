const container = document.getElementById("container");
const background = document.getElementById("body");
const newGrid = document.getElementsByClassName("divStyle")[0];
const btn = document.getElementById("gridButton");
const deleteBtn = document.getElementById("deleteButton");
const resetBtn = document.getElementById("resetButton");


function gridLoop(gridSize = 16) {

    let divGrid = document.querySelectorAll(".divStyle");
    console.log(divGrid);
    divGrid.forEach((divGrids) => {
        divGrids.remove();
    });

    let calcSize = 100 / gridSize;



    for (i = 0; i < 256; i++) {

        const divGrid = document.createElement("div");
        divGrid.setAttribute("class", "divStyle");
        divGrid.style["flex"] = "1 1 calc(" + calcSize + "% - 5px)";
        container.appendChild(divGrid);

        divGrid.addEventListener("mouseover", () => {
            divGrid.style["background-color"] = "#ffdfbf";
        });

    }

}

gridLoop();

resetBtn.addEventListener("click", () => {
    let divGrid = document.querySelectorAll(".divStyle");
    console.log(divGrid);
    divGrid.forEach((divGrids) => {
        divGrids.remove();
    });

    for (i = 0; i < 256; i++) {


        const divGrid = document.createElement("div");
        divGrid.setAttribute("class", "divStyle");
        divGrid.style["flex"] = "1 1 calc(6.25% - 5px)";
        container.appendChild(divGrid);

        divGrid.addEventListener("mouseover", () => {
            divGrid.style["background-color"] = "#ffdfbf";
        });

    }


});


deleteBtn.addEventListener("click", () => {
    let divGrid = document.querySelectorAll(".divStyle");
    console.log(divGrid);
    divGrid.forEach((divGrids) => {
        divGrids.remove();
    });

    //document.body.style.backgroundColor = "red";

});




btn.addEventListener("click", () => {

    let gridPrompt = prompt("Grid size? e.g. 16 (16 pixels x16 pixels)", "");

    if (gridPrompt > 100) {
        alert("Sorry, no more than 100 pixels!");

    } else if (isNaN(gridPrompt)) {
        alert("Input must be a number (e.g. 48)");

    } else {
        gridLoop(gridPrompt);
    }

});






