const btn = document.querySelector(".btn_change_currency");

let price = document.querySelectorAll(".price");
console.log(price);
const cource = 90;

let currency = true; // доллар

btn.addEventListener("click", function () {
  console.log(currency);
  price.forEach((element) => {
    let priceText = element.textContent; // 8
    if (currency == true) {
      // если валюта доллар
      let newPrice = priceText * cource; // 720
      element.innerHTML = newPrice;
    } else {
      // если currency == false если валюта рубль
      let rub = priceText / cource;
      element.innerHTML = rub;
    }
  });
  currency = !currency;
  console.log(currency);
});