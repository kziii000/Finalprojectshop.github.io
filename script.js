// --- 核心商品資料 (包含新加入的 MÜCENT 系列) ---
const products = [
  {
    id: 101,
    name: "復刻水洗工裝喇叭褲",
    price: 1880,
    tag: "popular",
    sales: 48,
    date: new Date("2025-05-01"),
    image: "image/pic5.png",
  },
  {
    id: 102,
    name: "經典標誌連帽拉鍊外套",
    price: 2250,
    tag: "basic",
    sales: 50,
    date: new Date("2025-01-20"),
    image: "image/pic7.webp",
  },
  { id: 103, name: "經典手提包", price: 1750, tag: "basic", sales: 75, date: new Date("2025-03-15"), image: "image/pic4.png" },
  {
    id: 104,
    name: "刺繡羅紋亨利領長袖",
    price: 1280,
    tag: "new",
    sales: 35,
    date: new Date("2025-12-26"),
    image: "image/pic6.webp", // pic6
  },

  { id: 105, name: "簡約後背包", price: 1000, tag: "new", sales: 64, date: new Date("2025-12-05"), image: "image/pic8.jpg" },
  {
    id: 106,
    name: "鍊條手提包",
    price: 1555,
    tag: "popular",
    sales: 150,
    date: new Date("2025-06-25"),
    image: "image/pic9.webp",
  },
  {
    id: 107,
    name: "刺繡連帽外套",
    price: 2000,
    tag: "new",
    sales: 20,
    date: new Date("2025-12-28"),
    image: "image/pic11.webp",
  },
  {
    id: 108,
    name: "經典牛仔褲",
    price: 1580,
    tag: "basic",
    sales: 58,
    date: new Date("2025-04-10"),
    image: "image/pic10.webp",
  },
  {
    id: 109,
    name: "短版羽絨外套",
    price: 2580,
    tag: "new",
    sales: 25,
    date: new Date("2026-01-01"),
    image: "image/pic13.webp",
  },
  {
    id: 110,
    name: "羅紋亨利領衛衣",
    price: 1120,
    tag: "popular",
    sales: 112,
    date: new Date("2025-09-10"),
    image: "image/pic15.webp",
  },
];

let cart = [];
let currentSort = "newest";
let currentCheckoutStep = 1;
const SHIPPING_FEE = 80;

// --- 政策內容數據 (Policy View) ---
const policies = {
  about: {
    title: "關於 TEN STUDIO ",
    content: `
            <p>本品牌以「滿分設計 × 不挑人穿搭」為核心理念的時尚品牌設立官方網站，品牌名稱為ten studio希望打破好看的穿搭只屬於特定身形或風格族群的刻板印象，而是透過精準的版型設計，讓任何人都能輕鬆穿出屬於自己的滿分造型；首頁展示版型設計與品牌精神傳達，讓使用者在瀏覽的過程中可以直觀感受到ten studio的設計哲學。Logo設計以黑色為基底搭配金屬質感素，營造出俐落、前衛且具高級感的品牌形象。</p>
            <p style="margin-bottom: 40px;">我們的包款設計堅持使用優質的材料，注重細節，以中性、經典的色調為主，確保每一件商品都能成為您衣櫥中可以長久使用的單品。</p>
            <h3 style="text-align: center; margin-top: 60px;">第十組組員</h3>
            <div class="policy-feature-container">
                <div class="policy-feature-card">
                    <img src="image/teammember1.jpg">
                    <h4>吳英綸</h4>
                    <p>11244103</p>
                    <p>在這學期的多媒體課程中，我們的期末專案是設計與製作一個完整的網站；每個環節都讓我學到很多。過程中，我學會了如何運用 HTML、CSS 與基本的 JavaScript 來呈現動態效果，也更理解了多媒體元素對網站氛圍的重要性。此外，團隊合作也是一大挑戰與收穫，我們需要分工協作、互相討論設計方向，並在遇到問題時共同解決，這讓我體會到專案管理與溝通的重要性。完成網站後，看到自己的作品能順利運作並具有完整功能，感到非常有成就感。這次經驗不僅提升了我對網頁開發的技能，也讓我對多媒體設計的整體流程有更深刻的理解，也激發我未來想進一步探索前端開發與互動設計的興趣。</p>
    
                </div>
                <div class="policy-feature-card">
                    <img src="image/teammember2.jpg">
                    <h4>胡程盺</h4>
                    <p>11344127</p>
                    <p>在這學期的課程中，必須說是真的很有幫助，從原本的一無所知，到後面可以略知一二，成就感是非常強的；一開始在做排版編輯的時候，怎麼寫就寫不出自己要的樣子，再到終於可以自己寫出一個畫面，只能說是非常的感動，這是其他的東西所不能比擬的。
那在這次的期末專案中，也非常感謝三位隊友，他們動作迅速、善於溝通，也非常會解決問題，所以也讓這次能夠順利結束，非常謝謝他們，當然也謝謝老師的教導，開發了我們對於多媒程設這個領域，開啟了一定程度的興趣，讓我們能夠順利穩定的發展並成長。</p>
                    
                </div>
                <div class="policy-feature-card">
                    <img src="image/teammember3.jpg">
                    <h4>翁卉妍</h4>
                    <p>11344143</p>
                    <p>在本次專案中，我擔任前端開發的主要負責人之一，主要負責網站整體的核心架構搭建，以及退換貨政策、隱私權條款與關於品牌等頁面的規劃與實作。透過實際動手建置這些功能性頁面，我更加理解一個電商網站在使用者體驗與資訊完整性上的重要性，也學會如何在設計與實用之間取得平衡。<br>這個專案對我來說，不僅是一項課堂作業，更是一個實際檢視自己能力與不足的重要經驗。透過從零開始規劃並實作電商網站，我逐漸了解前端開發不只是將畫面呈現出來，更需要考量整體架構、使用者操作流程與資訊的清楚傳達。雖然過程中遇到許多挑戰與挫折，但也正因如此，讓我學會主動查詢資料、嘗試不同解決方式，並在不斷修正中累積實務經驗，對自己的學習方向也更加明確。</p>
                </div>
                <div class="policy-feature-card">
                    <img src="image/teammember4.jpg">
                    <h4>林書秀</h4>
                    <p>11333136</p>
                    <p>在這學期的期末專案中，我負責品牌的 Logo 設計、首頁廣告圖製作，以及網站細節與後期的後端設置。因為曾經是商業設計系轉學生，這是我第一次嘗試將過去對視覺美感的要求，轉化為程式邏輯的產出；透過課堂學習網頁排版處理網站細節。在團隊分工中，我體會到溝通與技術銜接的重要性。當我負責的 Logo 與首頁視覺完成後，需要與大框架風格統一，並確保後端設置能與購物車系統、會員功能順利串接。這種分工讓我明白，一個完整的電商網站需要各個模組精確配合。能讓設計專業與程式技術結合，並透過團隊協作完成一個具備完整功能的網站，讓我感到非常新奇有趣。這次經驗不僅強化了我的開發技能，也讓我對未來在多媒體領域中設計與實體功能結合充滿興趣。
</p>
                </div>
            </div>
        `,
  },
  shipping: {
    title: "運送服務方式",
    content: `<h3>台灣本島配送</h3><p><strong>1. 配送時間：</strong>訂單確認後，現貨商品預計在 3-5 個工作日內出貨。預購商品則需 7-20 個工作日。</p><p><strong>2. 運費計算：</strong>單筆訂單滿 $1,500 元免運費；未滿額者將收取 $80 元運費。</p><p><strong>3. 配送範圍：</strong>目前僅提供台灣本島配送服務。暫不提供離島及海外配送。</p><p><strong>4. 注意事項：</strong>若遇國定假日或特殊活動檔期，配送時間可能會延長。請隨時留意您的信箱通知。</p>`,
  },
  return: {
    title: "退換貨政策",
    content: `<h3>退換貨須知</h3><p><strong>1. 鑑賞期：</strong>依據消費者保護法規定，消費者享有七天鑑賞期之權益 (非試用期)。商品到貨次日起計算。</p><p><strong>2. 退貨條件：</strong>退回商品必須是全新狀態，且包裝完整 (包含商品本身、附件、內外包裝、贈品等)。若商品已使用、下水或缺少配件，恕無法接受退換。</p><p><strong>3. 換貨流程：</strong>如需換貨，請於鑑賞期內聯繫客服，確認後將提供換貨地址。來回運費需由買家自行負擔。</p><p><strong>4. 客服聯繫：</strong>如有任何疑問，請透過電子郵件聯繫我們。</p>`,
  },
  privacy: {
    title: "隱私權條款",
    content: `<h3>個人資料保護聲明</h3><p><strong>1. 資料蒐集：</strong>本商店僅蒐集為完成交易及提供服務所需的個人資料，包括姓名、聯繫方式及地址等。</p><p><strong>2. 資料使用：</strong>您的個人資料僅用於商品寄送、客戶服務、以及優惠資訊提供 (經您同意)。本商店絕不會將您的資料販售給第三方。</p><p><strong>3. 資料安全：</strong>我們採用 SSL 加密技術保護您的交易與資料安全。</p><p><strong>4. Cookies：</strong>本網站使用 Cookies 來提升用戶體驗和分析網站流量，您可以隨時在瀏覽器設定中關閉 Cookies。</p>`,
  },
};

// --- DOM 元素選擇 ---
const allProductListEl = document.getElementById("all-product-list");
const popularProductListEl = document.getElementById("popular-product-list");
const homeProductDisplayEl = document.getElementById("home-product-display");
const cartSidebarEl = document.getElementById("cart-sidebar");
const cartCountEl = document.getElementById("cart-count");
const cartItemsEl = document.getElementById("cart-items");
const cartTotalEl = document.getElementById("cart-total");
const sliderContainerEl = document.getElementById("slider-container");
const productViewAreaEl = document.getElementById("product-view-area");
const policyPageEl = document.getElementById("policy-page");
const policyPageTitleEl = document.getElementById("policy-page-title");
const policyPageTextEl = document.getElementById("policy-page-text");
const checkoutSuccessPageEl = document.getElementById("checkout-success-page");
const orderIdDisplayEl = document.getElementById("order-id-display");
const backToHomeFromSuccessBtn = document.getElementById("back-to-home-from-success");
const checkoutFlowEl = document.getElementById("checkout-flow");
const checkoutStepsEl = document.getElementById("checkout-steps");
const checkoutSummaryListEl = document.getElementById("checkout-summary-list");
const checkoutSubtotalEl = document.getElementById("checkout-subtotal");
const checkoutShippingFeeEl = document.getElementById("checkout-shipping-fee");
const checkoutGrandTotalEl = document.getElementById("checkout-grand-total");
const checkoutStepContents = document.querySelectorAll(".checkout-step-content");
const nextToShippingBtn = document.getElementById("next-to-shipping");
const nextToPaymentBtn = document.getElementById("next-to-payment");
const placeOrderBtn = document.getElementById("place-order-btn");
const prevToSummaryBtn = document.getElementById("prev-to-summary");
const prevToShippingBtn = document.getElementById("prev-to-shipping");
const sortDisplayEl = document.getElementById("sort-display");
const sortOptionsEl = document.getElementById("sort-options");
const openSearchBtn = document.getElementById("open-search-btn");
const searchBarEl = document.getElementById("search-bar");
const searchInputEl = document.getElementById("search-input");
const performSearchBtn = document.getElementById("perform-search-btn");
const closeSearchBtn = document.getElementById("close-search-btn");
const sliderEl = document.getElementById("main-slider");
const dotsEl = document.getElementById("slider-dots");
const slides = sliderEl ? sliderEl.querySelectorAll(".slide") : [];
let currentSlide = 0;
const loginModalEl = document.getElementById("login-modal");
const overlayEl = document.getElementById("overlay");
const openLoginBtn = document.getElementById("open-login-btn");
const loginFormContainer = document.getElementById("login-form");
const registerFormContainer = document.getElementById("register-form");
const switchToRegisterBtn = document.getElementById("switch-to-register");
const switchToLoginBtn = document.getElementById("switch-to-login");
const navHomeBtn = document.getElementById("nav-home");
const navAllProductsBtn = document.getElementById("nav-all-products");
const policyLinks = document.querySelectorAll(".policy-link");
const viewAllFromHomeBtn = document.getElementById("view-all-from-home");

// =========================
// 頁面視圖切換總控制器
// =========================
function switchContentView(viewType, policyKey = null) {
  policyPageEl.classList.add("hidden");
  productViewAreaEl.classList.add("hidden");
  sliderContainerEl.classList.add("hidden");
  homeProductDisplayEl.classList.add("hidden");
  checkoutSuccessPageEl.classList.add("hidden");
  checkoutFlowEl.classList.add("hidden");

  stopAutoPlay();
  if (!searchBarEl.classList.contains("hidden")) toggleSearchBar();
  if (!cartSidebarEl.classList.contains("hidden")) closeModal(cartSidebarEl);

  if (viewType === "policy" && policyKey) {
    const policy = policies[policyKey];
    if (policy) {
      policyPageTitleEl.innerHTML = policy.title;
      policyPageTextEl.innerHTML = policy.content;
      policyPageEl.classList.remove("hidden");
    }
  } else {
    if (viewType === "home") {
      sliderContainerEl.classList.remove("hidden");
      homeProductDisplayEl.classList.remove("hidden");
      startAutoPlay();
      renderPopularProducts();
    } else if (viewType === "all") {
      productViewAreaEl.classList.remove("hidden");
      filterAndRenderProducts();
    } else if (viewType === "success") {
      checkoutSuccessPageEl.classList.remove("hidden");
    } else if (viewType === "checkout") {
      if (cart.length === 0) {
        alert("購物車沒有商品，無法進入結帳！");
        switchContentView("all");
        return;
      }
      checkoutFlowEl.classList.remove("hidden");
      showCheckoutStep(1);
    }
  }
  window.scrollTo(0, 0);
}

// =========================
// 圖片輪播與排序
// =========================
function initSlider() {
  if (!sliderEl || slides.length === 0) return;
  dotsEl.innerHTML = "";
  slides.forEach((slide, index) => {
    const dot = document.createElement("span");
    dot.classList.add("dot");
    if (index === 0) dot.classList.add("active");
    dot.addEventListener("click", () => {
      showSlide(index);
      resetAutoPlay();
    });
    dotsEl.appendChild(dot);
  });
  showSlide(0);
  startAutoPlay();
}

function showSlide(index) {
  if (!sliderEl || slides.length === 0) return;
  sliderEl.style.transform = `translateX(-${index * 100}%)`;
  document.querySelectorAll(".dot").forEach((dot, idx) => {
    dot.classList.toggle("active", idx === index);
  });
  currentSlide = index;
}

let autoPlayInterval;
function startAutoPlay() {
  if (sliderContainerEl && !sliderContainerEl.classList.contains("hidden") && slides.length > 1 && !autoPlayInterval) {
    autoPlayInterval = setInterval(() => {
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
    }, 5000);
  }
}

function stopAutoPlay() {
  clearInterval(autoPlayInterval);
  autoPlayInterval = null;
}

function resetAutoPlay() {
  stopAutoPlay();
  startAutoPlay();
}

function sortProducts(list, sortKey) {
  return list.slice().sort((a, b) => {
    switch (sortKey) {
      case "newest":
        return b.date.getTime() - a.date.getTime();
      case "oldest":
        return a.date.getTime() - b.date.getTime();
      case "price-high":
        return b.price - a.price;
      case "price-low":
        return a.price - b.price;
      case "sales-high":
        return b.sales - a.sales;
      default:
        return b.date.getTime() - a.date.getTime();
    }
  });
}

// =========================
// 商品渲染功能 (通用卡片生成)
// =========================

/**
 * 渲染商品卡片到指定的容器
 */
function renderProductCards(list, containerEl) {
  if (!containerEl) return;
  containerEl.innerHTML = "";

  list.forEach((product) => {
    const productCard = document.createElement("div");
    productCard.className = "product-card";

    // 點擊商品動作
    productCard.onclick = () => {
      if (typeof addToCart === "function") addToCart(product.id);
      if (typeof openModal === "function" && cartSidebarEl) openModal(cartSidebarEl);
    };

    // --- 關鍵修正：強制讀取本地 image 屬性 ---
    // 如果該商品沒寫 image，我們就給它一個預設的本地路徑 (例如 pic5.png)
    const imgSrc = product.image ? product.image : "image/pic5.png";

    productCard.innerHTML = `
          <img src="${imgSrc}" alt="${product.name}">
          <div>
              <h2>${product.name}</h2>
              <p>$${product.price.toLocaleString()}</p>
          </div>
      `;
    containerEl.appendChild(productCard);
  });
}

// =========================
// 針對不同頁面渲染商品
// =========================

/** 渲染首頁精選商品 (只顯示 tag 為 popular 的前 4 個) */
function renderPopularProducts() {
  const popularList = products.filter((p) => p.tag === "popular").slice(0, 4);
  renderProductCards(popularList, popularProductListEl);
}

/** 渲染所有商品 (應用排序) */
function filterAndRenderProducts() {
  // 1. 過濾 - 永遠使用所有商品
  let filteredList = products;

  // 2. 排序 - 使用當前的排序方式
  const sortedList = sortProducts(filteredList, currentSort);

  // 3. 渲染到「所有商品」的容器
  renderProductCards(sortedList, allProductListEl);

  // 重設排序顯示為預設狀態
  const selectedSortItem = document.querySelector(`li[data-sort="${currentSort}"]`);
  const defaultDisplay = selectedSortItem ? selectedSortItem.getAttribute("data-display") : "上架時間: 由新到舊";
  if (sortDisplayEl) {
    sortDisplayEl.innerHTML = `${defaultDisplay} <i class="fas fa-angle-down"></i>`;
  }
}

// =========================
// 排序選單控制
// =========================

/** 處理排序選單的顯示/隱藏 */
function toggleSortOptions() {
  if (!sortOptionsEl) return;
  if (sortOptionsEl.classList.contains("hidden")) {
    sortOptionsEl.classList.remove("hidden");
  } else {
    sortOptionsEl.classList.add("hidden");
  }
}

/** 處理點擊排序選項 */
function handleSortSelection(e) {
  const selectedItem = e.target.closest("li[data-sort]");
  if (!selectedItem || !sortDisplayEl || !sortOptionsEl) return;

  const newSortKey = selectedItem.getAttribute("data-sort");
  const newDisplayText = selectedItem.getAttribute("data-display");

  currentSort = newSortKey;
  sortDisplayEl.innerHTML = `${newDisplayText} <i class="fas fa-angle-down"></i>`;
  sortOptionsEl.classList.add("hidden"); // 隱藏選單

  // 重新排序並渲染商品
  filterAndRenderProducts();
}

// =========================
// 商品渲染功能 (支援真實圖片與千分位價格)
// =========================
function renderProductCards(list, containerEl) {
  if (!containerEl) return;
  containerEl.innerHTML = "";

  if (list.length === 0) {
    containerEl.innerHTML = '<p style="grid-column: 1 / -1; text-align: center; padding: 50px;">目前沒有商品。</p>';
    return;
  }

  list.forEach((product) => {
    const productCard = document.createElement("div");
    productCard.className = "product-card";
    productCard.onclick = () => {
      addToCart(product.id);
      if (cartSidebarEl && cartSidebarEl.classList.contains("hidden")) openModal(cartSidebarEl);
    };

    // 優先讀取 product.image，否則使用 placeholder
    const imgSrc = product.image
      ? product.image
      : `https://via.placeholder.com/350x450/fff/333?text=${product.name.split(" ")[0]}`;

    productCard.innerHTML = `
            <img src="${imgSrc}" alt="${product.name}">
            <div>
                <h2>${product.name}</h2>
                <p>$${product.price.toLocaleString()}</p> 
            </div>
        `;
    containerEl.appendChild(productCard);
  });
}

function renderPopularProducts() {
  const popularList = products.filter((p) => p.tag === "popular").slice(0, 8); // 增加上限以容納新商品
  renderProductCards(popularList, popularProductListEl);
}

function filterAndRenderProducts() {
  const sortedList = sortProducts(products, currentSort);
  renderProductCards(sortedList, allProductListEl);
  const selectedSortItem = document.querySelector(`li[data-sort="${currentSort}"]`);
  const defaultDisplay = selectedSortItem ? selectedSortItem.getAttribute("data-display") : "上架時間: 由新到舊";
  if (sortDisplayEl) sortDisplayEl.innerHTML = `${defaultDisplay} <i class="fas fa-angle-down"></i>`;
}

// =========================
// 搜尋、購物車與彈窗控制
// =========================
function toggleSortOptions() {
  if (!sortOptionsEl) return;
  sortOptionsEl.classList.toggle("hidden");
}

function handleSortSelection(e) {
  const selectedItem = e.target.closest("li[data-sort]");
  if (!selectedItem || !sortDisplayEl || !sortOptionsEl) return;
  currentSort = selectedItem.getAttribute("data-sort");
  sortDisplayEl.innerHTML = `${selectedItem.getAttribute("data-display")} <i class="fas fa-angle-down"></i>`;
  sortOptionsEl.classList.add("hidden");
  filterAndRenderProducts();
}

function toggleSearchBar() {
  if (!searchBarEl || !overlayEl) return;
  if (cartSidebarEl && !cartSidebarEl.classList.contains("hidden")) closeModal(cartSidebarEl);
  if (loginModalEl && !loginModalEl.classList.contains("hidden")) closeModal(loginModalEl);

  const isActive = searchBarEl.classList.toggle("hidden");
  searchBarEl.classList.toggle("active", !isActive);

  if (!isActive) {
    searchInputEl.focus();
    overlayEl.classList.remove("hidden");
  } else {
    searchInputEl.value = "";
    checkOverlay();
  }
}

function handleSearch(query) {
  const term = query.trim().toLowerCase();
  if (term === "") {
    switchContentView("all");
    toggleSearchBar();
    return;
  }
  const searchResults = products.filter((product) => product.name.toLowerCase().includes(term));
  switchContentView("all");
  if (!allProductListEl || !sortDisplayEl) return;
  if (searchResults.length === 0) {
    allProductListEl.innerHTML = `<p style="grid-column: 1 / -1; text-align: center; padding: 50px;">找不到包含「${query}」的商品。</p>`;
    sortDisplayEl.innerHTML = `搜尋結果 (0) <i class="fas fa-angle-down"></i>`;
  } else {
    renderProductCards(searchResults, allProductListEl);
    sortDisplayEl.innerHTML = `搜尋結果 (${searchResults.length}) <i class="fas fa-angle-down"></i>`;
    if (sortOptionsEl) sortOptionsEl.classList.add("hidden");
  }
  toggleSearchBar();
}

function changeQuantity(id, change) {
  const item = cart.find((i) => i.id === id);
  if (item) {
    item.quantity += change;
    if (item.quantity <= 0) removeFromCart(id);
    else updateCartDisplay();
  }
}

function removeFromCart(id) {
  cart = cart.filter((item) => item.id !== id);
  updateCartDisplay();
}

function addToCart(productId) {
  const product = products.find((p) => p.id === productId);
  const existingItem = cart.find((item) => item.id === productId);
  if (existingItem) existingItem.quantity += 1;
  else cart.push({ ...product, quantity: 1 });
  updateCartDisplay();
}

function updateCartDisplay() {
  if (!cartItemsEl || !cartTotalEl || !cartCountEl) return;
  cartItemsEl.innerHTML = "";
  let total = 0;
  let totalItems = 0;
  const checkoutBtn = document.getElementById("checkout-btn");

  if (cart.length === 0) {
    cartItemsEl.innerHTML = `<li style="text-align: center; padding: 40px 20px;"><strong>你的購物車是空的</strong></li>`;
    cartTotalEl.textContent = "0";
    if (checkoutBtn) checkoutBtn.style.display = "none";
    cartCountEl.textContent = "0";
    return;
  }

  if (checkoutBtn) checkoutBtn.style.display = "block";

  cart.forEach((item) => {
    total += item.price * item.quantity;
    totalItems += item.quantity;

    const li = document.createElement("li");
    li.className = "cart-item-li";

    // 確保抓取本地圖片路徑，若無則預設顯示 pic5
    const cartImgSrc = item.image ? item.image : "image/pic5.png";

    li.innerHTML = `
        <div class="cart-item-info-wrapper" style="display: flex; align-items: center; gap: 15px; width: 100%;">
            <img src="${cartImgSrc}" alt="${item.name}" 
                 style="width: 60px; height: 60px; object-fit: cover; border-radius: 5px; flex-shrink: 0;">
            
            <div class="item-info" style="flex-grow: 1;">
                <div class="item-name" style="font-weight: bold; font-size: 0.95rem;">${item.name}</div>
                <div class="item-price" style="color: #666;">$${item.price.toLocaleString()}</div> 
            </div>
            
            <div class="item-controls" style="display: flex; align-items: center; gap: 5px;">
                <button onclick="changeQuantity(${item.id}, -1)" style="padding: 2px 8px;">-</button>
                <span style="min-width: 20px; text-align: center;">${item.quantity}</span>
                <button onclick="changeQuantity(${item.id}, 1)" style="padding: 2px 8px;">+</button>
                <button onclick="removeFromCart(${
                  item.id
                })" style="background: none; border: none; color: #999; margin-left: 5px; cursor: pointer;">
                    <i class="fas fa-trash-alt"></i>
                </button>
            </div>
        </div>`;
    cartItemsEl.appendChild(li);
  });

  cartCountEl.textContent = totalItems;
  cartTotalEl.textContent = total.toLocaleString();
}

// --- 彈窗開關 ---
function openModal(modalEl) {
  if (!modalEl || !overlayEl) return;
  modalEl.classList.remove("hidden");
  if (modalEl.id === "cart-sidebar") modalEl.style.transform = "translateX(0)";
  overlayEl.classList.remove("hidden");
}

function closeModal(modalEl) {
  if (!modalEl || !overlayEl) return;
  if (modalEl.id === "cart-sidebar") {
    modalEl.style.transform = "translateX(100%)";
    setTimeout(() => {
      modalEl.classList.add("hidden");
      checkOverlay();
    }, 400);
  } else {
    modalEl.classList.add("hidden");
    checkOverlay();
  }
}

function checkOverlay() {
  if (
    cartSidebarEl.classList.contains("hidden") &&
    loginModalEl.classList.contains("hidden") &&
    searchBarEl.classList.contains("hidden")
  ) {
    overlayEl.classList.add("hidden");
  }
}

// =========================
// 排序邏輯
// =========================
function sortProducts(list, sortKey) {
  return list.slice().sort((a, b) => {
    switch (sortKey) {
      case "newest":
        return b.date.getTime() - a.date.getTime();
      case "oldest":
        return a.date.getTime() - b.date.getTime();
      case "price-high":
        return b.price - a.price;
      case "price-low":
        return a.price - b.price;
      case "sales-high":
        return b.sales - a.sales;
      default:
        return b.date.getTime() - a.date.getTime();
    }
  });
}

/** 渲染首頁精選商品 (只顯示 tag 為 popular 的前 4 個) */
function renderPopularProducts() {
  const popularList = products.filter((p) => p.tag === "popular").slice(0, 4);
  renderProductCards(popularList, popularProductListEl);
}

/** 渲染所有商品 (應用排序) */
function filterAndRenderProducts() {
  // 1. 過濾 - 永遠使用所有商品
  let filteredList = products;

  // 2. 排序 - 使用當前的排序方式
  const sortedList = sortProducts(filteredList, currentSort);

  // 3. 渲染到「所有商品」的容器
  renderProductCards(sortedList, allProductListEl);

  // 重設排序顯示為預設狀態
  const selectedSortItem = document.querySelector(`li[data-sort="${currentSort}"]`);
  const defaultDisplay = selectedSortItem ? selectedSortItem.getAttribute("data-display") : "上架時間: 由新到舊";
  if (sortDisplayEl) {
    sortDisplayEl.innerHTML = `${defaultDisplay} <i class="fas fa-angle-down"></i>`;
  }
}

// =========================
// 排序選單控制
// =========================

/** 處理排序選單的顯示/隱藏 */
function toggleSortOptions() {
  if (!sortOptionsEl) return;
  if (sortOptionsEl.classList.contains("hidden")) {
    sortOptionsEl.classList.remove("hidden");
  } else {
    sortOptionsEl.classList.add("hidden");
  }
}

/** 處理點擊排序選項 */
function handleSortSelection(e) {
  const selectedItem = e.target.closest("li[data-sort]");
  if (!selectedItem || !sortDisplayEl || !sortOptionsEl) return;

  const newSortKey = selectedItem.getAttribute("data-sort");
  const newDisplayText = selectedItem.getAttribute("data-display");

  currentSort = newSortKey;
  sortDisplayEl.innerHTML = `${newDisplayText} <i class="fas fa-angle-down"></i>`;
  sortOptionsEl.classList.add("hidden"); // 隱藏選單

  // 重新排序並渲染商品
  filterAndRenderProducts();
}

/**
 * 切換搜尋欄位的顯示/隱藏狀態
 */
function toggleSearchBar() {
  if (!searchBarEl || !overlayEl) return;

  // 關閉購物車/登入Modal
  if (cartSidebarEl && !cartSidebarEl.classList.contains("hidden")) {
    closeModal(cartSidebarEl);
  }
  if (loginModalEl && !loginModalEl.classList.contains("hidden")) {
    closeModal(loginModalEl);
  }

  const isActive = searchBarEl.classList.toggle("hidden");
  searchBarEl.classList.toggle("active", !isActive);

  if (!isActive) {
    searchInputEl.focus();
    overlayEl.classList.remove("hidden");
  } else {
    searchInputEl.value = "";
    checkOverlay();
  }
}

/**
 * 執行搜尋並渲染結果
 * @param {string} query - 搜尋的關鍵字
 */
function handleSearch(query) {
  const term = query.trim().toLowerCase();

  if (term === "") {
    switchContentView("all");
    toggleSearchBar();
    return;
  }

  const searchResults = products.filter((product) => product.name.toLowerCase().includes(term));

  switchContentView("all");

  if (!allProductListEl || !sortDisplayEl) return;

  if (searchResults.length === 0) {
    allProductListEl.innerHTML = `<p style="grid-column: 1 / -1; text-align: center; padding: 50px;">找不到包含「${query}」的商品。</p>`;
    sortDisplayEl.innerHTML = `搜尋結果 (0) <i class="fas fa-angle-down"></i>`;
  } else {
    renderProductCards(searchResults, allProductListEl);

    sortDisplayEl.innerHTML = `搜尋結果 (${searchResults.length}) <i class="fas fa-angle-down"></i>`;
    if (sortOptionsEl) {
      sortOptionsEl.classList.add("hidden");
    }
  }

  toggleSearchBar();
}

// =========================
// 核心功能：切換視圖與渲染
// =========================

function switchView(view) {
  // 1. 先獲取所有主要區塊的引用
  const home = document.getElementById("home-product-display");
  const slider = document.getElementById("slider-container");
  const productArea = document.getElementById("product-view-area");
  const policy = document.getElementById("policy-page");
  const checkout = document.getElementById("checkout-flow");

  // 2. 全部隱藏
  [home, slider, productArea, policy, checkout].forEach((el) => {
    if (el) el.classList.add("hidden");
  });

  // 3. 根據傳入的參數顯示特定區塊
  if (view === "home") {
    if (home) home.classList.remove("hidden");
    if (slider) slider.classList.remove("hidden");
  } else if (view === "all") {
    if (productArea) productArea.classList.remove("hidden");
    // 這裡如果是「所有商品」，通常會觸發 renderAllProducts()
  } else if (view === "detail") {
    if (productArea) productArea.classList.remove("hidden");
    // 詳情頁面內容會由 showDetail 生成
  }
  // ... 其他 policy 或 checkout 邏輯保留 ...
  window.scrollTo(0, 0);
}

// 渲染卡片 (通用)
function renderCards(list, container) {
  if (!container) return;
  container.innerHTML = "";

  list.forEach((p) => {
    const div = document.createElement("div");
    div.className = "product-card";
    div.onclick = () => showDetail(p.id);

    // --- 關鍵修正處 ---
    // 1. 檢查圖片路徑是否已經包含 "image/"，如果沒有就補上
    let imgSrc = p.image;
    if (imgSrc && !imgSrc.startsWith("image/")) {
      imgSrc = "image/" + imgSrc;
    }

    // 2. 如果完全沒有路徑，使用你本地有的 pic5.png 當作預設，不要用 placeholder 網址
    if (!imgSrc) {
      imgSrc = "image/pic5.png";
    }

    div.innerHTML = `
            <img src="${imgSrc}" alt="${p.name}" onerror="this.src='image/pic5.png'">
            <h3>${p.name}</h3>
            <p>$${p.price.toLocaleString()}</p>
        `;
    container.appendChild(div);
  });
}

function renderPopular() {
  const populars = products.filter((p) => p.tag === "popular").slice(0, 4);
  renderCards(populars, popularProductListEl);
}

function renderAllProducts() {
  productViewArea.innerHTML = `<h2>所有商品</h2><div id="all-grid" class="product-grid"></div>`;
  const grid = document.getElementById("all-grid");
  renderCards(products, grid);
}

// =========================
// 商品詳情與評論系統
// =========================

// --- 關鍵修正 A：必須放在 script.js 最頂端，遠離任何 function ---
// let cart = [];  (您原本應該已經有了)

// ... 中間保留您原本的千行代碼 ...

function showDetail(id) {
  const p = products.find((item) => item.id === id);
  if (!p) return;

  // 關鍵修正 B：確保切換視圖時，「詳情區」是可見的
  switchView("detail");
  productViewArea.classList.remove("hidden");

  productViewArea.innerHTML = `
        <div class="product-detail-container">
            <img src="${p.image}" class="detail-image">
            <div class="detail-info">
                <h1 id="detail-title">${p.name}</h1>
                <p style="font-size: 1.5rem; color: #d9534f;">$${p.price.toLocaleString()}</p>
                <button class="primary-btn" onclick="addToCart(${p.id})">加入購物車</button>
                <button class="secondary-btn" onclick="switchView('home')" style="margin-left:10px;">返回首頁</button>
            </div>
            
            <div class="reviews-section">
                <h3>顧客評論</h3>
                <div id="reviews-list"></div>
                <div class="review-form">
                    <h4>發表評論</h4>
                    <input type="text" id="review-name" placeholder="您的姓名">
                    <textarea id="review-content" placeholder="評論內容..."></textarea>
                    <select id="review-rating">
                        <option value="5">★★★★★</option>
                        <option value="4">★★★★</option>
                        <option value="3">★★★</option>
                    </select>
                    <button class="primary-btn" id="submit-review-btn">送出評論</button>
                </div>
            </div>
        </div>
    `;

  // 修正：這裡不要再寫 let productReviews = {}; 否則會覆蓋掉全域變數
  document.getElementById("submit-review-btn").onclick = () => handleReview(p.name);
  displayReviews(p.name);
}

function handleReview(productName) {
  const name = document.getElementById("review-name").value;
  const content = document.getElementById("review-content").value;
  const rating = document.getElementById("review-rating").value;

  if (!name || !content) return alert("請填寫姓名與評論內容");

  if (!productReviews[productName]) productReviews[productName] = [];
  productReviews[productName].unshift({
    name,
    content,
    rating: parseInt(rating),
    date: new Date().toLocaleDateString(),
  });

  displayReviews(productName);
  document.getElementById("review-name").value = "";
  document.getElementById("review-content").value = "";
}

function displayReviews(productName) {
  const list = document.getElementById("reviews-list");
  const reviews = productReviews[productName] || [];
  list.innerHTML = reviews.length ? "" : "<p>目前尚無評論，快來當第一個評論的人！</p>";
  reviews.forEach((rev) => {
    list.innerHTML += `
            <div class="review-item" style="border-bottom:1px solid #eee; padding:10px 0;">
                <strong>${rev.name}</strong> <span style="color:#f39c12;">${"★".repeat(rev.rating)}</span>
                <p>${rev.content}</p>
                <small style="color:#999;">${rev.date}</small>
            </div>
        `;
  });
}
// =========================
// 購物車功能
// =========================
function changeQuantity(id, change) {
  const item = cart.find((i) => i.id === id);
  if (item) {
    item.quantity += change;
    if (item.quantity <= 0) {
      removeFromCart(id);
    } else {
      updateCartDisplay();
    }
  }
}

function removeFromCart(id) {
  cart = cart.filter((item) => item.id !== id);
  updateCartDisplay();
}

function addToCart(productId) {
  const product = products.find((p) => p.id === productId);
  const existingItem = cart.find((item) => item.id === productId);

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }
  updateCartDisplay();
}

function updateCartDisplay() {
  if (!cartItemsEl || !cartTotalEl || !cartCountEl) return;

  cartItemsEl.innerHTML = "";
  let total = 0;
  let totalItems = 0;

  const checkoutBtn = document.getElementById("checkout-btn");

  if (cart.length === 0) {
    cartItemsEl.innerHTML = `
            <li style="
                text-align: center; 
                color: #555; 
                padding: 40px 20px; 
                font-size: 1.1em; 
                line-height: 1.5;
                border-bottom: none;
            ">
                <i class="fas fa-shopping-bag" style="font-size: 2em; margin-bottom: 10px; color: #ccc;"></i><br>
                <strong>你的購物車是空的</strong>
                <p style="font-size: 0.9em; margin-top: 5px;">趕快去尋找您喜歡的商品吧！</p>
            </li>
        `;
    cartTotalEl.textContent = "0";
    if (checkoutBtn) checkoutBtn.style.display = "none";
    cartCountEl.textContent = "0";
    return;
  }

  if (checkoutBtn) checkoutBtn.style.display = "block";

  cart.forEach((item) => {
    const itemTotal = item.price * item.quantity;

    const li = document.createElement("li");
    li.className = "cart-item-li";
    const cartImgSrc = item.image ? item.image : "image/pic5.png";
    li.innerHTML = `
<div class="cart-item-main">
            <img src="${cartImgSrc}" alt="${item.name}" class="cart-mini-img">
            
            <div class="item-info">
                <div class="item-name">${item.name}</div>
                <div class="item-price">$${item.price.toLocaleString()}</div> 
            </div>
        </div>
        <div class="item-controls">
            <button onclick="changeQuantity(${item.id}, -1)">-</button>
            <input type="number" value="${item.quantity}" readonly>
            <button onclick="changeQuantity(${item.id}, 1)">+</button>
            <button onclick="removeFromCart(${item.id})"><i class="fas fa-trash-alt"></i></button>
        </div>`;
    cartItemsEl.appendChild(li);

    total += itemTotal;
    totalItems += item.quantity;
  });

  cartCountEl.textContent = totalItems;
  cartTotalEl.textContent = total.toString();
}

// 綁定購物車事件
document.getElementById("view-cart-btn")?.addEventListener("click", () => {
  if (loginModalEl && !loginModalEl.classList.contains("hidden")) {
    closeModal(loginModalEl);
  }
  if (searchBarEl && !searchBarEl.classList.contains("hidden")) {
    toggleSearchBar();
  }
  if (cartSidebarEl) {
    openModal(cartSidebarEl);
  }
});

document.getElementById("close-cart-btn")?.addEventListener("click", () => {
  if (cartSidebarEl) {
    closeModal(cartSidebarEl);
  }
});

document.getElementById("checkout-btn")?.addEventListener("click", () => {
  if (cart.length === 0) {
    alert("您的購物車是空的！");
    return;
  }

  if (cartSidebarEl) {
    closeModal(cartSidebarEl);
  }
  switchContentView("checkout");
});

// =========================
// 多步驟結帳流程控制
// =========================

/**
 * 渲染結帳頁 Step 1 的商品摘要
 */
function renderCheckoutSummary() {
  if (!checkoutSummaryListEl || !checkoutSubtotalEl || !checkoutShippingFeeEl || !checkoutGrandTotalEl) return;

  checkoutSummaryListEl.innerHTML = "";
  let subtotal = 0;

  cart.forEach((item) => {
    const itemTotal = item.price * item.quantity;
    subtotal += itemTotal;

    const li = document.createElement("li");
    li.className = "checkout-summary-item";
    let imgSrc = item.image;
    if (imgSrc && !imgSrc.startsWith("image/")) {
      imgSrc = "image/" + imgSrc;
    }
    if (!imgSrc) {
      imgSrc = "image/pic5.png"; // 如果沒圖，使用本地 pic5 備份
    }

    li.innerHTML = `
            <img src="${imgSrc}" alt="${item.name}" class="summary-item-img" onerror="this.src='image/pic5.png'">
            <div class="summary-details">
                <div class="summary-name">${item.name}</div>
                <div class="summary-qty">數量: ${item.quantity}</div>
            </div>
            <div class="summary-price">$${itemTotal.toLocaleString()}</div> 
        `;
    checkoutSummaryListEl.appendChild(li);
  });

  // 計算總價
  const shippingFee = subtotal >= 1500 ? 0 : SHIPPING_FEE;
  const grandTotal = subtotal + shippingFee;

  // 更新顯示
  checkoutSubtotalEl.textContent = `$${subtotal.toString()}`;
  checkoutShippingFeeEl.textContent = shippingFee === 0 ? "免運費 (滿 $1,500)" : `$${shippingFee.toString()}`;
  checkoutGrandTotalEl.textContent = `$${grandTotal.toString()}`;
}

/**
 * 切換結帳頁的步驟
 * @param {number} step - 要切換到的步驟編號 (1, 2, 或 3)
 */
function showCheckoutStep(step) {
  if (step < 1 || step > 3 || !checkoutStepsEl) return;

  currentCheckoutStep = step;

  // 1. 更新步驟指示器
  document.querySelectorAll(".step").forEach((s) => {
    s.classList.remove("active");
    s.classList.remove("completed");
    if (parseInt(s.getAttribute("data-step")) === step) {
      s.classList.add("active");
    } else if (parseInt(s.getAttribute("data-step")) < step) {
      s.classList.add("completed");
    } else {
      s.classList.remove("completed");
    }
  });

  // 2. 切換步驟內容
  checkoutStepContents.forEach((content, index) => {
    if (index + 1 === step) {
      content.classList.remove("hidden");
      if (step === 1) {
        renderCheckoutSummary();
      }
    } else {
      content.classList.add("hidden");
    }
  });
}

// =========================
// 彈窗控制
// =========================
function openModal(modalEl) {
  if (!modalEl || !overlayEl) return;

  modalEl.classList.remove("hidden");
  if (modalEl.id === "cart-sidebar") {
    modalEl.style.transform = "translateX(0)";
  }
  overlayEl.classList.remove("hidden");
}

function closeModal(modalEl) {
  if (!modalEl || !overlayEl) return;

  if (modalEl.id === "cart-sidebar") {
    modalEl.style.transform = "translateX(100%)";
    setTimeout(() => {
      modalEl.classList.add("hidden");
      checkOverlay();
    }, 400);
  } else {
    modalEl.classList.add("hidden");
    checkOverlay();
  }
}

function checkOverlay() {
  if (
    cartSidebarEl &&
    cartSidebarEl.classList.contains("hidden") &&
    loginModalEl &&
    loginModalEl.classList.contains("hidden") &&
    searchBarEl &&
    searchBarEl.classList.contains("hidden")
  ) {
    overlayEl.classList.add("hidden");
  }
}

function showLoginForm() {
  if (loginFormContainer) loginFormContainer.style.display = "block";
  if (registerFormContainer) registerFormContainer.style.display = "none";
}

function showRegisterForm() {
  if (loginFormContainer) loginFormContainer.style.display = "none";
  if (registerFormContainer) registerFormContainer.style.display = "block";
}

// 綁定彈窗和切換事件
openLoginBtn?.addEventListener("click", () => {
  if (cartSidebarEl && !cartSidebarEl.classList.contains("hidden")) {
    closeModal(cartSidebarEl);
  }
  if (searchBarEl && !searchBarEl.classList.contains("hidden")) {
    toggleSearchBar();
  }
  showLoginForm();
  if (loginModalEl) {
    openModal(loginModalEl);
  }
});

if (switchToRegisterBtn) {
  switchToRegisterBtn.addEventListener("click", (e) => {
    e.preventDefault();
    showRegisterForm();
  });
}
if (switchToLoginBtn) {
  switchToLoginBtn.addEventListener("click", (e) => {
    e.preventDefault();
    showLoginForm();
  });
}

document.querySelectorAll(".close-btn").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const targetId = e.target.getAttribute("data-target");
    const modalToClose = document.getElementById(targetId);
    if (modalToClose) {
      closeModal(modalToClose);
    }
  });
});

overlayEl?.addEventListener("click", () => {
  if (cartSidebarEl && !cartSidebarEl.classList.contains("hidden")) {
    closeModal(cartSidebarEl);
  }
  if (loginModalEl && !loginModalEl.classList.contains("hidden")) {
    closeModal(loginModalEl);
  }
  if (searchBarEl && !searchBarEl.classList.contains("hidden")) {
    toggleSearchBar();
  }
});

// =========================
// 頁面啟動與事件綁定 (DOMContentLoaded)
// =========================
document.addEventListener("DOMContentLoaded", () => {
  // 1. 初始化 UI 狀態
  if (loginModalEl) loginModalEl.classList.add("hidden");
  if (cartSidebarEl) {
    cartSidebarEl.classList.add("hidden");
    cartSidebarEl.style.transform = "translateX(100%)";
  }
  if (searchBarEl) {
    searchBarEl.classList.add("hidden");
    searchBarEl.classList.remove("active");
  }

  if (loginFormContainer && registerFormContainer) {
    showLoginForm();
  }

  // 2. 啟動核心功能
  updateCartDisplay();
  initSlider();

  // 3. 綁定導航列點擊事件 (首頁/所有商品切換)
  navHomeBtn?.addEventListener("click", (e) => {
    e.preventDefault();
    switchContentView("home");
  });

  navAllProductsBtn?.addEventListener("click", (e) => {
    e.preventDefault();
    switchContentView("all");
  });

  // 3.5. 綁定首頁的「查看所有商品」按鈕
  viewAllFromHomeBtn?.addEventListener("click", (e) => {
    e.preventDefault();
    switchContentView("all");
  });

  // 4. 綁定排序選單事件
  if (sortDisplayEl && sortOptionsEl) {
    sortDisplayEl.addEventListener("click", toggleSortOptions);
    sortOptionsEl.addEventListener("click", handleSortSelection);

    document.addEventListener("click", (e) => {
      if (!e.target.closest(".sort-control") && sortOptionsEl) {
        sortOptionsEl.classList.add("hidden");
      }
    });
  }

  // 5. 綁定政策連結點擊事件
  policyLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const policyKey = link.getAttribute("data-policy");
      switchContentView("policy", policyKey);
    });
  });

  // 6. 綁定搜尋欄位事件
  if (openSearchBtn && searchBarEl) {
    openSearchBtn.addEventListener("click", toggleSearchBar);
    closeSearchBtn.addEventListener("click", toggleSearchBar);

    // 點擊「搜尋」按鈕時
    performSearchBtn?.addEventListener("click", () => {
      if (searchInputEl) {
        handleSearch(searchInputEl.value);
      }
    });

    // 在輸入欄位按 Enter 鍵時
    searchInputEl?.addEventListener("keyup", (e) => {
      if (e.key === "Enter") {
        handleSearch(searchInputEl.value);
      }
    });
  }

  // 7. 綁定多步驟結帳頁導航事件
  nextToShippingBtn?.addEventListener("click", () => {
    showCheckoutStep(2);
  });

  nextToPaymentBtn?.addEventListener("click", () => {
    const nameInput = document.getElementById("consignee-name");
    const addressInput = document.getElementById("consignee-address");

    if (!nameInput || !nameInput.value.trim() || !addressInput || !addressInput.value.trim()) {
      alert("請填寫收件人姓名和地址才能繼續！");
      return;
    }
    showCheckoutStep(3);
  });

  prevToSummaryBtn?.addEventListener("click", () => showCheckoutStep(1));
  prevToShippingBtn?.addEventListener("click", () => showCheckoutStep(2));

  // 8. 綁定「確認送出訂單」事件 (結帳終點)
  placeOrderBtn?.addEventListener("click", () => {
    // 1. 模擬產生訂單編號
    const simulatedOrderId = `TS-${Date.now().toString().slice(-6)}${Math.floor(Math.random() * 900) + 100}`;

    // 2. 清空購物車
    cart = [];
    updateCartDisplay();

    // 3. 切換到結帳成功頁面
    if (orderIdDisplayEl) {
      orderIdDisplayEl.textContent = simulatedOrderId;
    }
    switchContentView("success");

    console.log(`訂單提交成功，訂單編號: ${simulatedOrderId}`);
  });

  // 9. 綁定結帳成功頁的返回按鈕
  backToHomeFromSuccessBtn?.addEventListener("click", (e) => {
    e.preventDefault();
    switchContentView("home");
  });

  // 預設切換到首頁視圖
  switchContentView("home");
});
// =========================
// 初始化與事件綁定
// =========================
document.addEventListener("DOMContentLoaded", () => {
  updateCartDisplay();
  initSlider();
  navHomeBtn?.addEventListener("click", () => switchContentView("home"));
  navAllProductsBtn?.addEventListener("click", () => switchContentView("all"));
  viewAllFromHomeBtn?.addEventListener("click", () => switchContentView("all"));

  if (sortDisplayEl) sortDisplayEl.addEventListener("click", toggleSortOptions);
  if (sortOptionsEl) sortOptionsEl.addEventListener("click", handleSortSelection);

  policyLinks.forEach((link) => {
    link.addEventListener("click", (e) => switchContentView("policy", link.getAttribute("data-policy")));
  });

  openSearchBtn?.addEventListener("click", toggleSearchBar);
  closeSearchBtn?.addEventListener("click", toggleSearchBar);
  performSearchBtn?.addEventListener("click", () => handleSearch(searchInputEl.value));

  // 結帳邏輯
  nextToShippingBtn?.addEventListener("click", () => showCheckoutStep(2));
  nextToPaymentBtn?.addEventListener("click", () => showCheckoutStep(3));
  placeOrderBtn?.addEventListener("click", () => {
    const id = `TS-${Date.now().toString().slice(-6)}`;
    cart = [];
    updateCartDisplay();
    orderIdDisplayEl.textContent = id;
    switchContentView("success");
  });

  switchContentView("home");
});
// 儲存評論的物件
let productReviews = {};

// 顯示評論的函數
function displayReviews(productName) {
  const reviewsList = document.getElementById("reviews-list");
  if (!reviewsList) return;

  reviewsList.innerHTML = "";
  const reviews = productReviews[productName] || [];

  if (reviews.length === 0) {
    reviewsList.innerHTML = '<p class="no-reviews">目前還沒有評論。</p>';
    return;
  }

  reviews.forEach((rev) => {
    const stars = "★".repeat(rev.rating) + "☆".repeat(5 - rev.rating);
    reviewsList.innerHTML += `
            <div class="review-item">
                <div class="review-header">
                    <span class="review-author">${rev.name}</span>
                    <span class="review-rating">${stars}</span>
                </div>
                <div class="review-text">${rev.content}</div>
                <div class="review-date">${rev.date}</div>
            </div>
        `;
  });
}

// 綁定送出評論按鈕 (放在 DOMContentLoaded 裡面)
document.addEventListener("DOMContentLoaded", () => {
  const submitBtn = document.getElementById("submit-review-btn");
  if (submitBtn) {
    submitBtn.addEventListener("click", () => {
      const name = document.getElementById("review-name").value;
      const content = document.getElementById("review-content").value;
      const rating = document.getElementById("review-rating").value;
      const productName = document.getElementById("detail-title").textContent;

      if (!name || !content) return alert("請填寫內容");

      const newReview = {
        name,
        content,
        rating: parseInt(rating),
        date: new Date().toLocaleDateString(),
      };

      if (!productReviews[productName]) productReviews[productName] = [];
      productReviews[productName].unshift(newReview);

      document.getElementById("review-name").value = "";
      document.getElementById("review-content").value = "";
      displayReviews(productName); // 立即更新
    });
  }
});
