////////////////////////CART MODULE////////////////////////////////

const cartButton = document.getElementById('cart_Button');
const cartSection = document.getElementById('cart_section');
const mouseOverHandler=() => {
  if(window.innerWidth>768){cartSection.style.display = 'block';}
  };
  const mouseOutHandler=() => {
    cartSection.style.display = 'none';
}
cartButton.addEventListener('mouseover',mouseOverHandler )
cartSection.addEventListener('mouseover',mouseOverHandler )
cartButton.addEventListener('mouseout',mouseOutHandler );
cartSection.addEventListener('mouseout',mouseOutHandler );

/////////////////////CART////////////////////////

const cartItems = document.getElementById("Cart-items");
const cartTotal = document.getElementById("total");
const storedItems = localStorage.getItem("cartItems");
items = storedItems ? JSON.parse(storedItems) : [];

/////
function totalPriceHandler(){
  cartTotal.innerHTML = `${items.reduce((a,c)=>a+c.price*c.quantity,0).toFixed(2)}`
}
//////
function saveCartToLocalStorage() {
  localStorage.setItem("cartItems", JSON.stringify(items));
}
/////
function addToCartHandler (wineIndex) {
  const wine = wines[wineIndex];
  const index = items.findIndex((item) => item.id === wine.id);
  if(index !== -1){
    items[index].quantity+=1
  }else {
    wine.quantity=1
    items.push(wine);
  }
  displayCartHandler();
}

//////

function displayCartHandler () {
  cartItems.innerHTML = "";
  items.forEach((item,index) => {
    cartItems.innerHTML+=`
    <div class="cart_item">
      <img src="${item.image.replace("BIG.webp", "-Module.webp")}" alt="" class="cart-img">
      <div class="cart_item_content">
        <h3>${item.name}</h3>
        <p>${item.price}</p>
        <div class="item-buttons">
          <button onclick="decreaseQuantity(${index})">-</button>
          <span>${item.quantity}</span>
          <button onclick="increaseQuantity(${index})">+</button>
        </div>
      </div>
    </div>
  `
  });
  totalPriceHandler()
  saveCartToLocalStorage();
}

//////

function decreaseQuantity(index) {
  items[index].quantity -= 1;
  if (items[index].quantity < 1) {
    items.splice(index, 1);
  }
  displayCartHandler();
}

/////

function increaseQuantity(index) {
  items[index].quantity += 1;
  displayCartHandler();
}
if(items[0]){displayCartHandler ()}


/////

// Function to handle buying a wine
function buyWine(index) {
  // You can use the index to access the wine data
  const wine = wines[index];
  // Here, you can perform the buying action, e.g., redirect to a purchase page
  console.log("Buying wine:", wine.name);
}