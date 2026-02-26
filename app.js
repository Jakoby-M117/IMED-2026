
function ArtItem(title, price, type) {
  this.title = title;
  this.price = price;
  this.type = type;

  // Object method
  this.getInfo = function() {
    return `${this.title} (${this.type}) - $${this.price.toFixed(2)}`;
  };
}


// Array of cart items

const cart = [
  new ArtItem("Canvas Sunset", 45.99, "Canvas"),
  new ArtItem("Digital Sketch", 19.99, "Digital"),
  new ArtItem("Framed Poster", 27.50, "Poster"),
  new ArtItem("Limited Edition Print", 125.00, "Print")
];


// ARRAY METHOD

function addToCart(item) {
  cart.push(item);
}

// Add a new item
addToCart(new ArtItem("Music Art Print", 59.95, "Print"));


function showCart() {
  const outputDiv = document.getElementById("cartOutput");
  outputDiv.innerHTML = "<h3>Cart Items:</h3>";


  cart.forEach(function(item, index) {
    outputDiv.innerHTML += `<p>${index+1}. ${item.getInfo()}</p>`;
  });

  const total = cart.reduce(function(sum, item) {
    return sum + item.price;
  }, 0);

  outputDiv.innerHTML += `<p><strong>Total:</strong> $${total.toFixed(2)}</p>`;
}


// FILTER EXPENSIVE ITEMS

function showExpensiveItems() {
  const expensive = cart.filter(function(item) {
    return item.price > 50;
  });

  const outputDiv = document.getElementById("cartOutput");
  outputDiv.innerHTML = "<h3>Items over $50:</h3>";

  expensive.forEach(function(item) {
    outputDiv.innerHTML += `<p>${item.getInfo()}</p>`;
  });
}


document.getElementById("showCartBtn")
  .addEventListener("click", showCart);

document.getElementById("filterExpensiveBtn")
  .addEventListener("click", showExpensiveItems);
