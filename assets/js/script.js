//
const trendingProductsDisplayContainer = document.getElementById(
  "trending-products-display-container",
);
const allProductsDisplayContainer = document.getElementById(
  "all-products-display-container",
);
const allCategoriesContainer = document.getElementById(
  "category-btns-container",
);

// ==================== LOAD ALL DATA ====================
const loadAllProducts = () => {
  fetch("https://fakestoreapi.com/products")
    .then((response) => response.json())
    .then((products) => {
      // 1. Display Trending (Top 3 by rating)
      const trending = [...products]
        .sort(
          (product1, product2) => product2.rating.rate - product1.rating.rate,
        )
        .slice(0, 3);
      displayAllProducts(trending, trendingProductsDisplayContainer);

      // 2. Display All Products
      displayAllProducts(products, allProductsDisplayContainer);
    });
};

// ==================== DISPLAY ALL DATA ====================
const displayAllProducts = (products, container) => {
  // clear the container
  container.innerHTML = "";

  // create dynamic cards for products
  for (let product of products) {
    const cardContainer = document.createElement("div");
    cardContainer.innerHTML = `
        <!-- Card ${product.id} -->
          <div class="card bg-base-100 w-11/12 m-auto shadow-sm">
            <figure>
              <img
                src="${product.image}"
                alt="Product Image"
              />
            </figure>
            <div class="card-body py-10">
              <div class="flex justify-between items-center">
                <span class="badge badge-xl">${product.category}</span>
                <span class="text-2xl text-gray-600">
                  <i class="ri-star-fill"></i>
                  ${product.rating.rate} (${product.rating.count})
                </span>
              </div>
              <h4 class="card-title text-2xl my-5 font-medium">
                ${product.title}
              </h4>
              <p class="card-title text-3xl">$${product.price}</p>
              <div class="card-actions justify-between mt-5 gap-5">
                <button class="btn btn-primary w-full lg:w-[40%]">
                  <i class="ri-eye-line"></i> Details
                </button>
                <button class="btn btn-primary w-full lg:w-[40%]">
                  <i class="ri-shopping-cart-line"></i> Buy
                </button>
              </div>
            </div>
          </div>
    `;

    // append container
    container.append(cardContainer);
  }
};

// ==================== LOAD ALL CATEGORIES ====================
const loadAllCategories = () => {
  fetch("https://fakestoreapi.com/products/categories")
    .then((response) => response.json())
    .then((categories) => {
      const allCategories = ["all", ...categories];
      displayAllCategories(allCategories);
    });
};

// ==================== DISPLAY ALL CATEGORIES ====================
const displayAllCategories = (categories) => {
  // clear the container
  allCategoriesContainer.innerHTML = "";

  // create dynamic cards for products
  for (let category of categories) {
    const buttonsContainer = document.createElement("div");
    buttonsContainer.innerHTML = `
        <button class="btn btn-soft btn-primary">${category}</button>
    `;

    // append container
    allCategoriesContainer.append(buttonsContainer);
  }
};

// ==================== CALL FUNCTIONS ====================
loadAllProducts();
loadAllCategories();
