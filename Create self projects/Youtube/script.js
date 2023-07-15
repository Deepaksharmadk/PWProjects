let MenuOption = document.querySelector(".menu-icon");

let sidebarOption = document.querySelector(".sidebar");

MenuOption.onclick = function () {
  sidebarOption.classList.toggle("smallside-op");
};
