document.addEventListener("DOMContentLoaded", () => {
  const searchIcon = document.querySelector(".search-icon");
  const searchForm = document.querySelector(".search-form");
  const menuIcon = document.querySelector(".menu-icon");
  const navbar = document.querySelector(".navbar");

  if (searchIcon) {
      searchIcon.addEventListener("click", () => {
          searchForm.classList.add("active");
          navbar.classList.remove("active");
      });
  } else {
      console.error("searchIcon não encontrado");
  }

  if (menuIcon) {
      menuIcon.addEventListener("click", () => {
          navbar.classList.add("active");
          searchForm.classList.remove("active");
      });
  } else {
      console.error("menuIcon não encontrado");
  }

  window.onscroll = () => {
      searchForm.classList.remove("active");
      navbar.classList.remove("active");
  };
});
