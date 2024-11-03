console.log("hello");
const container = document.querySelector(".container");
const grid_dimensions = document.querySelector(".grid-dimensions");
const grid_button = document.querySelector("#button");
const eraser = document.getElementById("eraser");
const reset = document.getElementById("reset");
let gridDimensions = 16;
var pixelSize = parseInt(600 / gridDimensions);
var totalPixels = parseInt(gridDimensions * gridDimensions);

grid_button.addEventListener("click", () => {
  gridDimensions = parseInt(grid_dimensions.value);
  pixelSize = parseInt(600 / gridDimensions);
  totalPixels = parseInt(gridDimensions * gridDimensions);

  container.innerHTML = "";

  for (let i = 0; i < totalPixels; i++) {
    const pixel = document.createElement("div");
    pixel.className = "pixel-class";
    pixel.id = "pixel-id";
    pixel.style.height = `${pixelSize}px`;
    pixel.style.width = `${pixelSize}px`;
    pixel.style.border = "0px solid black";
    container.appendChild(pixel);

    pixel.addEventListener("mouseover", () => {
      pixel.style.backgroundColor = "purple";
      pixel.style.cursor = "pointer";
    });
    container.append(pixel);
  }
});

console.log(totalPixels);

// reset.addEventListener("click", () => {
//   container.removeAttribute("stye");
// });
