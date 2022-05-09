const hamburger = document.querySelector(".hamburger");
const menuList = document.querySelector(".menu-list");
const headerWrapper = document.querySelector(".header-wrapper");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  menuList.classList.toggle("active");
  headerWrapper.classList.toggle("active");
})

document.querySelectorAll(".menu-list__link").forEach(n => n.addEventListener("click", () => {
  hamburger.classList.remove("active");
  menuList.classList.remove("active");
  headerWrapper.classList.remove("active");
}))
