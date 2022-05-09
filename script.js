const hamburger = document.querySelector(".hamburger");
const menuList = document.querySelector(".menu-list");
const headerWrapper = document.querySelector(".header-wrapper");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active-h");
  menuList.classList.toggle("active-m");
  headerWrapper.classList.toggle("active");
})

document.querySelectorAll(".menu-list__link").forEach(n => n.addEventListener("click", () => {
  hamburger.classList.remove("active-h");
  menuList.classList.remove("active-m");
  headerWrapper.classList.remove("active");
}))
