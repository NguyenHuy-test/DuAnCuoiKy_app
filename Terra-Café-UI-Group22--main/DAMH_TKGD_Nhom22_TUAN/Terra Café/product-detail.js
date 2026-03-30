// Product Detail Page JavaScript

// Format price function
function formatPrice(price) {
  return new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  })
    .format(price)
    .replace("₫", "đ");
}

// View product function
function viewProduct(productId) {
  window.location.href = `product-detail.html?id=${productId}`;
}

// Add to cart function
function addToCart(productId) {
  const product = window.products.find((p) => p.id === productId);
  if (product) {
    // Use window.cart if available, otherwise try to access global cart
    const cartInstance =
      window.cart || (typeof cart !== "undefined" ? cart : null);
    if (cartInstance && cartInstance.addItem) {
      cartInstance.addItem(productId, product);
    } else {
      // Fallback: add to localStorage directly
      addToLocalStorageCart(product);
    }
  }
}

// Fallback function to add to localStorage
function addToLocalStorageCart(product) {
  let cartData = JSON.parse(localStorage.getItem("cart")) || [];

  // Check if product already exists
  const existingIndex = cartData.findIndex(
    (item) => parseInt(item.id) === parseInt(product.id)
  );

  if (existingIndex !== -1) {
    cartData[existingIndex].quantity += 1;
  } else {
    cartData.push({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      category: product.category || "Sản phẩm",
      quantity: 1,
    });
  }

  localStorage.setItem("cart", JSON.stringify(cartData));

  // Update cart display if function exists
  if (window.forceUpdateCartDisplay) {
    window.forceUpdateCartDisplay();
  } else if (typeof updateCartDisplay === "function") {
    updateCartDisplay();
  } else if (window.updateCartDisplay) {
    window.updateCartDisplay();
  }
}

// Get product ID from URL parameters
function getProductIdFromURL() {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get("id");
}

// Load product data
function loadProductDetail() {
  const productId = getProductIdFromURL();

  if (!productId) {
    // Redirect to home if no product ID
    window.location.href = "index.html";
    return;
  }

  // Find product in products array
  const product = products.find((p) => p.id === parseInt(productId));

  if (!product) {
    // Redirect to home if product not found
    window.location.href = "index.html";
    return;
  }

  // Populate product details
  populateProductDetails(product);
  loadProductDescription(product);
  loadBakerySidebar();
  loadSameCategoryProducts(product);
  loadRelatedProducts(product.category);
}

// Populate product details in the page
function populateProductDetails(product) {
  // Update page title
  document.title = `${product.name} - Terra Café`;

  // Update breadcrumb
  document.getElementById("product-breadcrumb").textContent = product.name;

  // Update product info
  document.getElementById("product-main-image").src = product.image;
  document.getElementById("product-main-image").alt = product.name;
  document.getElementById("product-title").textContent = product.name;
  document.getElementById("product-category").textContent = product.category;
  document.getElementById("product-sku").textContent = product.id
    .toString()
    .padStart(3, "0");
  document.getElementById("product-price").textContent = formatPrice(
    product.price
  );

  // Update description
  const description = getProductDescription(product);
  document.getElementById("product-description-text").textContent = description;

  // Show ingredients if available
  if (product.ingredients) {
    document.getElementById("product-ingredients-section").style.display =
      "block";
    document.getElementById("product-ingredients-text").textContent =
      product.ingredients;
  }

  // Show nutrition info if available
  if (product.nutrition) {
    document.getElementById("product-nutrition-section").style.display =
      "block";
    document.getElementById("product-nutrition-text").textContent =
      product.nutrition;
  }

  // Show discount badge if on sale
  if (product.originalPrice && product.originalPrice > product.price) {
    const discount = Math.round(
      (1 - product.price / product.originalPrice) * 100
    );
    document.getElementById("product-discount").textContent = `-${discount}%`;
    document.getElementById("product-discount").style.display = "inline-block";
    document.getElementById("product-original-price").textContent = formatPrice(
      product.originalPrice
    );
    document.getElementById("product-original-price").style.display = "inline";
    document.getElementById("product-badge").textContent = `SALE ${discount}%`;
    document.getElementById("product-badge").style.display = "block";
  }

  // Show size selection for drinks
  if (
    product.category === "Cà phê" ||
    product.category === "Trà" ||
    product.category === "Đá xay"
  ) {
    document.getElementById("size-selection").style.display = "block";
  }

  // Store current product for cart operations
  window.currentProduct = product;
}

// Get product description based on category
function getProductDescription(product) {
  const descriptions = {
    "Cà phê":
      "Thưởng thức hương vị cà phê đậm đà, được pha chế từ những hạt cà phê chất lượng cao. Mang đến trải nghiệm tuyệt vời cho những ai yêu thích cà phê.",
    Trà: "Trà thơm ngon được pha chế từ lá trà tươi ngon, mang đến hương vị thanh mát và sảng khoái.",
    "Đá xay":
      "Thức uống đá xay mát lạnh, hoàn hảo cho những ngày nóng bức. Được pha chế với công thức độc quyền của Terra Café.",
    "Bánh ngọt":
      "Bánh ngọt thơm ngon được làm từ nguyên liệu tươi ngon, hoàn hảo để thưởng thức cùng cà phê.",
    "Bánh mặn":
      "Bánh mặn dinh dưỡng, phù hợp cho bữa sáng hoặc bữa phụ. Được chế biến tươi ngon hàng ngày.",
  };

  return (
    descriptions[product.category] ||
    "Sản phẩm chất lượng cao từ Terra Café."
  );
}

// Load related products
function loadRelatedProducts(category) {
  const relatedProducts = products
    .filter((p) => p.category === category && p.id !== window.currentProduct.id)
    .slice(0, 4);

  const relatedContainer = document.getElementById("related-products");
  relatedContainer.innerHTML = "";

  relatedProducts.forEach((product) => {
    const productCard = createProductCard(product);
    relatedContainer.appendChild(productCard);
  });
}

// Create product card for related products
function createProductCard(product) {
  const card = document.createElement("div");
  card.className = "product-card";
  card.onclick = () => {
    window.location.href = `product-detail.html?id=${product.id}`;
  };

  card.innerHTML = `
        <div class="product-image">
            <img src="${product.image}" alt="${product.name}">
            ${
              product.originalPrice && product.originalPrice > product.price
                ? `<div class="product-badge">SALE</div>`
                : ""
            }
        </div>
        <div class="product-info">
            <h3 class="product-name">${product.name}</h3>
            <div class="product-price">
                <span class="current-price">${formatPrice(product.price)}</span>
                ${
                  product.originalPrice && product.originalPrice > product.price
                    ? `<span class="original-price">${formatPrice(
                        product.originalPrice
                      )}</span>`
                    : ""
                }
            </div>
        </div>
    `;

  return card;
}

// Quantity controls
function increaseQuantity() {
  const quantityInput = document.getElementById("product-quantity");
  const currentValue = parseInt(quantityInput.value);
  if (currentValue < 99) {
    quantityInput.value = currentValue + 1;
  }
}

function decreaseQuantity() {
  const quantityInput = document.getElementById("product-quantity");
  const currentValue = parseInt(quantityInput.value);
  if (currentValue > 1) {
    quantityInput.value = currentValue - 1;
  }
}

// Size selection
function selectSize(size) {
  // Remove active class from all size buttons
  document.querySelectorAll(".size-btn").forEach((btn) => {
    btn.classList.remove("active");
  });

  // Add active class to selected size
  event.target.classList.add("active");

  // Update price based on size (optional)
  updatePriceBySize(size);
}

function updatePriceBySize(size) {
  if (!window.currentProduct) return;

  let price = window.currentProduct.price;

  // Adjust price based on size
  if (size === "L") {
    price += 5000; // Add 5k for large size
  }

  document.getElementById("product-price").textContent = formatPrice(price);
}

// Add to cart from detail page
function addToCartFromDetail() {
  if (!window.currentProduct) return;

  const quantity = parseInt(document.getElementById("product-quantity").value);
  const selectedSize =
    document.querySelector(".size-btn.active")?.dataset.size || "M";

  // Use cart instance if available
  const cartInstance =
    window.cart || (typeof cart !== "undefined" ? cart : null);

  if (cartInstance && cartInstance.addItem) {
    // Use the cart's addItem method with quantity
    cartInstance.addItem(
      window.currentProduct.id,
      window.currentProduct,
      quantity
    );
  } else {
    // Fallback: add to localStorage directly with quantity
    addToLocalStorageCartWithQuantity(window.currentProduct, quantity);
  }

  // Show success message
  showNotification("Đã thêm sản phẩm vào giỏ hàng!", "success");
}

// Fallback function to add to localStorage with specific quantity
function addToLocalStorageCartWithQuantity(product, quantity) {
  let cartData = JSON.parse(localStorage.getItem("cart")) || [];

  // Check if product already exists
  const existingIndex = cartData.findIndex(
    (item) => parseInt(item.id) === parseInt(product.id)
  );

  if (existingIndex !== -1) {
    cartData[existingIndex].quantity += quantity;
  } else {
    cartData.push({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      category: product.category || "Sản phẩm",
      quantity: quantity,
    });
  }

  localStorage.setItem("cart", JSON.stringify(cartData));

  // Update cart display if function exists
  if (window.forceUpdateCartDisplay) {
    window.forceUpdateCartDisplay();
  } else if (typeof updateCartDisplay === "function") {
    updateCartDisplay();
  } else if (window.updateCartDisplay) {
    window.updateCartDisplay();
  }
}

// Buy now function
function buyNow() {
  addToCartFromDetail();
  // Redirect to cart page
  setTimeout(() => {
    window.location.href = "cart.html";
  }, 500);
}

// Show notification
function showNotification(message, type = "info") {
  // Create notification element
  const notification = document.createElement("div");
  notification.className = `notification ${type}`;
  notification.textContent = message;
  notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === "success" ? "#28a745" : "#007bff"};
        color: white;
        padding: 15px 20px;
        border-radius: 8px;
        z-index: 10000;
        font-weight: 500;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        transform: translateX(100%);
        transition: transform 0.3s ease;
    `;

  document.body.appendChild(notification);

  // Animate in
  setTimeout(() => {
    notification.style.transform = "translateX(0)";
  }, 100);

  // Remove after 3 seconds
  setTimeout(() => {
    notification.style.transform = "translateX(100%)";
    setTimeout(() => {
      document.body.removeChild(notification);
    }, 300);
  }, 3000);
}

// Create unified products array from mockData
function createUnifiedProductsArray() {
  if (typeof mockData === "undefined") {
    console.error(
      "mockData is not defined. Make sure script.js is loaded first."
    );
    return [];
  }

  const allProducts = [];

  // Add flash sale products
  if (mockData.flashSale) {
    mockData.flashSale.forEach((product) => {
      allProducts.push({
        ...product,
        id: parseInt(product.id.replace("fs", "")), // Convert fs1 -> 1
        category: "Flash Sale",
        price: product.currentPrice,
        originalPrice: product.originalPrice,
      });
    });
  }

  // Add coffee daily products
  if (mockData.coffeeDaily) {
    mockData.coffeeDaily.forEach((product) => {
      allProducts.push({
        ...product,
        id: parseInt(product.id.replace("cd", "")) + 100, // Convert cd1 -> 101
        category: "Cà phê",
      });
    });
  }

  // Add new products
  if (mockData.newProducts) {
    mockData.newProducts.forEach((product) => {
      allProducts.push({
        ...product,
        id: parseInt(product.id.replace("np", "")) + 200, // Convert np1 -> 201
        category: "Sản phẩm mới",
      });
    });
  }

  // Add tea products
  if (mockData.tea) {
    mockData.tea.forEach((product) => {
      allProducts.push({
        ...product,
        id: parseInt(product.id.replace("tea", "")) + 300, // Convert tea1 -> 301
        category: "Trà",
      });
    });
  }

  // Add bakery products
  if (mockData.bakery) {
    mockData.bakery.forEach((product) => {
      allProducts.push({
        ...product,
        id: parseInt(product.id.replace("bk", "")) + 400, // Convert bk1 -> 401
        category: "Bánh ngọt",
      });
    });
  }

  return allProducts;
}

// Load product description
function loadProductDescription(product) {
  const descriptionContainer = document.getElementById("product-description");

  // Generate detailed description based on product
  let description = "";

  if (product.category === "Cà phê") {
    description = `
      <p><strong>${product.name}</strong> là một trong những sản phẩm đặc trưng của Terra Café, được pha chế từ những hạt cà phê chất lượng cao được tuyển chọn kỹ lưỡng.</p>
      <p>Với hương vị đậm đà, thơm ngon và độ cân bằng hoàn hảo, ${product.name} mang đến trải nghiệm cà phê tuyệt vời cho mọi khách hàng.</p>
      <p><strong>Đặc điểm nổi bật:</strong></p>
      <ul>
        <li>Hạt cà phê chất lượng cao, được rang theo công thức riêng</li>
        <li>Hương vị đậm đà, thơm ngon</li>
        <li>Phù hợp cho mọi thời điểm trong ngày</li>
        <li>Có thể thưởng thức nóng hoặc đá</li>
      </ul>
    `;
  } else if (product.category === "Trà") {
    description = `
      <p><strong>${product.name}</strong> là sự kết hợp hoàn hảo giữa trà chất lượng cao và các nguyên liệu tự nhiên, mang đến hương vị tươi mát và thanh khiết.</p>
      <p>Được pha chế theo công thức độc quyền của Terra Café, ${product.name} là lựa chọn lý tưởng cho những ai yêu thích sự nhẹ nhàng và tinh tế.</p>
      <p><strong>Đặc điểm nổi bật:</strong></p>
      <ul>
        <li>Lá trà chất lượng cao, được tuyển chọn kỹ lưỡng</li>
        <li>Hương vị tươi mát, thanh khiết</li>
        <li>Giàu chất chống oxy hóa, tốt cho sức khỏe</li>
        <li>Thích hợp thưởng thức vào mọi thời điểm</li>
      </ul>
    `;
  } else if (product.category === "Bánh ngọt") {
    description = `
      <p><strong>${product.name}</strong> được làm từ những nguyên liệu tươi ngon nhất, theo công thức truyền thống kết hợp với kỹ thuật hiện đại.</p>
      <p>Với hương vị thơm ngon, kết cấu mềm mại và diện mạo hấp dẫn, ${product.name} là món ăn kèm hoàn hảo cho ly cà phê hay trà của bạn.</p>
      <p><strong>Đặc điểm nổi bật:</strong></p>
      <ul>
        <li>Nguyên liệu tươi ngon, chất lượng cao</li>
        <li>Công thức độc quyền của Terra Café</li>
        <li>Kết cấu mềm mại, hương vị đậm đà</li>
        <li>Phù hợp làm món ăn kèm hoặc thưởng thức riêng</li>
      </ul>
    `;
  } else {
    description = `
      <p><strong>${product.name}</strong> là một trong những sản phẩm chất lượng cao của Terra Café, được chế biến với sự tỉ mỉ và tâm huyết.</p>
      <p>Mang đến trải nghiệm tuyệt vời cho khách hàng với hương vị độc đáo và chất lượng đảm bảo.</p>
      <p><strong>Đặc điểm nổi bật:</strong></p>
      <ul>
        <li>Chất lượng cao, được kiểm soát nghiêm ngặt</li>
        <li>Hương vị độc đáo, khó quên</li>
        <li>Phù hợp cho mọi đối tượng khách hàng</li>
        <li>Giá cả hợp lý, chất lượng tuyệt vời</li>
      </ul>
    `;
  }

  descriptionContainer.innerHTML = description;
}

// Load bakery sidebar
function loadBakerySidebar() {
  const container = document.getElementById("bakery-sidebar-list");

  if (!container) {
    return;
  }

  // Get bakery products
  const bakeryProducts = window.products
    .filter((product) => product.category === "Bánh ngọt")
    .slice(0, 5); // Show maximum 5 products

  if (bakeryProducts.length === 0) {
    container.innerHTML =
      '<p style="padding: 20px; text-align: center; color: #666;">Không có sản phẩm bánh ngọt.</p>';
    return;
  }

  container.innerHTML = bakeryProducts
    .map(
      (product) => `
      <div class="bakery-item-sidebar" onclick="viewProduct(${product.id})">
        <div class="bakery-item-image">
          <img src="${product.image}" alt="${product.name}" />
        </div>
        <div class="bakery-item-info">
          <div class="bakery-item-brand">TERRA CAFÉ</div>
          <div class="bakery-item-name">${product.name}</div>
          <div class="bakery-item-price">${formatPrice(product.price)}</div>
        </div>
        <button class="bakery-item-add" onclick="event.stopPropagation(); addToCart(${
          product.id
        })">
          <i class="fa fa-plus"></i>
        </button>
      </div>
    `
    )
    .join("");
}

// Load same category products
function loadSameCategoryProducts(currentProduct) {
  const container = document.getElementById("same-category-products");

  // Get products from same category (excluding current product)
  const sameCategoryProducts = window.products
    .filter(
      (product) =>
        product.category === currentProduct.category &&
        product.id !== currentProduct.id
    )
    .slice(0, 5); // Show maximum 5 products

  if (sameCategoryProducts.length === 0) {
    container.innerHTML = "<p>Không có sản phẩm cùng loại khác.</p>";
    return;
  }

  container.innerHTML = sameCategoryProducts
    .map(
      (product) => `
      <div class="same-category-item product-card" onclick="viewProduct(${
        product.id
      })">
        <div class="product-image">
          <img src="${product.image}" alt="${product.name}" />
        </div>
        <div class="product-info">
          <p class="product-category">TERRA CAFÉ</p>
          <h3 class="product-name">${product.name}</h3>
          <div class="product-price">
            <span class="price">${formatPrice(product.price)}</span>
            <button class="btn-add-cart" onclick="event.stopPropagation(); addToCart(${
              product.id
            })">+</button>
          </div>
        </div>
      </div>
    `
    )
    .join("");
}

// Initialize page
function initializePage() {
  if (typeof mockData !== "undefined") {
    window.products = createUnifiedProductsArray();
    loadProductDetail();
  } else {
    // Create fallback data for testing
    window.products = [
      // Coffee products
      {
        id: 101,
        name: "Phin Sữa Đá",
        category: "Cà phê",
        price: 29000,
        image: "./public/c1.jpg",
        description: "Cà phê phin truyền thống với sữa đá thơm ngon.",
      },
      {
        id: 102,
        name: "Bạc Xỉu",
        category: "Cà phê",
        price: 35000,
        image: "./public/c2.jpg",
        description: "Cà phê bạc xỉu đậm đà với sữa tươi.",
      },
      {
        id: 103,
        name: "Cà Phê Đen",
        category: "Cà phê",
        price: 25000,
        image: "./public/c3.jpg",
        description: "Cà phê đen nguyên chất, đậm đà.",
      },
      // Tea products
      {
        id: 301,
        name: "Trà Sen Vàng",
        category: "Trà",
        price: 45000,
        image: "./public/t1.jpg",
        description: "Trà sen vàng thơm mát, thanh khiết.",
      },
      {
        id: 302,
        name: "Trà Đào",
        category: "Trà",
        price: 45000,
        image: "./public/t2.jpg",
        description: "Trà đào tươi mát với vị ngọt thanh.",
      },
      // Bakery products
      {
        id: 401,
        name: "Bánh Mì Que Pate",
        category: "Bánh ngọt",
        price: 19000,
        image: "./public/b1.png",
        description: "Bánh mì que giòn tan với pate thơm ngon.",
      },
      {
        id: 402,
        name: "Bánh Mì Que Cà Phê Mai",
        category: "Bánh ngọt",
        price: 19000,
        image: "./public/b2.png",
        description: "Bánh mì que với hương vị cà phê mai độc đáo.",
      },
      {
        id: 403,
        name: "Bánh Mì Que Bơ Xôi Phô Mai",
        category: "Bánh ngọt",
        price: 25000,
        image: "./public/b3.png",
        description: "Bánh mì que với bơ xôi phô mai thơm béo.",
      },
      {
        id: 404,
        name: "Bánh Su Kem",
        category: "Bánh ngọt",
        price: 29000,
        image: "./public/img1.jpg",
        description: "Bánh su kem mềm mịn với lớp kem vanilla.",
      },
      {
        id: 405,
        name: "Bánh Sữa Chua Phô Mai",
        category: "Bánh ngọt",
        price: 39000,
        image: "./public/img2.jpg",
        description: "Bánh sữa chua phô mai mềm mịn, vị chua ngọt.",
      },
    ];
    loadProductDetail();
  }
}

// Try both DOMContentLoaded and window.onload
document.addEventListener("DOMContentLoaded", function () {
  setTimeout(initializePage, 100);
});

window.addEventListener("load", function () {
  setTimeout(initializePage, 100);

  // Add event listeners for size buttons
  document.querySelectorAll(".size-btn").forEach((btn) => {
    btn.addEventListener("click", function () {
      selectSize(this.dataset.size);
    });
  });
});
