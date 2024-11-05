let div = document.querySelector('.main')

let cart = JSON.parse(localStorage.getItem('cart'))

cart.forEach( item => {
    let box = document.createElement("div");
    box.style =
      "width:100px; height:150px; border: 1px solid black; margin:15px; padding:15px";
    box.innerHTML = `<p>${item.title}</p>  <button>-</button> <span>${item.count}</span> <button>+</button> 
    `;
    div.appendChild(box);
})

function incrementCount () {

}

function decrementCount () {
    
}