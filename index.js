let div = document.querySelector(".main");
let count = document.querySelector(".count");
div.style = "display:flex; flex-wrap:wrap";

axios.get("https://dummyjson.com/products").then((res) => {
  db = res.data.products;
  db.forEach((item) => {
    let box = document.createElement("div");
    box.style =
      "width:100px; height:150px; border: 1px solid black; margin:15px; padding:15px";
    box.innerHTML = `<p>${item.title}</p> <button onclick="sebeteAt(${item.id})">Sebete at</button> 
    <button onclick="addWish(${item.id})">Favori at</button>`;
    div.appendChild(box);
  });
});

function sebeteAt(id) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let currentProduct = db.find((item) => item.id === id);
  let existingProduct = cart.find((item) => item.id === id);

  if (existingProduct) {
    existingProduct.count += 1;
  } else {
    cart.push({ ...currentProduct, count: 1 });
  }
  localStorage.setItem("cart", JSON.stringify(cart));
  displayCount();
}

function addWish(id) {
  let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
  let currentProduct = db.find((item) => item.id === id);
  let existingProduct = wishlist.find((item) => item.id === id);
  if (existingProduct) {
    alert("Mehsul artiq elave edilib");
  } else {
    wishlist.push(currentProduct);
  }
  localStorage.setItem("wishlist", JSON.stringify(wishlist));
}
const displayCount = () => {
  let cart = JSON.parse(localStorage.getItem("cart"));
  let total = 0;
  cart.forEach((item) => {
    total += item.count;
  });
  count.innerText = total;
};

window.onload = () => {
  displayCount();
};
