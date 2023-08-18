
const wineProductsSection = document.querySelector(".wine_experience");
const brandFilters = document.getElementById("brandFilter");
const priceRangeMin = document.getElementById("price-range-min");
const priceValueMin = document.getElementById("price-value-min");
const priceRangeMax = document.getElementById("price-range-max");
const priceValueMax = document.getElementById("price-value-max");
const search = document.getElementById("searchBar");
const searchForm = document.getElementById("searchButton");

let brands=[]
let wines;
let filteredWines =[]

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

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
    filteredWines =[...wines]
    wines.forEach((wine, index) => {
      const wineProduct = createWineProduct(wine, index);
      wineProductsSection.innerHTML += wineProduct;
    });
    let lBrands = []
    wines.forEach((wine) => {
      if(!lBrands.includes(wine.brand.toLowerCase())){
        lBrands.push(wine.brand.toLowerCase());
        brands.push(wine.brand)
      }
    })
    for( let brand of brands){
      const filter = `
      <li>
      <input type="checkbox" id="${brand}" class="wine-brand" value="${brand}" onchange="FilterHandler()">
      <label for="${brand}">${capitalizeFirstLetter(brand)}</label>
      </li>
      `;
      brandFilters.innerHTML += filter;
    }
  let winePrices = wines.map(wine => wine.price);
  let biggestPrice = Math.max(...winePrices);
  priceRangeMax.max=Math.floor(biggestPrice)+1
  priceRangeMin.max=Math.floor(biggestPrice)+1
  


  })
  .catch((error) => {
    console.error("Error fetching wine data:", error);
  });



  const categoryFilter = document.getElementsByClassName('wine-category');
  const brandFilter = document.getElementsByClassName('wine-brand');


  function FilterHandler(event){
    filteredWines =[...wines]
    let x = [];
    const selectedCategory = Array.from(categoryFilter).filter(a => a.checked)
    const selectedBrand = Array.from(brandFilter).filter(a => a.checked)
    wineProductsSection.innerHTML=""

   if(selectedCategory[0]){
       for(i of selectedCategory){
        x = [...x,...filteredWines.filter((wine) => wine.category === i.value)]
   } 
   filteredWines = [...x]
   x=[];
  }
  if(selectedBrand[0]){
    for(i of selectedBrand){
     x = [...x,...filteredWines.filter((wine) => wine.brand.toLowerCase() === i.value.toLowerCase())]
} 
filteredWines = [...x]
}

priceValueMax.textContent = "$" + priceRangeMax.value;
if(priceRangeMax.value>0){
  x = [...filteredWines.filter((wine) => Math.floor(wine.price) <= priceRangeMax.value)]
  filteredWines = [...x]
}

priceValueMin.textContent = "$" + priceRangeMin.value;
if(priceRangeMin.value>0){
  x = [...filteredWines.filter((wine) => Math.floor(wine.price) >= priceRangeMin.value)]
  filteredWines = [...x]
}

if(search.value!==""){
  const regex = new RegExp(search.value.replace(/\s+/g, '\\s*'), 'i');
  x = [...filteredWines.filter((wine) => {
    console.log(regex.test(wine.name.replace(/\s/g, "")))
    return regex.test(wine.name.replace(/\s/g, ""))
    
  })]
  filteredWines = [...x]
}

      filteredWines.forEach((wine, index) => {
      const wineProduct = createWineProduct(wine, index);
      wineProductsSection.innerHTML += wineProduct;});
      }
 
Array.from(categoryFilter).forEach(input => {
  input.addEventListener('change', FilterHandler);
  });


  priceRangeMin.addEventListener("input",FilterHandler );
  priceRangeMax.addEventListener("input",FilterHandler );
  searchForm.addEventListener("click",FilterHandler );