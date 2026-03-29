// Gift Card Page JavaScript

document.addEventListener("DOMContentLoaded", function () {
  initializeGiftCard();
});

function initializeGiftCard() {
  setupAmountSelection();
  setupSameAsSenderCheckbox();
  setupFormValidation();
  setupFormSubmission();
  setupFAQAccordion();
  setupSupportButtons();
}

// Amount Selection
function setupAmountSelection() {
  const amountButtons = document.querySelectorAll(".amount-btn");

  amountButtons.forEach((button) => {
    button.addEventListener("click", function () {
      // Remove active class from all buttons
      amountButtons.forEach((btn) => btn.classList.remove("active"));

      // Add active class to clicked button
      this.classList.add("active");

      // Store selected amount
      const amount = this.dataset.amount;
      localStorage.setItem("selectedGiftCardAmount", amount);
    });
  });

  // Set default selection (100,000 VND)
  const defaultButton = document.querySelector('[data-amount="100000"]');
  if (defaultButton) {
    defaultButton.click();
  }
}

// Same as Sender Checkbox
function setupSameAsSenderCheckbox() {
  const checkbox = document.getElementById("same-as-sender");
  const senderName = document.getElementById("sender-name");
  const senderEmail = document.getElementById("sender-email");
  const senderPhone = document.getElementById("sender-phone");
  const recipientName = document.getElementById("recipient-name");
  const recipientEmail = document.getElementById("recipient-email");
  const recipientPhone = document.getElementById("recipient-phone");

  checkbox.addEventListener("change", function () {
    if (this.checked) {
      // Copy sender info to recipient fields
      recipientName.value = senderName.value;
      recipientEmail.value = senderEmail.value;
      recipientPhone.value = senderPhone.value;

      // Disable recipient fields
      recipientName.disabled = true;
      recipientEmail.disabled = true;
      recipientPhone.disabled = true;
    } else {
      // Enable recipient fields
      recipientName.disabled = false;
      recipientEmail.disabled = false;
      recipientPhone.disabled = false;

      // Clear recipient fields
      recipientName.value = "";
      recipientEmail.value = "";
      recipientPhone.value = "";
    }
  });

  // Auto-update recipient fields when sender info changes
  [senderName, senderEmail, senderPhone].forEach((field) => {
    field.addEventListener("input", function () {
      if (checkbox.checked) {
        if (field === senderName) recipientName.value = this.value;
        if (field === senderEmail) recipientEmail.value = this.value;
        if (field === senderPhone) recipientPhone.value = this.value;
      }
    });
  });
}

// Form Validation
function setupFormValidation() {
  const requiredFields = document.querySelectorAll("input[required]");

  requiredFields.forEach((field) => {
    field.addEventListener("blur", function () {
      validateField(this);
    });

    field.addEventListener("input", function () {
      // Remove error styling when user starts typing
      this.classList.remove("error");
      const errorMsg = this.parentNode.querySelector(".error-message");
      if (errorMsg) {
        errorMsg.remove();
      }
    });
  });
}

function validateField(field) {
  const value = field.value.trim();
  let isValid = true;
  let errorMessage = "";

  // Check if required field is empty
  if (field.hasAttribute("required") && !value) {
    isValid = false;
    errorMessage = "Trường này là bắt buộc";
  }

  // Email validation
  if (field.type === "email" && value) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
      isValid = false;
      errorMessage = "Email không hợp lệ";
    }
  }

  // Phone validation
  if (field.type === "tel" && value) {
    const phoneRegex = /^[0-9]{10,11}$/;
    if (!phoneRegex.test(value.replace(/\s/g, ""))) {
      isValid = false;
      errorMessage = "Số điện thoại không hợp lệ";
    }
  }

  // Show/hide error
  if (!isValid) {
    showFieldError(field, errorMessage);
  } else {
    hideFieldError(field);
  }

  return isValid;
}

function showFieldError(field, message) {
  field.classList.add("error");

  // Remove existing error message
  const existingError = field.parentNode.querySelector(".error-message");
  if (existingError) {
    existingError.remove();
  }

  // Add new error message
  const errorDiv = document.createElement("div");
  errorDiv.className = "error-message";
  errorDiv.textContent = message;
  errorDiv.style.color = "#dc3545";
  errorDiv.style.fontSize = "12px";
  errorDiv.style.marginTop = "4px";

  field.parentNode.appendChild(errorDiv);
}

function hideFieldError(field) {
  field.classList.remove("error");
  const errorMsg = field.parentNode.querySelector(".error-message");
  if (errorMsg) {
    errorMsg.remove();
  }
}

// Form Submission
function setupFormSubmission() {
  const form = document.querySelector(".gift-card-form");
  const submitBtn = document.querySelector(".btn-confirm");
  const cancelBtn = document.querySelector(".btn-cancel");

  if (submitBtn) {
    submitBtn.addEventListener("click", function (e) {
      e.preventDefault();
      handleFormSubmission();
    });
  }

  if (cancelBtn) {
    cancelBtn.addEventListener("click", function (e) {
      e.preventDefault();
      handleFormReset();
    });
  }
}

function handleFormSubmission() {
  // Validate all required fields
  const requiredFields = document.querySelectorAll("input[required]");
  let isFormValid = true;

  requiredFields.forEach((field) => {
    if (!validateField(field)) {
      isFormValid = false;
    }
  });

  // Check if amount is selected
  const selectedAmount = document.querySelector(".amount-btn.active");
  if (!selectedAmount) {
    alert("Vui lòng chọn giá trị thẻ quà tặng");
    return;
  }

  if (!isFormValid) {
    alert("Vui lòng điền đầy đủ thông tin bắt buộc");
    return;
  }

  // Collect form data
  const formData = collectFormData();

  // Show confirmation
  if (confirm("Bạn có chắc chắn muốn đặt mua thẻ quà tặng này?")) {
    processGiftCardOrder(formData);
  }
}

function collectFormData() {
  const selectedAmount = document.querySelector(".amount-btn.active");

  return {
    amount: selectedAmount ? selectedAmount.dataset.amount : null,
    senderName: document.getElementById("sender-name").value,
    senderEmail: document.getElementById("sender-email").value,
    senderPhone: document.getElementById("sender-phone").value,
    recipientName: document.getElementById("recipient-name").value,
    recipientEmail: document.getElementById("recipient-email").value,
    recipientPhone: document.getElementById("recipient-phone").value,
    message: document.getElementById("gift-message").value,
    isSameAsSender: document.getElementById("same-as-sender").checked,
  };
}

function processGiftCardOrder(formData) {
  console.log("Processing gift card order:", formData);

  // Show loading state
  const submitBtn = document.querySelector(".btn-confirm");
  const originalText = submitBtn.textContent;
  submitBtn.textContent = "Đang xử lý...";
  submitBtn.disabled = true;

  // Simulate API call
  setTimeout(() => {
    // Reset button
    submitBtn.textContent = originalText;
    submitBtn.disabled = false;

    // Show success message
    alert(
      "Đặt mua thẻ quà tặng thành công! Chúng tôi sẽ liên hệ với bạn sớm nhất."
    );

    // Reset form
    resetForm();

    // Redirect to home page
    setTimeout(() => {
      window.location.href = "index.html";
    }, 2000);
  }, 2000);
}

function handleFormReset() {
  if (confirm("Bạn có chắc chắn muốn đặt lại form?")) {
    resetForm();
  }
}

function resetForm() {
  // Reset all form fields
  document.querySelectorAll("input, textarea").forEach((field) => {
    field.value = "";
    field.disabled = false;
    hideFieldError(field);
  });

  // Reset amount selection
  document.querySelectorAll(".amount-btn").forEach((btn) => {
    btn.classList.remove("active");
  });

  // Reset checkbox
  document.getElementById("same-as-sender").checked = false;

  // Set default amount
  const defaultButton = document.querySelector('[data-amount="100000"]');
  if (defaultButton) {
    defaultButton.click();
  }
}

// Format currency
function formatCurrency(amount) {
  return new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  }).format(amount);
}

// FAQ Accordion
function setupFAQAccordion() {
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach((item) => {
    const question = item.querySelector(".faq-question");

    question.addEventListener("click", function () {
      // Close all other FAQ items
      faqItems.forEach((otherItem) => {
        if (otherItem !== item) {
          otherItem.classList.remove("active");
          const otherIcon = otherItem.querySelector(".faq-question i");
          otherIcon.className = "fas fa-plus";
        }
      });

      // Toggle current item
      item.classList.toggle("active");
      const icon = question.querySelector("i");

      if (item.classList.contains("active")) {
        icon.className = "fas fa-minus";
      } else {
        icon.className = "fas fa-plus";
      }
    });
  });
}

// Support Buttons
function setupSupportButtons() {
  const supportButtons = document.querySelectorAll(".support-btn");
  const contactBtn = document.querySelector(".contact-btn");

  supportButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const buttonText = this.textContent;

      switch (buttonText) {
        case "Về Thẻ Highlands Coffee":
          alert("Thông tin về thẻ Highlands Coffee sẽ được hiển thị tại đây.");
          break;
        case "Điều khoản sử dụng":
          alert("Điều khoản sử dụng sẽ được hiển thị tại đây.");
          break;
        case "FAQs":
          // Scroll to FAQ section
          document.querySelector(".faq-section").scrollIntoView({
            behavior: "smooth",
          });
          break;
      }
    });
  });

  // Contact button for business solution
  if (contactBtn) {
    contactBtn.addEventListener("click", function () {
      alert(
        "Chúng tôi sẽ liên hệ với bạn sớm nhất để hỗ trợ giải pháp doanh nghiệp!"
      );
    });
  }
}

// Add error styles to CSS
const style = document.createElement("style");
style.textContent = `
    .form-group input.error,
    .form-group textarea.error {
        border-color: #dc3545;
        box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.25);
    }
`;
document.head.appendChild(style);
