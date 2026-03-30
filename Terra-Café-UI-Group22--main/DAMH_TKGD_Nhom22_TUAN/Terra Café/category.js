// Category Page JavaScript
document.addEventListener("DOMContentLoaded", function () {
  // Get category and search from URL parameters
  const urlParams = new URLSearchParams(window.location.search);
  const categoryParam = urlParams.get("category") || "coffee";
  const searchParam = urlParams.get("search") || "";

  // Category mapping
  const categoryMap = {
    all: "Tất cả sản phẩm",
    coffee: "Cà Phê",
    tea: "Trà",
    freeze: "Đá Xay",
    food: "Thức Ăn",
    other: "Khác",
  };

  // Products data (unified with other pages)
  const allProducts = [
    // Coffee products
    {
      id: 1,
      name: "Phin Sữa Đá",
      price: 29000,
      category: "coffee",
      image: "./public/c1.jpg",
    },
    {
      id: 2,
      name: "Phin Đen Đá",
      price: 25000,
      category: "coffee",
      image: "./public/c3.jpg",
    },
    {
      id: 3,
      name: "Bạc Sỉu Đá",
      price: 29000,
      category: "coffee",
      image: "./public/c2.jpg",
    },
    {
      id: 4,
      name: "Latte Đá",
      price: 45000,
      category: "coffee",
      image: "./public/c4.jpg",
    },
    {
      id: 5,
      name: "Caramel Macchiato",
      price: 55000,
      category: "coffee",
      image: "./public/c6.jpg",
    },
    {
      id: 6,
      name: "Cappuccino",
      price: 45000,
      category: "coffee",
      image: "./public/c4.jpg",
    },
    {
      id: 7,
      name: "Americano",
      price: 39000,
      category: "coffee",
      image: "./public/c5.jpg",
    },
    {
      id: 8,
      name: "Phin Sữa Nóng",
      price: 29000,
      category: "coffee",
      image: "./public/c1.jpg",
    },
    {
      id: 9,
      name: "Phin Đen Nóng",
      price: 25000,
      category: "coffee",
      image: "./public/c3.jpg",
    },
    {
      id: 10,
      name: "Bạc Xỉu Nóng",
      price: 29000,
      category: "coffee",
      image: "./public/c2.jpg",
    },
    {
      id: 11,
      name: "Mocha Nóng",
      price: 49000,
      category: "coffee",
      image: "./public/c6.jpg",
    },
    {
      id: 12,
      name: "Latte Nóng",
      price: 45000,
      category: "coffee",
      image: "./public/c4.jpg",
    },

    // Tea products
    {
      id: 13,
      name: "Trà Sen Vàng",
      price: 45000,
      category: "tea",
      image: "./public/t1.jpg",
    },
    {
      id: 14,
      name: "Trà Xanh Đậu Đỏ",
      price: 39000,
      category: "tea",
      image: "./public/t2.jpg",
    },
    {
      id: 15,
      name: "Trà Ô Long",
      price: 35000,
      category: "tea",
      image: "./public/t3.jpg",
    },
    {
      id: 16,
      name: "Trà Sữa Thái",
      price: 49000,
      category: "tea",
      image: "./public/t4.jpg",
    },

    // Freeze products
    {
      id: 17,
      name: "Freeze Trà Xanh",
      price: 55000,
      category: "freeze",
      image: "./public/t5.jpg",
    },
    {
      id: 18,
      name: "Freeze Chocolate",
      price: 59000,
      category: "freeze",
      image: "./public/t6.jpg",
    },
    {
      id: 19,
      name: "Freeze Caramel",
      price: 59000,
      category: "freeze",
      image: "./public/t7.jpg",
    },

    // Food products
    {
      id: 20,
      name: "Bánh Mì Thịt Nướng",
      price: 35000,
      category: "food",
      image: "./public/img1.jpg",
    },
    {
      id: 21,
      name: "Bánh Croissant",
      price: 25000,
      category: "food",
      image: "./public/img2.jpg",
    },
    {
      id: 22,
      name: "Salad Gà",
      price: 65000,
      category: "food",
      image: "./public/img3.jpg",
    },
  ];

  let currentProducts = [];
  let displayedProducts = [];
  let productsPerPage = 16; // 8 products per page (2 rows x 4 products)
  let currentPage = 1;
  let totalPages = 1;

  // Initialize page
  function initializePage() {
    currentPage = 1; // Reset to first page
    updatePageTitle();
    filterProductsByCategory();
    setupEventListeners();
    displayProducts();
  }

  // Update page title and breadcrumb
  function updatePageTitle() {
    let categoryName = categoryMap[categoryParam] || "Tất cả sản phẩm";

    if (searchParam) {
      categoryName = `Kết quả tìm kiếm: "${searchParam}"`;
    }

    document.getElementById("category-title").textContent = categoryName;
    document.getElementById("category-breadcrumb").textContent = categoryName;
    document.title = `${categoryName} - Terra Café;
  }

  // Filter products by category
  function filterProductsByCategory() {
    // First filter by category
    if (categoryParam === "all") {
      currentProducts = [...allProducts];
    } else {
      currentProducts = allProducts.filter(
        (product) => product.category === categoryParam
      );
    }

    // Then filter by search term if provided
    if (searchParam) {
      currentProducts = currentProducts.filter(
        (product) =>
          product.name.toLowerCase().includes(searchParam.toLowerCase()) ||
          (product.description &&
            product.description
              .toLowerCase()
              .includes(searchParam.toLowerCase()))
      );
    }

    // Show no products message if empty
    const noProductsEl = document.getElementById("no-products");
    if (currentProducts.length === 0) {
      noProductsEl.style.display = "block";
      document.getElementById("category-products").style.display = "none";
    } else {
      noProductsEl.style.display = "none";
      document.getElementById("category-products").style.display = "grid";
    }
  }

  // Display products
  function displayProducts() {
    const productsContainer = document.getElementById("category-products");

    // Calculate pagination
    totalPages = Math.ceil(currentProducts.length / productsPerPage);
    const startIndex = (currentPage - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;
    const productsToShow = currentProducts.slice(startIndex, endIndex);

    productsContainer.innerHTML = "";

    productsToShow.forEach((product) => {
      const productCard = createProductCard(product);
      productsContainer.appendChild(productCard);
    });

    // Update pagination
    renderPagination();

    // Hide load more button (we use pagination now)
    document.getElementById("load-more-container").style.display = "none";

    displayedProducts = productsToShow;
  }

  // Create product card
  function createProductCard(product) {
    const card = document.createElement("div");
    card.className = "product-card";
    card.onclick = () => goToProductDetail(product.id);

    const badgeHtml = product.badge
      ? `<div class="product-badge">${product.badge}</div>`
      : "";

    card.innerHTML = `
            <div class="product-image">
                ${badgeHtml}
                <img src="${product.image}" alt="${
      product.name
    }" onerror="this.src='./public/default-product.jpg'">
            </div>
            <div class="product-info">
                <div class="product-category">${
                  categoryMap[product.category] || "Sản phẩm"
                }</div>
                <div class="product-name">${product.name}</div>
                <div class="product-actions">
                    <div class="product-price">${formatPrice(
                      product.price
                    )}</div>
                    <button class="btn-add-cart" onclick="event.stopPropagation(); addToCart(${
                      product.id
                    })">+</button>
                </div>
            </div>
        `;

    return card;
  }

  // Format price
  function formatPrice(price) {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(price);
  }

  // Go to product detail
  function goToProductDetail(productId) {
    window.location.href = `product-detail.html?id=${productId}`;
  }

  // Add to cart
  window.addToCart = function (productId) {
    const product = allProducts.find((p) => p.id === productId);
    if (!product) return;

    // Get existing cart
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Check if product already exists
    const existingItem = cart.find((item) => item.id === productId);

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cart.push({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        quantity: 1,
        size: "M",
      });
    }

    // Save to localStorage
    localStorage.setItem("cart", JSON.stringify(cart));

    // Update cart count
    updateCartCount();

    // Show success message
    showAddToCartSuccess(product.name);
  };

  // Show add to cart success message
  function showAddToCartSuccess(productName) {
    // Create toast notification
    const toast = document.createElement("div");
    toast.className = "toast-notification";
    toast.innerHTML = `
            <i class="fas fa-check-circle"></i>
            <span>Đã thêm "${productName}" vào giỏ hàng</span>
        `;

    // Add toast styles
    toast.style.cssText = `
            position: fixed;
            top: 100px;
            right: 20px;
            background: #27ae60;
            color: white;
            padding: 15px 20px;
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.15);
            z-index: 10000;
            display: flex;
            align-items: center;
            gap: 10px;
            font-weight: 500;
            animation: slideInRight 0.3s ease;
        `;

    document.body.appendChild(toast);

    // Remove after 3 seconds
    setTimeout(() => {
      toast.style.animation = "slideOutRight 0.3s ease";
      setTimeout(() => {
        document.body.removeChild(toast);
      }, 300);
    }, 3000);
  }

  // Update load more button
  function updateLoadMoreButton() {
    const loadMoreContainer = document.getElementById("load-more-container");
    const totalProducts = currentProducts.length;
    const displayedCount = currentPage * productsPerPage;

    if (displayedCount < totalProducts) {
      loadMoreContainer.style.display = "block";
    } else {
      loadMoreContainer.style.display = "none";
    }
  }

  // Setup event listeners
  function setupEventListeners() {
    // Load more button
    document
      .getElementById("btn-load-more")
      .addEventListener("click", function () {
        currentPage++;
        displayProducts();
      });

    // Sort select
    document
      .getElementById("sort-select")
      .addEventListener("change", function () {
        const sortValue = this.value;
        sortProducts(sortValue);
        currentPage = 1;
        displayProducts();
      });

    // Filter labels
    const filterLabels = document.querySelectorAll(".filter-group label");
    filterLabels.forEach((label) => {
      label.addEventListener("click", function () {
        // Toggle active state
        filterLabels.forEach((l) => l.classList.remove("active"));
        this.classList.add("active");

        // Apply filter (placeholder for now)
        console.log("Filter applied:", this.textContent);
      });
    });

    // Copy code buttons
    document.querySelectorAll(".btn-copy-code").forEach((button) => {
      button.addEventListener("click", function () {
        const code = this.dataset.code;
        navigator.clipboard.writeText(code).then(() => {
          this.textContent = "Đã sao chép!";
          setTimeout(() => {
            this.textContent = "Sao chép mã";
          }, 2000);
        });
      });
    });
  }

  // Sort products
  function sortProducts(sortType) {
    switch (sortType) {
      case "price-asc":
        currentProducts.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        currentProducts.sort((a, b) => b.price - a.price);
        break;
      case "name-asc":
        currentProducts.sort((a, b) => a.name.localeCompare(b.name, "vi"));
        break;
      case "name-desc":
        currentProducts.sort((a, b) => b.name.localeCompare(a.name, "vi"));
        break;
      default:
        // Default order - restore original order
        filterProductsByCategory();
        break;
    }
  }

  // Render pagination
  function renderPagination() {
    const container = document.getElementById("paginationContainer");
    if (!container) return;

    let paginationHTML = "";

    // Page numbers only (no previous/next buttons to match the image)
    for (let i = 1; i <= totalPages; i++) {
      paginationHTML += `<button class="pagination-btn ${
        i === currentPage ? "active" : ""
      }" onclick="changePage(${i})">${i}</button>`;
    }

    // Next button (arrow pointing right)
    if (currentPage < totalPages) {
      paginationHTML += `<button class="pagination-btn" onclick="changePage(${
        currentPage + 1
      })">›</button>`;
    }

    container.innerHTML = paginationHTML;
  }

  // Change page
  function changePage(page) {
    if (page < 1 || page > totalPages) return;
    currentPage = page;
    displayProducts();

    // Scroll to top of products
    document
      .getElementById("category-products")
      .scrollIntoView({ behavior: "smooth" });
  }

  // Make changePage global so it can be called from HTML
  window.changePage = changePage;

  // Initialize page when DOM is loaded
  initializePage();
});

// Add CSS animations
const style = document.createElement("style");
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);
