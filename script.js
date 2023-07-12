// Script for navigation bar
const nav = document.querySelector("nav");
const menu = nav.querySelector(".menu");
const navLinks = nav.querySelector(".nav-links");

menu.addEventListener("click", () => {
  if (navLinks.style.display === "none") {
    navLinks.style.display = "block";
  } else {
    navLinks.style.display = "none";
  }
});

//script to add cart button

let allCards = document.querySelectorAll(".all-cards")
let Cards = document.querySelector("#job");
console.log(Cards)
allCards.forEach((allCard) => {
  let products = allCard.querySelectorAll(".p-card");

  products.forEach((product) => {
    product.addEventListener("click", (event) => {
      let cart = product.querySelector("span");

      if (event.target === cart) {
        //add item to cart.html
      } else if (event.target !== cart) {
        window.location.href = "sproduct.html";
      }
    });
  });
});
