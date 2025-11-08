// parent
const parent = document.querySelector("body");

// creating a button
const btn = document.createElement("button");
btn.innerText = "change color";
btn.style.backgroundColor = "blue";
btn.style.color = "white";
btn.style.padding = "20px";

// adding the child inside the parent
parent.appendChild(btn);

//function to generate random color
function getRandomColor() {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  return `#${randomColor.padStart(6, '0')}`;
}

// adding eventlistener
btn.addEventListener("click", () => {
    const newColor = getRandomColor();
    parent.style.backgroundColor = newColor;
});
