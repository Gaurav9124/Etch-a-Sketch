const screenSize = 700;
const Grid = document.getElementById("container");
const dimensionBar = document.getElementById("Dimension-bar");
const resolution = document.getElementById("resolution");
const mainScreen = document.querySelector(".main");
const reset = document.getElementById("reset");
const gridVisibility = document.getElementById("visible");
const Color = document.getElementById("brush-color");
const Eraser = document.getElementById("eraser");
const Magic=document.getElementById('Magic');
Grid.style.width = `${screenSize}px`;
Grid.style.height = `${screenSize}px`;
let rows = 50;
let cols = 50;
let isGridVisible = true;
let usingEraser = false;
let usingRandomColors=false;

function getRandomColors(){
  let list=['red', 'blue', 'green', 'pink', 'orange', 'cream'];
  let a=Math.floor(Math.random() * list.length);
  return list[a];
}

function createGrid(cellSize = 50) {
  Grid.innerHTML = "";

  let rows = cellSize;
  let cols = cellSize;

  for (let i = 0; i < rows * cols; i++) {
    let GridCell = document.createElement("div");
    GridCell.className = "pixel";
    GridCell.style.width = `${screenSize / dimensionBar.value}px`;
    GridCell.style.height = `${screenSize / dimensionBar.value}px`;
    GridCell.style.border = "1px solid bisque";

    Magic.addEventListener("click", function () {
      usingRandomColors = !usingRandomColors;
    });
    

    Eraser.addEventListener("click", function () {
      usingEraser = !usingEraser;
    });

    GridCell.addEventListener("mouseover", function () {
      if (usingEraser) {
        GridCell.style.backgroundColor = "white";
      } 
      else if(usingRandomColors){
        GridCell.style.backgroundColor=getRandomColors();
      }
      else {
        let pcolor = Color.value;
        GridCell.style.backgroundColor = pcolor;
      }
    });

    Grid.appendChild(GridCell);
  }
}

createGrid(dimensionBar.value);

// Update grid dynamically as dimensionBar changes
dimensionBar.addEventListener("input", () => {
  console.log(dimensionBar.value);
  createGrid(dimensionBar.value);
  resolution.innerText = `${dimensionBar.value} x ${dimensionBar.value}`;
});

reset.addEventListener("click", function () {
  const userConfirmed = confirm("Are you sure you want to reset the grid?");
  if (userConfirmed) {
    const cells = document.querySelectorAll(".pixel");
    cells.forEach((cell) => {
      cell.style.backgroundColor = "white";
    });
  } else {
    console.log("Reset canceled");
  }
});

gridVisibility.addEventListener("click", function () {
  const cells = document.querySelectorAll(".pixel");
  if (isGridVisible) {
    cells.forEach((cell) => {
      cell.style.border = "1px solid transparent"; // Hide grid
    });
  } else {
    cells.forEach((cell) => {
      cell.style.border = "1px solid bisque"; // Show grid
    });
  }
  isGridVisible = !isGridVisible; // Toggle visibility state
});
