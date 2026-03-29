// News page functionality
document.addEventListener("DOMContentLoaded", function () {
  // Load header and footer
  const headerContainer = document.getElementById("header-container");
  const footerContainer = document.getElementById("footer-container");

  if (headerContainer) {
    headerContainer.innerHTML = createHeader();
  }

  if (footerContainer) {
    footerContainer.innerHTML = createFooter();
  }

  // Initialize news page with mockdata
  initializeNewsPage();
  // Pagination functionality
  const pageButtons = document.querySelectorAll(".page-btn");

  pageButtons.forEach((button) => {
    button.addEventListener("click", function () {
      // Remove active class from all buttons
      pageButtons.forEach((btn) => btn.classList.remove("active"));

      // Add active class to clicked button (if it's not the next button)
      if (!this.classList.contains("next")) {
        this.classList.add("active");
      }

      // Handle next button
      if (this.classList.contains("next")) {
        const currentActive = document.querySelector(".page-btn.active");
        const currentPage = parseInt(currentActive.textContent);
        const nextPage = currentPage + 1;

        // Find next page button and activate it
        pageButtons.forEach((btn) => {
          if (btn.textContent == nextPage) {
            pageButtons.forEach((b) => b.classList.remove("active"));
            btn.classList.add("active");
          }
        });
      }
    });
  });

  // News item hover effects
  const newsItems = document.querySelectorAll(".news-item");

  newsItems.forEach((item) => {
    item.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-5px)";
    });

    item.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0)";
    });
  });

  // Featured news click functionality
  const featuredItems = document.querySelectorAll(".featured-item");

  featuredItems.forEach((item) => {
    item.addEventListener("click", function () {
      // Add click animation
      this.style.transform = "scale(0.98)";
      setTimeout(() => {
        this.style.transform = "translateX(5px)";
      }, 150);
    });
  });

  // Smooth scroll for navigation links
  const navLinks = document.querySelectorAll(".nav a");

  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      // Only prevent default for anchor links
      if (this.getAttribute("href").startsWith("#")) {
        e.preventDefault();
        const targetId = this.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }
    });
  });

  // Add loading animation for images
  const images = document.querySelectorAll("img");

  images.forEach((img) => {
    img.addEventListener("load", function () {
      this.style.opacity = "0";
      this.style.transition = "opacity 0.3s ease";
      setTimeout(() => {
        this.style.opacity = "1";
      }, 100);
    });
  });

  // Search functionality (if search box is added later)
  function initSearch() {
    const searchInput = document.querySelector(".search-input");
    if (searchInput) {
      searchInput.addEventListener("input", function () {
        const searchTerm = this.value.toLowerCase();
        const newsItems = document.querySelectorAll(".news-item");

        newsItems.forEach((item) => {
          const title = item.querySelector("h3").textContent.toLowerCase();
          if (title.includes(searchTerm)) {
            item.style.display = "block";
          } else {
            item.style.display = "none";
          }
        });
      });
    }
  }

  // Initialize search if search input exists
  initSearch();

  // Add scroll effect to header
  let lastScrollTop = 0;
  const header = document.querySelector(".header");

  window.addEventListener("scroll", function () {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop && scrollTop > 100) {
      // Scrolling down
      header.style.transform = "translateY(-100%)";
    } else {
      // Scrolling up
      header.style.transform = "translateY(0)";
    }

    lastScrollTop = scrollTop;
  });

  // Add fade-in animation for news items on scroll
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  }, observerOptions);

  // Observe all news items
  newsItems.forEach((item) => {
    item.style.opacity = "0";
    item.style.transform = "translateY(20px)";
    item.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    observer.observe(item);
  });
});

// Initialize news page with mockdata
function initializeNewsPage() {
  renderNewsGrid();
  renderFeaturedNews();
  setupPagination();
}

// Render news grid from mockdata
function renderNewsGrid(page = 1) {
  const newsGrid = document.querySelector(".news-grid");
  if (!newsGrid || typeof newsData === "undefined") return;

  const articles = getArticlesByPage(page);

  newsGrid.innerHTML = articles
    .map(
      (article) => `
    <article class="news-item" data-id="${article.id}">
      <div class="news-image">
        <img src="${article.image}" alt="${article.title}" />
      </div>
      <div class="news-content-text">
        <h3>${article.title}</h3>
        <div class="news-meta">
          <span class="news-source">${article.source}</span>
          <span class="news-date">${article.date}</span>
        </div>
        <a href="${article.link}" class="news-link">Đọc tiếp</a>
      </div>
    </article>
  `
    )
    .join("");

  // Re-attach event listeners for new items
  attachNewsItemListeners();
}

// Render featured news sidebar
function renderFeaturedNews() {
  const featuredContainer = document.querySelector(".featured-news");
  if (!featuredContainer || typeof newsData === "undefined") return;

  const featuredNews = getFeaturedNews();

  featuredContainer.innerHTML = featuredNews
    .map(
      (item) => `
    <article class="featured-item" data-id="${item.id}">
      <div class="featured-image">
        <img src="${item.image}" alt="${item.title}" />
      </div>
      <div class="featured-content">
        <h4>${item.title}</h4>
      </div>
    </article>
  `
    )
    .join("");

  // Re-attach event listeners for featured items
  attachFeaturedItemListeners();
}

// Setup pagination with mockdata
function setupPagination() {
  if (typeof newsData === "undefined") return;

  const pagination = document.querySelector(".pagination");
  if (!pagination) return;

  const { totalPages, currentPage } = newsData.pagination;

  let paginationHTML = "";

  for (let i = 1; i <= totalPages; i++) {
    const activeClass = i === currentPage ? "active" : "";
    paginationHTML += `<button class="page-btn ${activeClass}" data-page="${i}">${i}</button>`;
  }

  paginationHTML += `<button class="page-btn next"><i class="fas fa-chevron-right"></i></button>`;

  pagination.innerHTML = paginationHTML;

  // Re-attach pagination listeners
  attachPaginationListeners();
}

// Attach event listeners for news items
function attachNewsItemListeners() {
  const newsItems = document.querySelectorAll(".news-item");

  newsItems.forEach((item) => {
    item.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-5px)";
    });

    item.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0)";
    });

    item.addEventListener("click", function () {
      const articleId = this.dataset.id;
      console.log("Clicked article:", articleId);
    });
  });
}

// Attach event listeners for featured items
function attachFeaturedItemListeners() {
  const featuredItems = document.querySelectorAll(".featured-item");

  featuredItems.forEach((item) => {
    item.addEventListener("click", function () {
      const articleId = this.dataset.id;
      this.style.transform = "scale(0.98)";
      setTimeout(() => {
        this.style.transform = "translateX(5px)";
      }, 150);
      console.log("Clicked featured article:", articleId);
    });
  });
}

// Attach event listeners for pagination
function attachPaginationListeners() {
  const pageButtons = document.querySelectorAll(".page-btn");

  pageButtons.forEach((button) => {
    button.addEventListener("click", function () {
      if (this.classList.contains("next")) {
        const currentActive = document.querySelector(".page-btn.active");
        const currentPage = parseInt(currentActive.textContent);
        const nextPage = Math.min(
          currentPage + 1,
          newsData.pagination.totalPages
        );

        if (nextPage !== currentPage) {
          newsData.pagination.currentPage = nextPage;
          renderNewsGrid(nextPage);
          setupPagination();
        }
      } else {
        const page = parseInt(this.dataset.page);
        newsData.pagination.currentPage = page;
        renderNewsGrid(page);
        setupPagination();
      }
    });
  });
}
