// Mock data for tea and freeze products
const teaFreezeData = [
  {
    id: "tea1",
    name: "Trà Sen Vàng (Sen)",
    category: "TERRA CAFÉ",
    price: 45000,
    originalPrice: null,
    image: "./public/t1.jpg",
    badgeType: "sale",
    description:
      "Trà sen vàng thơm ngon, thanh mát với hương vị đặc trưng của sen tươi.",
    ingredients: "Trà xanh, hoa sen, đường, đá",
    nutrition: "Calories: 120, Đường: 25g, Caffeine: 30mg",
  },
  {
    id: "tea2",
    name: "Trà Sen Vàng (Sen)",
    category: "TERRA CAFÉ",
    price: 45000,
    originalPrice: null,
    image: "./public/t2.jpg",
    badgeType: "sale",
    description:
      "Trà sen vàng thơm ngon, thanh mát với hương vị đặc trưng của sen tươi.",
    ingredients: "Trà xanh, hoa sen, đường, đá",
    nutrition: "Calories: 120, Đường: 25g, Caffeine: 30mg",
  },
  {
    id: "tea3",
    name: "Trà Thanh Đào",
    category: "TERRA CAFÉ",
    price: 45000,
    originalPrice: null,
    image: "./public/t3.jpg",
    badge: null,
    badgeType: null,
    description: "Trà đào tươi mát với vị ngọt thanh của đào và trà xanh.",
    ingredients: "Trà xanh, đào tươi, đường, đá",
    nutrition: "Calories: 130, Đường: 28g, Caffeine: 25mg",
  },
  {
    id: "tea4",
    name: "Trà Thanh Đào",
    category: "TERRA CAFÉ",
    price: 45000,
    originalPrice: null,
    image: "./public/t4.jpg",
    badgeType: "today",
    description: "Trà đào tươi mát với vị ngọt thanh của đào và trà xanh.",
    ingredients: "Trà xanh, đào tươi, đường, đá",
    nutrition: "Calories: 130, Đường: 28g, Caffeine: 25mg",
  },
  {
    id: "tea5",
    name: "Trà Thạch Vải",
    category: "TERRA CAFÉ",
    price: 45000,
    originalPrice: null,
    image: "./public/t5.jpg",
    badge: null,
    badgeType: null,
    description: "Trà vải thơm ngon với thạch dai giòn, vị ngọt tự nhiên.",
    ingredients: "Trà đen, vải tươi, thạch, đường, đá",
    nutrition: "Calories: 140, Đường: 30g, Caffeine: 35mg",
  },
  {
    id: "tea6",
    name: "Trà Xanh Rắn Đỏ",
    category: "TERRA CAFÉ",
    price: 45000,
    originalPrice: null,
    image: "./public/t6.jpg",
    badge: null,
    badgeType: null,
    description: "Trà xanh thanh mát kết hợp với rắn đỏ giòn ngon.",
    ingredients: "Trà xanh, rắn đỏ, đường, đá",
    nutrition: "Calories: 110, Đường: 22g, Caffeine: 40mg",
  },
  {
    id: "tea7",
    name: "Freeze Trà Xanh",
    category: "TERRA CAFÉ",
    price: 55000,
    originalPrice: null,
    image: "./public/t7.jpg",
    badgeType: "sale",
    description:
      "Freeze trà xanh mát lạnh, kem béo ngậy hòa quyện cùng trà xanh.",
    ingredients: "Trà xanh, kem tươi, đường, đá xay",
    nutrition: "Calories: 180, Đường: 35g, Caffeine: 45mg",
  },
  {
    id: "tea8",
    name: "Trà Ngọc Trai Dâu Tằm",
    category: "TERRA CAFÉ",
    price: 59000,
    originalPrice: null,
    image: "./public/t8.jpg",
    badgeType: "today",
    description: "Trà ngọc trai với vị dâu tằm ngọt ngào, trân châu dai giòn.",
    ingredients: "Trà đen, dâu tằm, trân châu, đường, đá",
    nutrition: "Calories: 160, Đường: 32g, Caffeine: 30mg",
  },
  {
    id: "tea9",
    name: "Cookies & Cream",
    category: "TERRA CAFÉ",
    price: 55000,
    originalPrice: null,
    image: "./public/t9.jpg",
    badge: null,
    badgeType: null,
    description: "Freeze cookies & cream với bánh quy giòn tan và kem vanilla.",
    ingredients: "Kem vanilla, bánh quy, sữa tươi, đá xay",
    nutrition: "Calories: 220, Đường: 40g, Caffeine: 0mg",
  },
  {
    id: "tea10",
    name: "Freeze Kem Mây Dâu Tằm",
    category: "TERRA CAFÉ",
    price: 55000,
    originalPrice: null,
    image: "./public/t10.jpg",
    badgeType: "today",
    description: "Freeze kem mây dâu tằm mềm mịn, vị dâu tằm tự nhiên.",
    ingredients: "Kem mây, dâu tằm, sữa tươi, đá xay",
    nutrition: "Calories: 200, Đường: 38g, Caffeine: 0mg",
  },
];

// Mock data for news
const newsData = [
  {
    id: "news1",
    title: "KHOE SẮC THÁNG HƯƠNG - TRÀ SEN VÀNG (MỚI) ĐÃ CÓ MẶT",
    image: "./public/tt1.png",
    source: "Terra Café E-commerce Web",
    date: "Thứ 2, 25/03/2024",
    excerpt:
      "Trà Sen Vàng mới với hương vị đặc biệt đã chính thức có mặt tại Terra Café...",
    content: "Nội dung chi tiết bài viết về Trà Sen Vàng...",
  },
  {
    id: "news2",
    title: "PHINDI CASSIA - QUÊ ẤM PHIN EM, PHONG VỊ ĐỘC ĐÁO",
    image: "./public/tt2.png",
    source: "Terra Café E-commerce Web",
    date: "Thứ 2, 25/03/2024",
    excerpt:
      "Phindi Cassia với hương quế ấm áp, mang đến trải nghiệm cà phê hoàn toàn mới...",
    content: "Nội dung chi tiết bài viết về Phindi Cassia...",
  },
  {
    id: "news3",
    title: "CHILL HÈ MALDIVES - 100% TRÚNG VOUCHER",
    image: "./public/tt3.png",
    source: "Terra Café E-commerce Web",
    date: "Thứ 2, 25/03/2024",
    excerpt:
      "Chương trình khuyến mãi hè với cơ hội trúng voucher 100% khi mua đồ uống...",
    content: "Nội dung chi tiết bài viết về chương trình Chill hè Maldives...",
  },
  {
    id: "news4",
    title: "CHILL HÈ CÙNG TERRA CAFÉ! THÀNH MẬT ĐẦU TÂM, THƯỞNG THỨC NGAY!",
    image: "./public/tt4.jpg",
    source: "Terra Café E-commerce Web",
    date: "Thứ 2, 25/03/2024",
    excerpt:
      "Mùa hè này, hãy cùng Terra Café thưởng thức những món đồ uống mát lạnh...",
    content:
      "Nội dung chi tiết bài viết về chương trình Chill hè cùng Terra Café...",
  },
];

// Mock Data for Products
const mockData = {
  tea: teaFreezeData,
  flashSale: [
    {
      id: "fs1",
      name: "LY GIỮ NHIỆT TERRA CAFÉ",
      category: "TERRA CAFÉ",
      currentPrice: 349000,
      originalPrice: 529000,
      discount: 34,
      image: "./public/f1.png",
      stockSold: 304,
      inStock: true,
    },
    {
      id: "fs2",
      name: "CÀ PHÊ HÒA TAN 3 TRONG 1 THƠM NGON",
      category: "TERRA CAFÉ",
      currentPrice: 179000,
      originalPrice: 199000,
      discount: 10,
      image: "./public/f2.jpg",
      stockSold: 324,
      inStock: true,
    },
    {
      id: "fs3",
      name: "BÌNH GIỮ NHIỆT HOA TIẾT LÁ CÀ PHÊ",
      category: "TERRA CAFÉ",
      currentPrice: 499000,
      originalPrice: 529000,
      discount: 6,
      image: "./public/f3.png",
      stockSold: 304,
      inStock: true,
    },
    {
      id: "fs4",
      name: "BÌNH GIỮ NHIỆT LOGO MÀU NÂNG",
      category: "TERRA CAFÉ",
      currentPrice: 499000,
      originalPrice: 520000,
      discount: 4,
      image: "./public/f4.png",
      stockSold: 392,
      inStock: true,
    },
    {
      id: "fs5",
      name: "LY GIỮ NHIỆT TERRA CAFÉ",
      category: "TERRA CAFÉ",
      currentPrice: 349000,
      originalPrice: 499000,
      discount: 30,
      image: "./public/f5.png",
      stockSold: 249,
      inStock: true,
    },
    {
      id: "fs6",
      name: "BÌNH NHÁM GIỮ NHIỆT LOGO",
      category: "TERRA CAFÉ",
      currentPrice: 349000,
      originalPrice: 439000,
      discount: 21,
      image: "./public/f6.jpg",
      stockSold: 344,
      inStock: true,
    },
    {
      id: "fs7",
      name: "BÌNH NHÁM GIỮ NHIỆT LOGO",
      category: "TERRA CAFÉ",
      currentPrice: 349000,
      originalPrice: 439000,
      discount: 21,
      image: "./public/f7.jpg",
      stockSold: 216,
      inStock: true,
    },
    {
      id: "fs8",
      name: "LY THỦY TINH ỐNG HÚT HOA",
      category: "TERRA CAFÉ",
      currentPrice: 299000,
      originalPrice: 439000,
      discount: 32,
      image: "./public/f8.png",
      stockSold: 204,
      inStock: true,
    },
    {
      id: "fs9",
      name: "LY THỦY TINH ỐNG HÚT HOA",
      category: "TERRA CAFÉ",
      currentPrice: 289000,
      originalPrice: 329000,
      discount: 12,
      image: "./public/f9.png",
      stockSold: 300,
      inStock: true,
    },
    {
      id: "fs10",
      name: "CÀ PHÊ HÒA TAN 3 TRONG 1",
      category: "TERRA CAFÉ",
      currentPrice: 75000,
      originalPrice: 163000,
      discount: 54,
      image: "./public/f10.jpg",
      stockSold: 244,
      inStock: true,
    },
    {
      id: "fs11",
      name: "BÌNH GIỮ NHIỆT TERRA CAFÉ XANH LÁ",
      category: "TERRA CAFÉ",
      currentPrice: 399000,
      originalPrice: 529000,
      discount: 25,
      image: "./public/f1.png",
      stockSold: 156,
      inStock: true,
    },
    {
      id: "fs12",
      name: "LY THỦY TINH ỐNG HÚT VÀNG",
      category: "TERRA CAFÉ",
      currentPrice: 259000,
      originalPrice: 329000,
      discount: 21,
      image: "./public/f8.png",
      stockSold: 189,
      inStock: true,
    },
    {
      id: "fs13",
      name: "BÌNH GIỮ NHIỆT HOA TIẾT ĐỎ",
      category: "TERRA CAFÉ",
      currentPrice: 449000,
      originalPrice: 529000,
      discount: 15,
      image: "./public/f3.png",
      stockSold: 278,
      inStock: true,
    },
    {
      id: "fs14",
      name: "LY GIỮ NHIỆT MÀU CAM",
      category: "TERRA CAFÉ",
      currentPrice: 319000,
      originalPrice: 399000,
      discount: 20,
      image: "./public/f5.png",
      stockSold: 167,
      inStock: true,
    },
    {
      id: "fs15",
      name: "CÀ PHÊ HÒA TAN PREMIUM",
      category: "TERRA CAFÉ",
      currentPrice: 199000,
      originalPrice: 249000,
      discount: 20,
      image: "./public/f2.jpg",
      stockSold: 312,
      inStock: true,
    },
    {
      id: "fs16",
      name: "BÌNH NHÁM GIỮ NHIỆT XANH DƯƠNG",
      category: "TERRA CAFÉ",
      currentPrice: 379000,
      originalPrice: 459000,
      discount: 17,
      image: "./public/f6.jpg",
      stockSold: 203,
      inStock: true,
    },
  ],
  coffeeDaily: [
    {
      id: "cd1",
      name: "Phin Sữa Đá",
      category: "TERRA CAFÉ",
      price: 29000,
      image: "./public/c1.jpg",
      inStock: true,
    },
    {
      id: "cd2",
      name: "Bạc Xỉu Đá",
      category: "TERRA CAFÉ",
      price: 29000,
      image: "./public/c2.jpg",
      inStock: true,
    },
    {
      id: "cd3",
      name: "Phin Đen Đá",
      category: "TERRA CAFÉ",
      price: 29000,
      image: "./public/c3.jpg",
      inStock: true,
    },
    {
      id: "cd4",
      name: "Cappuccino",
      category: "TERRA CAFÉ",
      price: 65000,
      image: "./public/c4.jpg",
      inStock: true,
    },
    {
      id: "cd5",
      name: "Americano",
      category: "TERRA CAFÉ",
      price: 45000,
      image: "./public/c5.jpg",
      inStock: true,
    },
    {
      id: "cd6",
      name: "Caramel Macchiato",
      category: "TERRA CAFÉ",
      price: 69000,
      image: "./public/c6.jpg",
      inStock: true,
    },
    {
      id: "cd7",
      name: "Phin Hạnh Nhân",
      category: "TERRA CAFÉ",
      price: 45000,
      image: "./public/c7.jpg",
      inStock: true,
    },
    {
      id: "cd8",
      name: "Phindi Choco",
      category: "TERRA CAFÉ",
      price: 45000,
      image: "./public/c8.jpg",
      inStock: true,
    },
    {
      id: "cd9",
      name: "Phindi Kem Sữa",
      category: "TERRA CAFÉ",
      price: 45000,
      image: "./public/c9.jpg",
      inStock: true,
    },
    {
      id: "cd10",
      name: "Mocha Đá",
      category: "TERRA CAFÉ",
      price: 69000,
      image: "./public/c10.jpg",
      inStock: true,
    },
  ],
  newProducts: [
    {
      id: "np1",
      name: "Phindi Xoài Dừa",
      category: "PHINDI COFFEE",
      price: 55000,
      image: "./public/img1.jpg",
      inStock: true,
    },
    {
      id: "np2",
      name: "Phan Sữa Dừa",
      category: "PHINDI COFFEE",
      price: 55000,
      image: "./public/img2.jpg",
      isNew: true,
      inStock: true,
    },
    {
      id: "np3",
      name: "Americano Nước Dừa",
      category: "TERRA CAFÉ",
      price: 55000,
      image: "./public/img3.jpg",
      isNew: true,
      inStock: true,
    },
    {
      id: "np4",
      name: "Cà Phê Freeze Dừa",
      category: "TERRA CAFÉ",
      price: 75000,
      image: "./public/img4.jpg",
      isNew: true,
      inStock: true,
    },
    {
      id: "np5",
      name: "Trà Sữa Mochi Đài Loan",
      category: "TERRA CAFÉ",
      price: 65000,
      image: "./public/img5.jpg",
      isNew: true,
      inStock: true,
      special: "taiwan",
    },
  ],
  bakery: [
    {
      id: "bk1",
      name: "Bánh Mì Que Pate",
      category: "Bánh ngọt",
      price: 19000,
      image: "./public/b1.png",
      inStock: true,
      description: "Bánh mì que giòn tan với pate thơm ngon, hương vị đậm đà.",
      ingredients: "Bánh mì, pate, rau thơm",
      nutrition: "Calories: 180, Protein: 8g, Carbs: 25g",
    },
    {
      id: "bk2",
      name: "Bánh Mì Que Cà Phê Mai",
      category: "Bánh ngọt",
      price: 19000,
      image: "./public/b2.png",
      inStock: true,
      description: "Bánh mì que với hương vị cà phê mai độc đáo, thơm ngon.",
      ingredients: "Bánh mì, cà phê mai, kem",
      nutrition: "Calories: 190, Protein: 6g, Carbs: 28g",
    },
    {
      id: "bk3",
      name: "Bánh Mì Que Bơ Xôi Phô Mai",
      category: "Bánh ngọt",
      price: 25000,
      image: "./public/b3.png",
      inStock: true,
      description: "Bánh mì que với bơ xôi phô mai thơm béo, hấp dẫn.",
      ingredients: "Bánh mì, bơ, xôi, phô mai",
      nutrition: "Calories: 220, Protein: 9g, Carbs: 30g",
    },
    {
      id: "bk4",
      name: "Bánh Su Kem",
      category: "Bánh ngọt",
      price: 29000,
      image: "./public/img1.jpg",
      inStock: true,
      description:
        "Bánh su kem mềm mịn với lớp kem vanilla thơm ngon bên trong.",
      ingredients: "Bột mì, trứng, kem vanilla, đường",
      nutrition: "Calories: 250, Protein: 5g, Carbs: 35g",
    },
    {
      id: "bk5",
      name: "Bánh Sữa Chua Phô Mai",
      category: "Bánh ngọt",
      price: 39000,
      image: "./public/img2.jpg",
      inStock: true,
      description: "Bánh sữa chua phô mai mềm mịn, vị chua ngọt hài hòa.",
      ingredients: "Sữa chua, phô mai, bột mì, đường",
      nutrition: "Calories: 280, Protein: 12g, Carbs: 32g",
    },
    {
      id: "bk6",
      name: "Bánh Croissant Bơ",
      category: "Bánh ngọt",
      price: 35000,
      image: "./public/img3.jpg",
      inStock: true,
      description: "Bánh croissant bơ giòn tan, thơm béo với lớp bơ tươi.",
      ingredients: "Bột mì, bơ tươi, trứng, sữa",
      nutrition: "Calories: 320, Protein: 8g, Carbs: 28g",
    },
    {
      id: "bk7",
      name: "Bánh Tiramisu Mini",
      category: "Bánh ngọt",
      price: 45000,
      image: "./public/img4.jpg",
      inStock: true,
      description:
        "Bánh tiramisu mini với hương vị cà phê đậm đà, kem mascarpone mềm mịn.",
      ingredients: "Mascarpone, cà phê espresso, bánh ladyfinger, cacao",
      nutrition: "Calories: 290, Protein: 6g, Carbs: 25g",
    },
    {
      id: "bk8",
      name: "Bánh Muffin Chocolate",
      category: "Bánh ngọt",
      price: 32000,
      image: "./public/img5.jpg",
      inStock: true,
      description:
        "Bánh muffin chocolate mềm xốp với chocolate chip thơm ngon.",
      ingredients: "Bột mì, chocolate, trứng, sữa, đường",
      nutrition: "Calories: 260, Protein: 5g, Carbs: 38g",
    },
  ],
};

// Shopping Cart Management
class ShoppingCart {
  constructor() {
    this.items = JSON.parse(localStorage.getItem("cart")) || [];
    this.updateCartDisplay();
  }

  addItem(productId, productData, quantity = 1) {
    const existingItem = this.items.find((item) => item.id === productId);

    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      this.items.push({
        id: productId,
        name: productData.name,
        price: productData.currentPrice || productData.price,
        image: productData.image,
        category: productData.category,
        quantity: quantity,
      });
    }

    this.saveCart();
    this.updateCartDisplay();
    this.showAddToCartNotification(productData.name);
  }

  removeItem(productId) {
    this.items = this.items.filter((item) => item.id !== productId);
    this.saveCart();
    this.updateCartDisplay();
  }

  updateQuantity(productId, quantity) {
    const item = this.items.find((item) => item.id === productId);
    if (item) {
      if (quantity <= 0) {
        this.removeItem(productId);
      } else {
        item.quantity = quantity;
        this.saveCart();
        this.updateCartDisplay();
      }
    }
  }

  getTotalItems() {
    return this.items.reduce((total, item) => total + item.quantity, 0);
  }

  getTotalPrice() {
    return this.items.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  }

  saveCart() {
    localStorage.setItem("cart", JSON.stringify(this.items));
  }

  updateCartDisplay() {
    const cartCount = document.querySelector(".cart-count-quantity");
    const totalItems = this.getTotalItems();

    if (cartCount) {
      cartCount.textContent = totalItems;
      cartCount.style.display = totalItems > 0 ? "flex" : "none";
    }

    // Update cart button in header if it exists
    this.updateHeaderCartDisplay();
  }

  updateHeaderCartDisplay() {
    // Wait for header to load if not already loaded
    const checkAndUpdate = () => {
      const cartCount = document.querySelector(".cart-count-quantity");
      const totalItems = this.getTotalItems();

      if (cartCount) {
        cartCount.textContent = totalItems;
        // Don't hide cart count in components.js version
      } else {
        // If cart count element doesn't exist, try again after a short delay
        setTimeout(checkAndUpdate, 100);
      }
    };

    checkAndUpdate();

    // Also try to call components.js updateCartDisplay if available
    if (window.updateCartDisplay) {
      window.updateCartDisplay();
    }
  }

  showAddToCartNotification(productName) {
    // Create notification element
    const notification = document.createElement("div");
    notification.className = "cart-notification";
    notification.innerHTML = `
      <div class="notification-content">
        <span class="notification-icon">✓</span>
        <span class="notification-text">Đã thêm "${productName}" vào giỏ hàng</span>
      </div>
    `;

    document.body.appendChild(notification);

    // Show notification
    setTimeout(() => {
      notification.classList.add("show");
    }, 100);

    // Hide notification after 3 seconds
    setTimeout(() => {
      notification.classList.remove("show");
      setTimeout(() => {
        document.body.removeChild(notification);
      }, 300);
    }, 3000);
  }
}

// Initialize cart
const cart = new ShoppingCart();

// Add event listeners for add to cart buttons
document.addEventListener("DOMContentLoaded", function () {
  // Flash Sale products - use event delegation for dynamic content
  document.addEventListener("click", function (e) {
    if (
      e.target.classList.contains("btn-add-cart") &&
      e.target.classList.contains("flash")
    ) {
      e.preventDefault();
      e.stopPropagation();

      const productCard = e.target.closest(".product-card");
      if (productCard) {
        const productIndex = Array.from(
          productCard.parentElement.children
        ).indexOf(productCard);
        const isSecondRow = productCard.closest(".second-row");
        const actualIndex = isSecondRow ? productIndex + 5 : productIndex;

        const product = mockData.flashSale[actualIndex];
        if (product) {
          cart.addItem(product.id, product);
        }
      }
    }
  });

  // Coffee Daily products - use event delegation
  document.addEventListener("click", function (e) {
    if (
      e.target.classList.contains("btn-add-cart") &&
      e.target.classList.contains("coffee")
    ) {
      e.preventDefault();
      e.stopPropagation();

      const productCard = e.target.closest(".product-card");
      if (productCard) {
        const productIndex = Array.from(
          productCard.parentElement.children
        ).indexOf(productCard);
        const isSecondRow = productCard.closest(".second-row");
        const actualIndex = isSecondRow ? productIndex + 5 : productIndex;

        const product = mockData.coffeeDaily[actualIndex];
        if (product) {
          cart.addItem(product.id, product);
        }
      }
    }
  });

  // New Products
  document
    .querySelectorAll(".btn-add-cart:not(.flash):not(.coffee)")
    .forEach((button, index) => {
      button.addEventListener("click", function (e) {
        e.preventDefault();
        const product = mockData.newProducts[index];
        if (product) {
          cart.addItem(product.id, product);
        }
      });
    });

  // Render products first
  renderProducts();

  // Add click handlers for product cards (open modal)
  document.addEventListener("click", function (e) {
    const productCard = e.target.closest(".product-card");
    if (productCard && !e.target.closest(".btn-add-cart")) {
      const productId = productCard.dataset.productId;
      const productType = productCard.dataset.productType;
      // Redirect to product detail page instead of opening modal
      window.location.href = `product-detail.html?id=${productId}`;
    }
  });

  // Add click handlers for add to cart buttons (quick add)
  document.addEventListener("click", function (e) {
    if (e.target.closest(".btn-add-cart")) {
      e.preventDefault();
      e.stopPropagation();

      const productCard = e.target.closest(".product-card");
      const productId = productCard.dataset.productId;
      const productType = productCard.dataset.productType;

      const product = getProductById(productId, productType);
      if (product) {
        cart.addItem(product.id, product);
      }
    }
  });

  // Category menu functionality
  const categoryLinks = document.querySelectorAll(".category-link");
  categoryLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const categoryItem = this.parentElement;
      const subcategoryMenu = categoryItem.querySelector(".subcategory-menu");

      // Close all other expanded menus
      document.querySelectorAll(".category-item.expanded").forEach((item) => {
        if (item !== categoryItem) {
          item.classList.remove("expanded");
        }
      });

      // Remove active class from all links
      categoryLinks.forEach((l) => l.classList.remove("active"));

      // Toggle current menu
      if (subcategoryMenu) {
        categoryItem.classList.toggle("expanded");
      }

      // Add active class to clicked link
      this.classList.add("active");
    });
  });

  // Modal functionality
  initModal();
});

// Format currency
function formatCurrency(amount) {
  return new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  })
    .format(amount)
    .replace("₫", "đ");
}

// Render products from mock data
function renderProducts() {
  renderFlashSaleProducts();
  renderCoffeeDailyProducts();
  renderNewProducts();
  renderTeaFreeze();
  renderNews();
}

function renderFlashSaleProducts() {
  const container = document.querySelector(".flash-products-grid");
  const secondRowContainer = document.querySelector(
    ".flash-products-grid.second-row"
  );

  if (container && secondRowContainer) {
    // First row (5 products)
    container.innerHTML = mockData.flashSale
      .slice(0, 5)
      .map(
        (product) => `
      <div class="product-card flash" data-product-id="${parseInt(
        product.id.replace("fs", "")
      )}" data-product-type="flashSale">
        <div class="product-image">
          <img src="${product.image}" alt="${product.name}" />
          <div class="discount-badge">-${product.discount}%</div>
        </div>
        <div class="product-info">
          <p class="product-category">${product.category}</p>
          <h3>${product.name}</h3>
          <div class="product-price">
            <span class="current-price">${formatCurrency(
              product.currentPrice
            )}</span>
            <span class="original-price">${formatCurrency(
              product.originalPrice
            )}</span>
            <button class="btn-add-cart flash">+</button>
          </div>
          <div class="stock-info">
            <span class="stock-sold">${product.stockSold} sản phẩm đã bán</span>
          </div>
        </div>
      </div>
    `
      )
      .join("");

    // Second row (5 products)
    secondRowContainer.innerHTML = mockData.flashSale
      .slice(5, 10)
      .map(
        (product) => `
      <div class="product-card flash" data-product-id="${parseInt(
        product.id.replace("fs", "")
      )}" data-product-type="flashSale">
        <div class="product-image">
          <img src="${product.image}" alt="${product.name}" />
          <div class="discount-badge">-${product.discount}%</div>
        </div>
        <div class="product-info">
          <p class="product-category">${product.category}</p>
          <h3>${product.name}</h3>
          <div class="product-price">
            <span class="current-price">${formatCurrency(
              product.currentPrice
            )}</span>
            <span class="original-price">${formatCurrency(
              product.originalPrice
            )}</span>
            <button class="btn-add-cart flash">+</button>
          </div>
          <div class="stock-info">
            <span class="stock-sold">${product.stockSold} sản phẩm</span>
          </div>
        </div>
      </div>
    `
      )
      .join("");
  }
}

function renderCoffeeDailyProducts() {
  const container = document.querySelector(".coffee-products-grid");
  const secondRowContainer = document.querySelector(
    ".coffee-products-grid.second-row"
  );

  if (container && secondRowContainer) {
    // First row (5 products)
    container.innerHTML = mockData.coffeeDaily
      .slice(0, 5)
      .map(
        (product) => `
      <div class="product-card coffee" data-product-id="${
        parseInt(product.id.replace("cd", "")) + 100
      }" data-product-type="coffeeDaily">
        <div class="product-image">
          <img src="${product.image}" alt="${product.name}" />
          ${
            product.label
              ? `<div class="product-label ${product.label}">${
                  product.label === "bestseller" ? "BÁN CHẠY!" : "THỦ NGAY!"
                }</div>`
              : ""
          }
        </div>
        <div class="product-info">
          <p class="product-category">${product.category}</p>
          <h3>${product.name}</h3>
          <div class="product-price">
            <span class="price">${formatCurrency(product.price)}</span>
            <button class="btn-add-cart coffee">+</button>
          </div>
        </div>
      </div>
    `
      )
      .join("");

    // Second row (5 products)
    secondRowContainer.innerHTML = mockData.coffeeDaily
      .slice(5, 10)
      .map(
        (product) => `
      <div class="product-card coffee" data-product-id="${
        parseInt(product.id.replace("cd", "")) + 100
      }" data-product-type="coffeeDaily">
        <div class="product-image">
          <img src="${product.image}" alt="${product.name}" />
          ${
            product.label
              ? `<div class="product-label ${product.label}">${
                  product.label === "bestseller" ? "BÁN CHẠY!" : "THỦ NGAY!"
                }</div>`
              : ""
          }
        </div>
        <div class="product-info">
          <p class="product-category">${product.category}</p>
          <h3>${product.name}</h3>
          <div class="product-price">
            <span class="price">${formatCurrency(product.price)}</span>
            <button class="btn-add-cart coffee">+</button>
          </div>
        </div>
      </div>
    `
      )
      .join("");
  }
}

function renderNewProducts() {
  const container = document.querySelector(".products-grid");

  if (container) {
    container.innerHTML = mockData.newProducts
      .map(
        (product) => `
      <div class="product-card" data-product-id="${
        parseInt(product.id.replace("np", "")) + 200
      }" data-product-type="newProducts">
        <div class="product-image">
          <img src="${product.image}" alt="${product.name}" />
          <div class="product-badge ${product.special || "new"}">${
          product.special === "taiwan" ? "TAIWAN" : "NEW"
        }</div>
        </div>
        <div class="product-info">
          <p class="product-category">${product.category}</p>
          <h3>${product.name}</h3>
          <div class="product-price">
            <span class="price">${formatCurrency(product.price)}</span>
            <button class="btn-add-cart">+</button>
          </div>
        </div>
      </div>
    `
      )
      .join("");
  }
}

// Helper function to get product by ID
function getProductById(productId, productType) {
  // Convert productId to number for comparison
  const numericId = parseInt(productId);

  switch (productType) {
    case "flashSale":
      return mockData.flashSale.find((p) => {
        const pId = parseInt(p.id.replace("fs", "")) + 100;
        return pId === numericId;
      });
    case "coffeeDaily":
      return mockData.coffeeDaily.find((p) => {
        const pId = parseInt(p.id.replace("cd", "")) + 100;
        return pId === numericId;
      });
    case "newProducts":
      return mockData.newProducts.find((p) => {
        const pId = parseInt(p.id.replace("np", "")) + 200;
        return pId === numericId;
      });
    case "tea":
      return teaFreezeData.find((p) => {
        const pId = parseInt(p.id.replace("tea", "")) + 300;
        return pId === numericId;
      });
    case "bakery":
      return mockData.bakery.find((p) => {
        const pId = parseInt(p.id.replace("bk", "")) + 400;
        return pId === numericId;
      });
    default:
      return null;
  }
}

// Modal functionality
let currentProduct = null;
let selectedSize = "M";
let modalQuantity = 1;

function initModal() {
  const modal = document.getElementById("productModal");
  const closeBtn = document.querySelector(".close");
  const decreaseBtn = document.getElementById("decreaseQty");
  const increaseBtn = document.getElementById("increaseQty");
  const quantityInput = document.getElementById("modalQuantity");
  const addToCartBtn = document.getElementById("addToCartModal");
  const sizeButtons = document.querySelectorAll(".size-btn");

  // Close modal events
  closeBtn.addEventListener("click", closeModal);
  modal.addEventListener("click", function (e) {
    if (e.target === modal) {
      closeModal();
    }
  });

  // Quantity controls
  decreaseBtn.addEventListener("click", function () {
    if (modalQuantity > 1) {
      modalQuantity--;
      quantityInput.value = modalQuantity;
    }
  });

  increaseBtn.addEventListener("click", function () {
    if (modalQuantity < 10) {
      modalQuantity++;
      quantityInput.value = modalQuantity;
    }
  });

  quantityInput.addEventListener("change", function () {
    const value = parseInt(this.value);
    if (value >= 1 && value <= 10) {
      modalQuantity = value;
    } else {
      this.value = modalQuantity;
    }
  });

  // Size selection
  sizeButtons.forEach((btn) => {
    btn.addEventListener("click", function () {
      sizeButtons.forEach((b) => b.classList.remove("active"));
      this.classList.add("active");
      selectedSize = this.dataset.size;
    });
  });

  // Add to cart from modal
  addToCartBtn.addEventListener("click", function () {
    if (currentProduct) {
      cart.addItem(currentProduct.id, currentProduct, modalQuantity);
      closeModal();
    }
  });

  // ESC key to close modal
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      closeModal();
    }
  });
}

function openProductModal(productId, productType) {
  const product = getProductById(productId, productType);
  if (!product) return;

  currentProduct = product;
  modalQuantity = 1;
  selectedSize = "M";

  // Update modal content
  document.getElementById("modalProductName").textContent = product.name;
  document.getElementById("modalProductTitle").textContent = product.name;
  document.getElementById("modalProductCategory").textContent =
    product.category;
  document.getElementById("modalProductImage").src = product.image;
  document.getElementById("modalQuantity").value = 1;

  // Update price display
  const currentPriceEl = document.getElementById("modalCurrentPrice");
  const originalPriceEl = document.getElementById("modalOriginalPrice");
  const discountBadgeEl = document.getElementById("modalDiscountBadge");

  if (product.currentPrice) {
    // Flash sale product
    currentPriceEl.textContent = formatCurrency(product.currentPrice);
    originalPriceEl.textContent = formatCurrency(product.originalPrice);
    originalPriceEl.style.display = "inline";
    discountBadgeEl.textContent = `-${product.discount}%`;
    discountBadgeEl.style.display = "inline";
  } else {
    // Regular product
    currentPriceEl.textContent = formatCurrency(product.price);
    originalPriceEl.style.display = "none";
    discountBadgeEl.style.display = "none";
  }

  // Reset size selection
  document.querySelectorAll(".size-btn").forEach((btn) => {
    btn.classList.remove("active");
    if (btn.dataset.size === "M") {
      btn.classList.add("active");
    }
  });

  // Show modal
  document.getElementById("productModal").style.display = "block";
  document.body.style.overflow = "hidden";
}

function closeModal() {
  document.getElementById("productModal").style.display = "none";
  document.body.style.overflow = "auto";
  currentProduct = null;
}

// Coupon functionality
function copyCode(code) {
  // Copy to clipboard
  navigator.clipboard
    .writeText(code)
    .then(() => {
      // Show success notification
      showNotification(`Đã sao chép mã "${code}" vào clipboard!`, "success");
    })
    .catch(() => {
      // Fallback for older browsers
      const textArea = document.createElement("textarea");
      textArea.value = code;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      showNotification(`Đã sao chép mã "${code}" vào clipboard!`, "success");
    });
}

function showConditions(code) {
  let conditions = "";

  switch (code) {
    case "TANG50K":
      conditions = `
        <h3>Điều kiện áp dụng mã TANG50K:</h3>
        <ul>
          <li>Giảm 50.000đ cho đơn hàng từ 199.000đ trở lên</li>
          <li>Áp dụng cho tất cả sản phẩm</li>
          <li>Không áp dụng cùng với khuyến mãi khác</li>
          <li>Có hiệu lực đến hết tháng này</li>
          <li>Mỗi khách hàng chỉ sử dụng 1 lần</li>
        </ul>
      `;
      break;
    case "TANG35K":
      conditions = `
        <h3>Điều kiện áp dụng mã TANG35K:</h3>
        <ul>
          <li>Giảm 35.000đ cho đơn hàng từ 149.000đ trở lên</li>
          <li>Áp dụng cho tất cả sản phẩm</li>
          <li>Không áp dụng cùng với khuyến mãi khác</li>
          <li>Có hiệu lực đến hết tháng này</li>
          <li>Mỗi khách hàng chỉ sử dụng 1 lần</li>
        </ul>
      `;
      break;
    case "TANG20K":
      conditions = `
        <h3>Điều kiện áp dụng mã TANG20K:</h3>
        <ul>
          <li>Giảm 20.000đ cho đơn hàng từ 129.000đ trở lên</li>
          <li>Áp dụng cho tất cả sản phẩm</li>
          <li>Không áp dụng cùng với khuyến mãi khác</li>
          <li>Có hiệu lực đến hết tháng này</li>
          <li>Mỗi khách hàng chỉ sử dụng 1 lần</li>
        </ul>
      `;
      break;
  }

  showModal("Điều kiện sử dụng mã giảm giá", conditions);
}

function showNotification(message, type = "info") {
  const notification = document.createElement("div");
  notification.className = `notification ${type}`;
  notification.innerHTML = `
    <div class="notification-content">
      <span class="notification-icon">${type === "success" ? "✓" : "ℹ"}</span>
      <span class="notification-text">${message}</span>
    </div>
  `;

  document.body.appendChild(notification);

  // Show notification
  setTimeout(() => {
    notification.classList.add("show");
  }, 100);

  // Hide notification after 3 seconds
  setTimeout(() => {
    notification.classList.remove("show");
    setTimeout(() => {
      if (document.body.contains(notification)) {
        document.body.removeChild(notification);
      }
    }, 300);
  }, 3000);
}

function showModal(title, content) {
  const modal = document.createElement("div");
  modal.className = "conditions-modal";
  modal.innerHTML = `
    <div class="conditions-modal-content">
      <div class="conditions-modal-header">
        <h2>${title}</h2>
        <span class="conditions-close">&times;</span>
      </div>
      <div class="conditions-modal-body">
        ${content}
      </div>
    </div>
  `;

  document.body.appendChild(modal);

  // Close modal events
  const closeBtn = modal.querySelector(".conditions-close");
  closeBtn.addEventListener("click", () => {
    document.body.removeChild(modal);
  });

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      document.body.removeChild(modal);
    }
  });

  // ESC key to close
  const escHandler = (e) => {
    if (e.key === "Escape") {
      if (document.body.contains(modal)) {
        document.body.removeChild(modal);
      }
      document.removeEventListener("keydown", escHandler);
    }
  };
  document.addEventListener("keydown", escHandler);
}

// Render tea-freeze products
function renderTeaFreeze() {
  const container = document.querySelector(".tea-freeze-grid");
  if (!container) {
    console.log("Tea freeze container not found");
    return;
  }

  console.log("Rendering tea freeze products:", teaFreezeData.length);

  container.innerHTML = teaFreezeData
    .map(
      (product) => `
    <div class="tea-freeze-item product-card" data-product-id="${
      parseInt(product.id.replace("tea", "")) + 300
    }" data-product-type="tea">
      <div class="tea-freeze-image product-image">
        <img src="${product.image}" alt="${product.name}" />
        ${
          product.badge
            ? `<div class="tea-freeze-badge ${product.badgeType}">${product.badge}</div>`
            : ""
        }
      </div>
      <div class="tea-freeze-info product-info">
        <p class="tea-freeze-category product-category">${product.category}</p>
        <h3>${product.name}</h3>
        <div class="tea-freeze-price product-price">
          <span class="price current-price">${formatCurrency(
            product.price
          )}</span>
          <button class="btn-add-tea btn-add-cart">+</button>
        </div>
      </div>
    </div>
  `
    )
    .join("");
}

// Render news
function renderNews() {
  const container = document.querySelector(".news-grid");
  if (!container) return;

  container.innerHTML = newsData
    .map(
      (news) => `
    <div class="news-item" onclick="openNewsModal('${news.id}')">
      <div class="news-image">
        <img src="${news.image}" alt="${news.title}" />
      </div>
      <div class="news-content">
        <h3>${news.title}</h3>
        <p class="news-meta">
          <span class="news-source">${news.source}</span>
          <span class="news-date">${news.date}</span>
        </p>
        <p class="news-excerpt">Đọc tiếp</p>
      </div>
    </div>
  `
    )
    .join("");
}

// Open news modal (placeholder)
function openNewsModal(newsId) {
  const news = newsData.find((n) => n.id === newsId);
  if (!news) return;

  showModal(
    "Tin tức",
    `
    <div class="news-modal-content">
      <img src="${news.image}" alt="${news.title}" style="width: 100%; height: 200px; object-fit: cover; border-radius: 8px; margin-bottom: 15px;" />
      <h3>${news.title}</h3>
      <p class="news-meta" style="color: #666; font-size: 12px; margin-bottom: 15px;">
        <span>${news.source}</span> • <span>${news.date}</span>
      </p>
      <p>${news.excerpt}</p>
      <p style="margin-top: 15px; color: #555;">${news.content}</p>
    </div>
  `
  );
}

// Initialize all products on page load
document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM loaded, initializing all products");
  renderProducts();
});

// Checkout functionality
function goToCheckout() {
  // Save current cart to localStorage for checkout page
  if (window.shoppingCart) {
    window.shoppingCart.saveCart();
  }

  // Redirect to checkout page
  window.location.href = "cart.html";
}

// Export for use in other files
window.mockData = mockData;
window.teaFreezeData = teaFreezeData;
window.newsData = newsData;
window.cart = cart;
window.formatCurrency = formatCurrency;
window.renderProducts = renderProducts;
window.renderTeaFreeze = renderTeaFreeze;
window.renderNews = renderNews;
window.openProductModal = openProductModal;
window.goToCheckout = goToCheckout;
window.copyCode = copyCode;
window.showConditions = showConditions;
