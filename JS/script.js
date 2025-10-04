document.addEventListener('DOMContentLoaded', function () {
    const cartIcon = document.getElementById('cart-icon');
    const cartSidebar = document.getElementById('cart-sidebar');
    const closeCart = document.getElementById('close-cart');
    const cartOverlay = document.getElementById('cart-overlay');

    cartIcon.addEventListener('click', function () {
        cartSidebar.classList.add('active');
        cartOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    });

    closeCart.addEventListener('click', function () {
        cartSidebar.classList.remove('active');
        cartOverlay.classList.remove('active');
        document.body.style.overflow = 'auto';
    });

    cartOverlay.addEventListener('click', function () {
        cartSidebar.classList.remove('active');
        cartOverlay.classList.remove('active');
        document.body.style.overflow = 'auto';
    });
});

const search = document.getElementById("sarch-btn")
const icon = document.getElementById("icons");
const logo = document.getElementById("logo");
const nav = document.getElementById("nav")
const search_inp = document.getElementById("search");
const header = document.getElementById("header");
const close_btn = document.getElementById("close")
const searchbg = document.getElementById("search-bg")
search.addEventListener('click', () => {
    logo.classList.add("none");
    icon.classList.add("none");
    icon.classList.remove("header-icons");
    nav.classList.add("none");
    search_inp.classList.remove("none");
    header.classList.add("header-content2");
    header.classList.remove("header-content");
    search_inp.classList.add("space")
    searchbg.classList.remove("none");
});
close_btn.addEventListener("click", () => {
    logo.classList.remove("none");
    icon.classList.remove("none");
    icon.classList.add("header-icons");
    header.classList.add("header-content");
    nav.classList.remove("none");
    search_inp.classList.add("none");
    search_inp.classList.remove("space")
      searchbg.classList.add("none");
})
