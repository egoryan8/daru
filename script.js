const hamburger = document.querySelector(".hamburger");
const menuList = document.querySelector(".menu-list");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active-h");
  menuList.classList.toggle("active-m");
})

document.querySelectorAll(".menu-list__link").forEach(n => n.addEventListener("click", () => {
  hamburger.classList.remove("active-h");
  menuList.classList.remove("active-m");
}))
