// Checkout Page JavaScript

// Sample checkout data (in real app, this would come from cart)
const checkoutData = {
  items: [
    {
      id: "item1",
      name: "Phindi Xoài Đào",
      price: 59000,
      quantity: 1,
      image: "https://via.placeholder.com/50x50/FFB6C1/FFFFFF?text=PXD",
    },
    {
      id: "item2",
      name: "Americano Nóng Đen",
      price: 39000,
      quantity: 2,
      image: "https://via.placeholder.com/50x50/8B4513/FFFFFF?text=AND",
    },
    {
      id: "item3",
      name: "Trà Sữa Matcha Trà Xanh",
      price: 55000,
      quantity: 1,
      image: "https://via.placeholder.com/50x50/90EE90/FFFFFF?text=TSM",
    },
    {
      id: "item4",
      name: "Phindi Choco",
      price: 45000,
      quantity: 1,
      image: "https://via.placeholder.com/50x50/D2B48C/FFFFFF?text=PC",
    },
    {
      id: "item5",
      name: "BINH GIỮ NHIỆT HÓA TIẾT LÁ CÀ PHÊ MÀU NÂU 710ML",
      price: 149000,
      quantity: 1,
      image: "https://via.placeholder.com/50x50/8B4513/FFFFFF?text=BGN",
    },
  ],
  promoCode: "",
  discount: 0,
  shippingFee: 0,
};

// Location data
const locationData = {
  hanoi: {
    name: "Hà Nội",
    districts: {
      "ba-dinh": "Ba Đình",
      "hoan-kiem": "Hoàn Kiếm",
      "dong-da": "Đống Đa",
      "hai-ba-trung": "Hai Bà Trưng",
    },
  },
  hcm: {
    name: "TP. Hồ Chí Minh",
    districts: {
      "quan-1": "Quận 1",
      "quan-3": "Quận 3",
      "quan-7": "Quận 7",
      "binh-thanh": "Bình Thạnh",
    },
  },
  danang: {
    name: "Đà Nẵng",
    districts: {
      "hai-chau": "Hải Châu",
      "thanh-khe": "Thanh Khê",
      "son-tra": "Sơn Trà",
    },
  },
};

// Format currency
function formatCurrency(amount) {
  return new Intl.NumberFormat("vi-VN")
    .format(amount)
    .replace(/\./g, ".")
    .replace("₫", "đ");
}

// Render checkout items
function renderCheckoutItems() {
  const container = document.getElementById("checkout-items");
  const itemCount = document.getElementById("item-count");

  if (!container) return;

  const totalItems = checkoutData.items.reduce(
    (sum, item) => sum + item.quantity,
    0
  );
  itemCount.textContent = totalItems;

  container.innerHTML = checkoutData.items
    .map(
      (item) => `
    <div class="order-item">
      <div class="item-image-container">
        <img src="${item.image}" alt="${item.name}" class="item-image">
        <span class="item-quantity-badge">${item.quantity}</span>
      </div>
      <div class="item-info">
        <div class="item-name">${item.name}</div>
        <div class="item-size">${item.size || "M"}</div>
      </div>
      <div class="item-price">${formatCurrency(item.price)}đ</div>
    </div>
  `
    )
    .join("");
}

// Calculate totals
function calculateTotals() {
  const subtotal = checkoutData.items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const discount = checkoutData.discount;
  const shippingFee = checkoutData.shippingFee;
  const total = subtotal - discount + shippingFee;

  // Update display
  document.getElementById("subtotal").textContent =
    formatCurrency(subtotal) + "đ";
  document.getElementById("shipping-fee").textContent =
    shippingFee > 0 ? formatCurrency(shippingFee) + "đ" : "-";
  document.getElementById("total-amount").textContent =
    formatCurrency(total) + "đ";
}

// Handle city selection
function handleCityChange() {
  const citySelect = document.getElementById("city");
  const districtSelect = document.getElementById("district");
  const wardSelect = document.getElementById("ward");

  citySelect.addEventListener("change", function () {
    const selectedCity = this.value;

    // Clear district and ward
    districtSelect.innerHTML = '<option value="">Quận huyện</option>';
    wardSelect.innerHTML = '<option value="">Phường xã</option>';

    if (selectedCity && locationData[selectedCity]) {
      const districts = locationData[selectedCity].districts;
      Object.keys(districts).forEach((key) => {
        const option = document.createElement("option");
        option.value = key;
        option.textContent = districts[key];
        districtSelect.appendChild(option);
      });
    }
  });

  districtSelect.addEventListener("change", function () {
    const selectedDistrict = this.value;
    wardSelect.innerHTML = '<option value="">Phường xã</option>';

    if (selectedDistrict) {
      // Sample wards (in real app, this would be dynamic)
      const sampleWards = ["Phường 1", "Phường 2", "Phường 3"];
      sampleWards.forEach((ward) => {
        const option = document.createElement("option");
        option.value = ward.toLowerCase().replace(" ", "-");
        option.textContent = ward;
        wardSelect.appendChild(option);
      });
    }
  });
}

// Handle promo code
function handlePromoCode() {
  const promoInput = document.getElementById("promo-code");
  const applyBtn = document.querySelector(".apply-btn");

  applyBtn.addEventListener("click", function () {
    const code = promoInput.value.trim().toUpperCase();

    // Sample promo codes
    const promoCodes = {
      TERRA10: { discount: 10, type: "percentage" },
      FREESHIP: { discount: 30000, type: "fixed" },
      WELCOME: { discount: 50000, type: "fixed" },
    };

    if (promoCodes[code]) {
      const promo = promoCodes[code];
      const subtotal = checkoutData.items.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      );

      if (promo.type === "percentage") {
        checkoutData.discount = Math.floor((subtotal * promo.discount) / 100);
      } else {
        checkoutData.discount = promo.discount;
      }

      showNotification(`Đã áp dụng mã giảm giá ${code}!`, "success");
      calculateTotals();
    } else {
      showNotification("Mã giảm giá không hợp lệ!", "error");
    }
  });
}

// Handle form submission
function handleFormSubmission() {
  const form = document.querySelector(".checkout-form");
  const placeOrderBtn = document.getElementById("place-order");

  placeOrderBtn.addEventListener("click", function (e) {
    e.preventDefault();

    // Validate form
    const requiredFields = form.querySelectorAll("[required]");
    let isValid = true;

    requiredFields.forEach((field) => {
      if (!field.value.trim()) {
        isValid = false;
        field.style.borderColor = "#e74c3c";
      } else {
        field.style.borderColor = "#ddd";
      }
    });

    if (!isValid) {
      showNotification("Vui lòng điền đầy đủ thông tin!", "error");
      return;
    }

    // Simulate order placement
    placeOrderBtn.textContent = "ĐANG XỬ LÝ...";
    placeOrderBtn.disabled = true;

    setTimeout(() => {
      showNotification(
        "Đặt hàng thành công! Cảm ơn bạn đã mua hàng.",
        "success"
      );

      // Redirect to success page or home
      setTimeout(() => {
        window.location.href = "index.html";
      }, 2000);
    }, 2000);
  });
}

// Show notification
function showNotification(message, type = "info") {
  // Create notification element
  const notification = document.createElement("div");
  notification.className = `notification ${type}`;
  notification.textContent = message;

  // Style notification
  Object.assign(notification.style, {
    position: "fixed",
    top: "20px",
    right: "20px",
    padding: "12px 20px",
    borderRadius: "6px",
    color: "white",
    fontWeight: "500",
    zIndex: "10000",
    transform: "translateX(100%)",
    transition: "transform 0.3s ease",
  });

  if (type === "success") {
    notification.style.background = "#27ae60";
  } else if (type === "error") {
    notification.style.background = "#e74c3c";
  } else {
    notification.style.background = "#3498db";
  }

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

// Initialize checkout page
function initCheckout() {
  renderCheckoutItems();
  calculateTotals();
  handleCityChange();
  handlePromoCode();
  handleFormSubmission();
}

// Load cart data from localStorage if available
function loadCartData() {
  const savedCart = localStorage.getItem("cart");
  if (savedCart) {
    try {
      const cartItems = JSON.parse(savedCart);
      if (cartItems.length > 0) {
        checkoutData.items = cartItems.map((item) => ({
          id: item.id,
          name: item.name,
          price: item.price,
          quantity: item.quantity,
          image:
            item.image || "https://via.placeholder.com/50x50/ccc/fff?text=IMG",
        }));
      }
    } catch (e) {
      console.log("Error loading cart data:", e);
    }
  }
}

// Country dropdown functions
function toggleCountryDropdown() {
  const dropdown = document.querySelector(".country-dropdown");
  dropdown.classList.toggle("open");
}

function selectCountry(code, flagSrc, countryCode) {
  const selected = document.querySelector(".country-selected");
  const flagIcon = selected.querySelector(".flag-icon");
  const span = selected.querySelector("span");
  const hiddenInput = document.querySelector('input[name="country_code"]');

  flagIcon.src = flagSrc;
  flagIcon.alt = countryCode;
  span.textContent = countryCode;
  hiddenInput.value = code;

  // Close dropdown
  document.querySelector(".country-dropdown").classList.remove("open");
}

// Close dropdown when clicking outside
document.addEventListener("click", function (event) {
  const dropdown = document.querySelector(".country-dropdown");
  if (dropdown && !dropdown.contains(event.target)) {
    dropdown.classList.remove("open");
  }
});

// Initialize when DOM is loaded
document.addEventListener("DOMContentLoaded", function () {
  loadCartData();
  initCheckout();
});
