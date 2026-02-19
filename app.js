
// variable that controls theme

let theme = "light";


// For Loops - Create color boxes

const colors = ["Red", "Blue", "Green", "Purple"];

function generateList() {
  const container = document.getElementById("listContainer");
  container.innerHTML = "";

  for (let i = 0; i < colors.length; i++) {
    const div = document.createElement("div");
    div.className = "box";
    div.textContent = colors[i];

    // Change CSS with JS
    div.style.backgroundColor = colors[i].toLowerCase();

    container.appendChild(div);
  }
}


// While Loop 

let count = 0;
while (count < 1) {
  console.log("Page loaded successfully.");
  count++;
}

// Change CSS Based on Variable

document.getElementById("toggleThemeBtn")
  .addEventListener("click", function () {

    if (theme === "light") {
      document.body.style.backgroundColor = "#222";
      document.body.style.color = "white";
      theme = "dark";
    } else {
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      theme = "light";
    }

  });

// Event for generating list
document.getElementById("generateBtn")
  .addEventListener("click", generateList);
