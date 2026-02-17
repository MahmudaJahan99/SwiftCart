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

// Select all links that point to the products section
const productLinks = document.querySelectorAll('a[href*="#product"]');

const homeContents = document.getElementById("home-contents");
const productsContainer = document.getElementById("products-container");

productLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    productsContainer.classList.remove("hidden");
    homeContents.classList.add("hidden");
    console.log('clicked')
  });
});

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

  // create dynamic buttons for categories
  for (let category of categories) {
    const button = document.createElement("button");
    button.classList = "btn btn-soft btn-primary";
    button.textContent = category;
    button.setAttribute("onclick", `loadProductsByCategory("${category}")`);

    // append to container
    allCategoriesContainer.append(button);
  }
};

// ==================== LOAD PRODUCTS BY CATEGORY ====================
const loadProductsByCategory = (category) => {
  // If selected category is all
  if (category === "all") {
    loadAllProducts();
    return;
  }

  // If selected category is not all
  const url = `https://fakestoreapi.com/products/category/${encodeURIComponent(category)}`;
  fetch(url)
    .then((response) => response.json())
    .then((products) => {
      displayAllProducts(products, allProductsDisplayContainer);
      // console.log(url);
    });
};

// ==================== CALL FUNCTIONS ====================
loadAllProducts();
loadAllCategories();

const navLinks = document.querySelectorAll(".nav-link");
// Remove active from all links
function removeActive() {
  navLinks.forEach((link) => link.classList.remove("active"));
}

// ================= SCROLL ACTIVE =================
navLinks.forEach((link) => {
  link.addEventListener("click", function (e) {
    removeActive();
    this.classList.add("active");
  });
});

// ================= SCROLL ACTIVE =================
const sections = document.querySelectorAll("section[id]");
const scrollActive = () => {
  // We get the position by scrolling down
  const scrollY = window.scrollY;

  sections.forEach((section) => {
    const id = section.id, //id of each section
      top = section.offsetTop - 50, //distance from the top edge
      height = section.offsetHeight, //Element height
      sectionId = section.getAttribute("id"); //id nav link

    if (scrollY >= top && scrollY < top + height) {
      removeActive();

      document
        .querySelectorAll(`.nav-link[href="#${sectionId}"]`)
        .forEach((link) => link.classList.add("active"));
    }
  });
};
window.addEventListener("scroll", scrollActive);
