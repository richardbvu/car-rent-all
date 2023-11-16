// VEHICLE

document.getElementById("btn1").onclick = function () {
  var img1 = document.getElementById("car-img");
  img1.src = "/images/img1.jpg";

  const price = document.getElementById("price");
  price.innerHTML = "$35 per day";

  const model = document.getElementById("model");
  model.innerHTML =
    "<i class='fa-solid fa-car' style='color: #000000'></i>" + "Sports";

  const transmission = document.getElementById("transmission");
  transmission.innerHTML =
    "<i class='fa-solid fa-gauge' style='color: #000000'></i>" + "Automatic";

  const people = document.getElementById("seats");
  people.innerHTML =
    '<i class="fa-solid fa-children" style="color: #000000"></i>' + "4 People";

  const bags = document.getElementById("bags");
  bags.innerHTML =
    "<i class='fa-solid fa-suitcase-rolling' style='color: #000000'></i>" +
    "3 Bags";

  const gas = document.getElementById("gas");
  gas.innerHTML =
    "<i class='fa-solid fa-gas-pump' style='color: #000000'></i>" + "Gasoline";
};

document.getElementById("btn2").onclick = function () {
  var img2 = document.getElementById("car-img");
  img2.src = "/images/img2.jpg";

  const price = document.getElementById("price");
  price.innerHTML = "$30 per day";

  const model = document.getElementById("model");
  model.innerHTML =
    "<i class='fa-solid fa-car' style='color: #000000'></i>" + "Sedan";

  const transmission = document.getElementById("transmission");
  transmission.innerHTML =
    "<i class='fa-solid fa-gauge' style='color: #000000'></i>" + "Automatic";

  const people = document.getElementById("seats");
  people.innerHTML =
    '<i class="fa-solid fa-children" style="color: #000000"></i>' + "4 People";

  const bags = document.getElementById("bags");
  bags.innerHTML =
    "<i class='fa-solid fa-suitcase-rolling' style='color: #000000'></i>" +
    "4 Bags";

  const gas = document.getElementById("gas");
  gas.innerHTML =
    "<i class='fa-solid fa-gas-pump' style='color: #000000'></i>" + "Gasoline";
};

document.getElementById("btn3").onclick = function () {
  var img3 = document.getElementById("car-img");
  img3.src = "/images/img3.jpg";

  const price = document.getElementById("price");
  price.innerHTML = "$20 per day";

  const model = document.getElementById("model");
  model.innerHTML =
    "<i class='fa-solid fa-car' style='color: #000000'></i>" + "Compact";

  const transmission = document.getElementById("transmission");
  transmission.innerHTML =
    "<i class='fa-solid fa-gauge' style='color: #000000'></i>" + "Automatic";

  const people = document.getElementById("seats");
  people.innerHTML =
    '<i class="fa-solid fa-children" style="color: #000000"></i>' + "4 People";

  const bags = document.getElementById("bags");
  bags.innerHTML =
    "<i class='fa-solid fa-suitcase-rolling' style='color: #000000'></i>" +
    "4 Bags";

  const gas = document.getElementById("gas");
  gas.innerHTML =
    "<i class='fa-solid fa-gas-pump' style='color: #000000'></i>" + "Gasoline";
};

document.getElementById("btn4").onclick = function () {
  var img4 = document.getElementById("car-img");
  img4.src = "/images/img4.jpg";

  const price = document.getElementById("price");
  price.innerHTML = "$35 per day";

  const model = document.getElementById("model");
  model.innerHTML =
    "<i class='fa-solid fa-car' style='color: #000000'></i>" + "Sports";

  const transmission = document.getElementById("transmission");
  transmission.innerHTML =
    "<i class='fa-solid fa-gauge' style='color: #000000'></i>" + "Automatic";

  const people = document.getElementById("seats");
  people.innerHTML =
    '<i class="fa-solid fa-children" style="color: #000000"></i>' + "4 People";

  const bags = document.getElementById("bags");
  bags.innerHTML =
    "<i class='fa-solid fa-suitcase-rolling' style='color: #000000'></i>" +
    "2 Bags";

  const gas = document.getElementById("gas");
  gas.innerHTML =
    "<i class='fa-solid fa-gas-pump' style='color: #000000'></i>" + "Gasoline";
};

document.getElementById("btn5").onclick = function () {
  var img5 = document.getElementById("car-img");
  img5.src = "/images/img5.jpg";

  const price = document.getElementById("price");
  price.innerHTML = "$20 per day";

  const model = document.getElementById("model");
  model.innerHTML =
    "<i class='fa-solid fa-car' style='color: #000000'></i>" + "Sedan";

  const transmission = document.getElementById("transmission");
  transmission.innerHTML =
    "<i class='fa-solid fa-gauge' style='color: #000000'></i>" + "Automatic";

  const people = document.getElementById("seats");
  people.innerHTML =
    '<i class="fa-solid fa-children" style="color: #000000"></i>' + "5 People";

  const bags = document.getElementById("bags");
  bags.innerHTML =
    "<i class='fa-solid fa-suitcase-rolling' style='color: #000000'></i>" +
    "4 Bags";

  const gas = document.getElementById("gas");
  gas.innerHTML =
    "<i class='fa-solid fa-gas-pump' style='color: #000000'></i>" + "Gasoline";
};

document.getElementById("btn6").onclick = function () {
  var img6 = document.getElementById("car-img");
  img6.src = "/images/img6.jpg";

  const price = document.getElementById("price");
  price.innerHTML = "$35 per day";

  const model = document.getElementById("model");
  model.innerHTML =
    "<i class='fa-solid fa-car' style='color: #000000'></i>" + "SUV";

  const transmission = document.getElementById("transmission");
  transmission.innerHTML =
    "<i class='fa-solid fa-gauge' style='color: #000000'></i>" + "Automatic";

  const people = document.getElementById("seats");
  people.innerHTML =
    '<i class="fa-solid fa-children" style="color: #000000"></i>' + "5 People";

  const bags = document.getElementById("bags");
  bags.innerHTML =
    "<i class='fa-solid fa-suitcase-rolling' style='color: #000000'></i>" +
    "4 Bags";

  const gas = document.getElementById("gas");
  gas.innerHTML =
    "<i class='fa-solid fa-gas-pump' style='color: #000000'></i>" + "Gasoline";
};

// BOOKING + MODAL

const bookingForm = document.querySelector("booking-content-form");
const modal = document.querySelector("[data-modal]");
const openButton = document.querySelector("[data-modal-open]");
const closeButton = document.querySelector("[data-modal-close]");
const carSelect = document.querySelector("#car-select");
const pickUpLocation = document.querySelector("#pick-up-location");
const dropOffLocation = document.querySelector("#drop-off-location");
const pickUpTime = document.querySelector("#pick-up-time");
const dropOffTime = document.querySelector("#drop-off-time");

const modalPickUp = document.querySelector("#modal-pick-up-location");
const modalPickUpTime = document.querySelector("#modal-pick-up-time");
const modalDropOff = document.querySelector("#modal-drop-off-location");
const modalDropOffTime = document.querySelector("#modal-drop-off-time");

openButton.addEventListener("click", (event) => {
  event.preventDefault();
  modal.showModal();
  modalPickUp.innerHTML = pickUpLocation.value;
  modalPickUpTime.innerHTML = pickUpTime.value;
  modalDropOff.innerHTML = dropOffLocation.value;
  modalDropOffTime.innerHTML = dropOffTime.value;
});

closeButton.addEventListener("click", () => {
  modal.close();
});

// bookingForm.addEventListener("submit", (event) => {
//   event.preventDefault();
//   validateFields();
// });

// const validateFields = () => {
//   const carSelectValue = carSelect.value;
//   if (carSelectValue === "Select your car") {
//     ("All fields are mandatory");
//   }
// };
