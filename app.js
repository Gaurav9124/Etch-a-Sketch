console.log("hello");
const dimension = document.getElementById("dimension");
const color = document.getElementById("color");
const container = document.querySelector(".container");
const dimen=document.getElementById('dimen')

document.addEventListener("DOMContentLoaded", function(event) {
  console.log("DOM fully loaded and parsed.");
  console.log(dimension.ariaValueMax)
  // Your code to execute when DOM is ready
});

let i = 0;
let j = 0;
for (i; i < 16; i++) {
  for (j=0; j < 16; j++) {
    let cell = document.createElement("div");
    cell.className = "cell-class";
    cell.id = "cell-id";
    cell.style.height = "60px";
    cell.style.width = "60px";
    cell.style.border = "1px solid black";
    cell.style.margin='0px';
    container.appendChild(cell);
  }
}
