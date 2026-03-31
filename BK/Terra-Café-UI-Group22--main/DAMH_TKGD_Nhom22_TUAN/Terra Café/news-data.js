// Mock data for news page
const newsData = {
  // Main news articles
  articles: [
    {
      id: 1,
      title: "KHOE SẮC THĂNG HƯƠNG - TRÀ SEN VÀNG (MỚI) ĐÃ CÓ MẶT",
      image: "./public/n1.jpg",
      source: "Terra Café Ecommerce Web",
      date: "Thứ Hai, 16/3/2026",
      excerpt:
        "Khám phá hương vị mới lạ của trà sen vàng với công thức độc quyền từ Terra Café...",
      link: "#",
      category: "Sản phẩm mới",
    },
    {
      id: 2,
      title: "Terra Café CASSIA - QUÊ ẤM PHIM EM, PHONG VỊ ĐỘC ĐÁO",
      image: "./public/n2.png",
      source: "Terra Café Ecommerce Web",
      date: "Thứ Hai, 16/4/2026",
      excerpt:
        "Terra Café Cassia mang đến hương vị quế ấm áp, tạo nên trải nghiệm cà phê độc đáo...",
      link: "#",
      category: "Sản phẩm mới",
    },
    {
      id: 3,
      title: "CHILL HÈ MALDIVES - 100% TRÚNG VOUCHER",
      image: "./public/n3.png",
      source: "Terra Café Ecommerce Web",
      date: "Thứ Hai, 16/3/2026",
      excerpt:
        "Chương trình khuyến mãi hè với cơ hội trúng voucher 100% khi mua đồ uống...",
      link: "#",
      category: "Khuyến mãi",
    },
    {
      id: 4,
      title: "CHILL HÈ CÙNG Terra Café! THÀNH MẬT ĐẦU TÂM, THƯỞNG THỨC NGAY!",
      image: "./public/n4.jpg",
      source: "Terra Café Ecommerce Web",
      date: "Thứ Hai, 16/3/2026",
      excerpt:
        "Mùa hè này, hãy cùng Terra Café thưởng thức những ly đồ uống mát lạnh...",
      link: "#",
      category: "Khuyến mãi",
    },
    {
      id: 5,
      title: "[HOT SALE] TERRA CAFÉ GIẢM 50% CHO BÌNH XINH - LY ĐẸP",
      image: "./public/n5.jpg",
      source: "Terra Café Ecommerce Web",
      date: "Thứ Hai, 16/4/2026",
      excerpt:
        "Chương trình giảm giá đặc biệt cho các sản phẩm bình và ly cao cấp...",
      link: "#",
      category: "Khuyến mãi",
    },
    {
      id: 6,
      title: "MỪNG QUỐC TẾ PHỤ NỮ 8/3 - TERRA CAFÉ KHAO DEAL MUA 1 TẶNG 1",
      image: "./public/n6.png",
      source: "Terra Café Ecommerce Web",
      date: "Thứ Hai, 16/3/2026",
      excerpt:
        "Chào mừng ngày Quốc tế Phụ nữ với ưu đãi đặc biệt mua 1 tặng 1...",
      link: "#",
      category: "Sự kiện",
    },
  ],

  // Featured news for sidebar
  featuredNews: [
    {
      id: 1,
      title: "KHOE SẮC THĂNG HƯƠNG - TRÀ SEN VÀNG (MỚI) ĐÃ CÓ MẶT",
      image: "./public/n1.jpg",
      link: "#",
    },
    {
      id: 2,
      title: "Terra Café CASSIA - QUÊ ẤM PHIM EM, PHONG VỊ ĐỘC ĐÁO",
      image: "./public/n2.png",
      link: "#",
    },
    {
      id: 3,
      title: "CHILL HÈ MALDIVES - 100% TRÚNG VOUCHER",
      image: "./public/n3.png",
      link: "#",
    },
    {
      id: 4,
      title: "CHILL HÈ CÙNG TERRA CAFÉ! THÀNH MẬT ĐẦU TÂM, THƯỞNG THỨC NGAY!",
      image: "./public/n4.jpg",
      link: "#",
    },
  ],

  // Pagination settings
  pagination: {
    currentPage: 1,
    totalPages: 3,
    itemsPerPage: 6,
  },

  // Categories for filtering
  categories: [
    { id: "all", name: "Tất cả", count: 6 },
    { id: "product", name: "Sản phẩm mới", count: 2 },
    { id: "promotion", name: "Khuyến mãi", count: 3 },
    { id: "event", name: "Sự kiện", count: 1 },
  ],
};

// Function to get articles by page
function getArticlesByPage(page = 1, itemsPerPage = 6) {
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  return newsData.articles.slice(startIndex, endIndex);
}

// Function to get articles by category
function getArticlesByCategory(category = "all") {
  if (category === "all") {
    return newsData.articles;
  }

  const categoryMap = {
    product: "Sản phẩm mới",
    promotion: "Khuyến mãi",
    event: "Sự kiện",
  };

  return newsData.articles.filter(
    (article) => article.category === categoryMap[category]
  );
}

// Function to search articles
function searchArticles(query) {
  const searchTerm = query.toLowerCase();
  return newsData.articles.filter(
    (article) =>
      article.title.toLowerCase().includes(searchTerm) ||
      article.excerpt.toLowerCase().includes(searchTerm)
  );
}

// Function to get featured news
function getFeaturedNews() {
  return newsData.featuredNews;
}

// Function to get article by ID
function getArticleById(id) {
  return newsData.articles.find((article) => article.id === parseInt(id));
}

// Export for use in other files
if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    newsData,
    getArticlesByPage,
    getArticlesByCategory,
    searchArticles,
    getFeaturedNews,
    getArticleById,
  };
}
