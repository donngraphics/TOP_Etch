const container = document.getElementById("container");
const background = document.getElementById("body");

// background.style["background-color"] = "red";
//const divTest = document.createElement("div");
//divTest.setAttribute("class", "divStyle");

//container.appendChild(divTest);


for (i = 0; i < 256; i++) {
    const divGrid = document.createElement("div");
    divGrid.setAttribute("class", "divStyle");
    container.appendChild(divGrid);

    divGrid.addEventListener("mouseover", () => {
        // divGrid.setAttribute("class", "hoverOver");
        divGrid.style["background-color"] = "#ffdfbf";
    });


}




