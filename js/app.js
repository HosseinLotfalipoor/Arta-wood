let product_img = document.querySelector(".product-img-page img");
let product_thumbnail = document.querySelectorAll(".product-thumbnail");

product_thumbnail.forEach((product) => {
  product.addEventListener("click", () => {
    product_thumbnail.forEach((product) => {
      product.classList.remove("active");
    });
    product.classList.add("active");

    let img = product.querySelector("img").getAttribute("src");
    let index = product.querySelector("img").getAttribute("data-index");

    product_img.setAttribute("src", img);
    product_img.setAttribute("data-index", index);
  });
});

const number = document.querySelector(".number");
const increase = document.querySelector(".increase");
const decrease = document.querySelector(".decrease");
let total = document.querySelector(".total");
const price = document.querySelector(".price").innerHTML;
const totalAll = document.querySelector('.total-all');



total.innerHTML = price;
let newNum = Number(number.innerHTML);

increase.addEventListener("click", function () {
  if (newNum >= 50) {
    number.innerHTML = 50;
  }
  else {
    newNum += 1;
    number.innerHTML = newNum;
  }
  total.innerHTML = Number(price) * Number(number.innerHTML);
  totalAll.innerHTML = total.innerHTML + "  تومان";
});

decrease.addEventListener("click", function () {
  if (newNum <= 1) {
    number.innerHTML = 1;
  }
  else {
    newNum -= 1;
    number.innerHTML = newNum;
  }
  total.innerHTML = Number(price) * Number(number.innerHTML);
  totalAll.innerHTML = total.innerHTML + "  تومان";
});


