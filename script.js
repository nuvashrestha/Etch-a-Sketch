let container = document.querySelector('#grid-container');

let buttonNumOfSquares = document.querySelector("#button-numOfSquares");
let buttonClearGrid = document.querySelector("#button-clearGrid");

let buttonRainbowColor = document.querySelector("#button-rainbowColor");
let buttonRedColor = document.querySelector("#button-redColor");
let buttonBlackColor = document.querySelector("#button-blackColor");

function createGrid(numSquares) {
    container.innerHTML = ""; // clear existing grid

    for (let i = 0; i < (numSquares * numSquares); i++) {
        let squareDiv = document.createElement('div');
        let squareSize = 480 / numSquares;

        squareDiv.classList.add('square');

        squareDiv.style.width = `${squareSize}px`;
        squareDiv.style.height = `${squareSize}px`;

        squareDiv.addEventListener("mouseover", () => {
            squareDiv.style.backgroundColor = "red";
        });

        buttonRainbowColor.addEventListener("click", () => {
            squareDiv.addEventListener("mouseover", () => {
                squareDiv.style.backgroundColor = randomColor();
            });
        });

        buttonRedColor.addEventListener("click", () => {
            squareDiv.addEventListener("mouseover", () => {
                squareDiv.style.backgroundColor = "red";
            });
        });

        buttonBlackColor.addEventListener("click", () => {
            squareDiv.addEventListener("mouseover", () => {
                squareDiv.style.backgroundColor = "black";
            });
        });

        buttonClearGrid.addEventListener("click", () => {
            squareDiv.style.backgroundColor = "white";
        });

        container.appendChild(squareDiv);
    }
}

buttonNumOfSquares.addEventListener("click", () => {
    let userInput = prompt("Enter number of squares per side (max 100):");

    userInput = parseInt(userInput);

    if (userInput > 100 || userInput < 1 || isNaN(userInput)) {
        return;
    }
    createGrid(userInput);
});


function randomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}
createGrid(16);