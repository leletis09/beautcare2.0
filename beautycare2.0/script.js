const searchIcon = document.querySelector(".search-icon")
const searchForm = document.querySelector(".search-form")
const menuIcon = document.querySelector(".menu-icon")
const navbar = document.querySelector(".navbar")

searchIcon.addEventListener("click", () => {
   searchForm.classList.add("active")
   navbar.classList.remove("active")
});
menuIcon.addEventListener("click", () => {
  navbar.classList.add("active")
  searchForm.classList.remove("active")
});
 window.onscroll = ()=>{
   searchForm.classList.remove("active")
   navbar.classList.remove("active")
 }