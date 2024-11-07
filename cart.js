let div = document.querySelector(".main");
div.style = "display:flex; flex-wrap:wrap";

function getItems () {
  div.innerHTML = ``
  axios.get("https://672b4c0f976a834dd0267ab4.mockapi.io/baskets").then((res) => {
    db = res.data;
    db.forEach((item) => {
      let box = document.createElement("div");
      box.style =
        "width:100px; height:150px; border:  1px solid black; margin:15px; padding:15px";
      box.innerHTML = `<p>${item.title}</p><button onclick="deleteItem(${item.id})">delete</button>`;
      div.appendChild(box);
    });
  });
}

function deleteItem (id) {
  axios.delete(`https://672b4c0f976a834dd0267ab4.mockapi.io/baskets/${id}`)
  setTimeout(() => {
    getItems()
  },2000)
}

function incrementCount() {}

function decrementCount() {}


window.onload = () => {
  getItems()
}