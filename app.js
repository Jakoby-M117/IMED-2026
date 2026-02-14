
// Basic Variables

let name = "Jakoby";
let itemType = "print";
let price = 25.5;
let quantity = 2;


// Concatenated String Variable

let summary = "Customer " + name + " ordered " + quantity + 
              " " + itemType + " items.";


// Main Function

function checkOrder() {

  // String Method
  let lowerCaseItem = itemType.toLowerCase();

  // Number Method
  let total = (price * quantity).toFixed(2);

  // If Statement
  let message;
  if (total > 50) {
    message = "You qualify for free shipping!";
  } else {
    message = "Shipping fees apply.";
  }

  // Switch Statement
  let typeMessage;
  switch (lowerCaseItem) {
    case "print":
      typeMessage = "Printed artwork selected.";
      break;
    case "canvas":
      typeMessage = "Canvas artwork selected.";
      break;

  }

  // Output to page
  document.getElementById("output").innerHTML =
    summary + "<br>" +
    "Total: $" + total + "<br>" +
    message + "<br>" +
    typeMessage;
}


// Event Listener

document.getElementById("orderBtn")
  .addEventListener("click", checkOrder);

