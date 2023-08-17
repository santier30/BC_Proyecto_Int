
const wineProductsSection = document.querySelector(".wine_experience");

let wines;

function createWineProduct(wine, index) {
  return `<div class="wine_div">
            <img class="wine_img" src="${wine.image}" alt="${wine.name}" />
            <div class="wine_buttons">
              <div class="wine_buttons-container">
                <button class="buy-link" onclick="buyWine(${index})">
                  <i class="fas fa-dollar-sign"></i>
                  Buy
                </button>
                <button class="buy-link" onclick="addToCartHandler(${index})">
                  <i class="fas fa-shopping-cart"></i>
                  Add to Cart
                </button>
              </div>
              <p>${wine.short_description}</p>
            </div>
            <h2>${wine.name} (${wine.stock})</h2>
            <h2>${wine.price}</h2>
          </div>`;
}

fetch("https://vinoteca-b57e6-default-rtdb.firebaseio.com/wines.json")
  .then((response) => response.json())
  .then((data) => {
    wines = Object.values(data);
    wines.forEach((wine, index) => {
      const wineProduct = createWineProduct(wine, index);
      wineProductsSection.innerHTML += wineProduct;
    });
  })
  .catch((error) => {
    console.error("Error fetching wine data:", error);
  });

  const categoryFilter = document.getElementsByClassName('wine-category');
  function categoryFilterHandler(event){
    const selected = Array.from(categoryFilter).filter(a => a.checked)
    wineProductsSection.innerHTML=""
    if (!selected[0]){wines.forEach((wine, index) => {
      const wineProduct = createWineProduct(wine, index);
      wineProductsSection.innerHTML += wineProduct;});
    }else{
      for(i of selected){
      wines.filter((wine) => wine.category === i.value).forEach((wine, index) => {
        const wineProduct = createWineProduct(wine, index);
        wineProductsSection.innerHTML += wineProduct;
      });}
    }
   
  }
  

Array.from(categoryFilter).forEach(input => {
  input.addEventListener('change', categoryFilterHandler);
});