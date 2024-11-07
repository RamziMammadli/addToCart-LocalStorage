let div = document.querySelector(".main");
let count = document.querySelector(".count"); div.style = "display:flex; flex-wrap:wrap";


axios.get("https://dummyjson.com/products").then((res) => {
  db = res.data.products;
  db.forEach((item) => {
    let box = document.createElement("div");
    box.style =
      "width:100px; height:150px; border:  1px solid black; margin:15px; padding:15px";
    box.innerHTML = `<p>${item.title}</p><button onclick="sebeteAt(${item.id})">Sebete at</button> 
    <button onclick="favoriAt(${item.id})">Favori at</button>`;
    div.appendChild(box);
  });
});


const sebeteAt = (id) => {
  axios.get('https://northwind.vercel.app/api/categories')
  .then((res) => {
    cart = res.data
    let currentProduct = db.find(item => item.id === id)
    let existingProduct = cart.find(item => item.id === id)
    if(existingProduct) {
      axios.put(`https://northwind.vercel.app/api/categories/${id}`, {...existingProduct, count: existingProduct.count + 1})
    } else {
      axios.post('https://northwind.vercel.app/api/categories', {...currentProduct, count: 1})
    }
  })
};


// const favoriAt = (id) => {
//   axios.get('https://northwind.vercel.app/api/categories')
//   .then((res) => {
//     wish = res.data
//     let currentProduct = db.find(item => item.id === id)
//     let existingProduct = wish.find(item => item.id === id)

//     if(existingProduct) {
//       alert('Artiq elave edilib')
//     } else {
//       axios.post('https://northwind.vercel.app/api/categories', currentProduct)
//     }
//   })
// }




// function sebeteAt(id) {
//   let cart = JSON.parse(localStorage.getItem("cart")) || [];
//   let currentProduct = db.find((item) => item.id === id);
//   let existingProduct = cart.find((item) => item.id === id);
//   if (existingProduct) {
//     existingProduct.count += 1;
//   } else {
//     cart.push({ ...currentProduct, count: 1 });
//   }
//   localStorage.setItem("cart", JSON.stringify(cart));
//   displayCount();
// }