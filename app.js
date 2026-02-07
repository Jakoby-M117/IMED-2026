

// OBJECT WITH MULTIPLE PROPERTIES

const artist = {
  name: "Alex Rivera",
  specialty: "Digital Illustration",
  baseRate: 75,
  experience: 5
};


// FUNCTION 1
function displayArtistInfo(artistObj) {
  document.getElementById("artistName").textContent = artistObj.name;
  document.getElementById("artistInfo").textContent =
    `Specialty: ${artistObj.specialty} | Experience: ${artistObj.experience} years`;
}


// FUNCTION 2
function calculateCommissionPrice(rate, hours) {
  return rate * hours;
}


// FUNCTION 3
function handlePriceCalculation() {
  const estimatedHours = 4;
  const totalPrice = calculateCommissionPrice(artist.baseRate, estimatedHours);

  document.getElementById("priceOutput").textContent =
    `Estimated price for ${estimatedHours} hours: $${totalPrice}`;
}


// EVENT LISTENER

document
  .getElementById("priceBtn")
  .addEventListener("click", handlePriceCalculation);


// INVOKE FUNCTION ON PAGE LOAD

displayArtistInfo(artist);
