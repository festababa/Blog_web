let SearchIcon = document.querySelector("#SearchIcon");
let SearchForm = document.querySelector(".SearchForm");

SearchIcon.onclick = () => {
  SearchIcon.classList.toggle("fa-times");
  SearchForm.classList.toggle("active");
  Menu.classList.remove("fa-times");
  Navbar.classList.remove("active");
};

let Menu = document.querySelector("#MenuBars");
let Navbar = document.querySelector(".navbar");

Menu.onclick = () => {
  Menu.classList.toggle("fa-times");
  Navbar.classList.toggle("active");
  SearchIcon.classList.remove("fa-times");
  SearchForm.classList.remove("active");
};

let ThemeToggle = document.querySelector(".themeToggle");
let Togglebtn = document.querySelector(".ToggleBtn");

