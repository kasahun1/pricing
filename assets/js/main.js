const priceTag = document.querySelectorAll(".card p:first-of-type");
const checkToggle = document.querySelector("input[type=checkbox]");
const monthPrices = [19.999, 24.999, 39.999];

let formattedMonthPrices = monthPrices.map((price) =>
  parseFloat((price - 0.01).toFixed(2))
);

let yearlyPrices = monthPrices.map((price) =>
  parseFloat(price * 10).toFixed(2)
);

checkToggle.addEventListener("change", (e) => {
  e.preventDefault();

  if (e.target.checked) {
    priceTag.forEach((price, i) => {
      price.innerHTML = `<span>&dollar;</span> ${formattedMonthPrices[i]}`;
    });
  } else {
    priceTag.forEach((price, i) => {
      price.innerHTML = `<span>&dollar;</span> ${yearlyPrices[i]}`;
    });
  }
});
