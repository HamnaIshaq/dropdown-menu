const dropdownMenuBtn = document.querySelectorAll(".dropdown-menu-btn");

dropdownMenuBtn.forEach((menuBtn) => {
  menuBtn.addEventListener("click", (e) => toggleDropdownMenu(e));
});

function toggleDropdownMenu(e) {
  const dropdownMenu = e.target.nextElementSibling;
  if (dropdownMenu.style.transform === "scale(1, 0)") {
    dropdownMenu.style.transform = "scale(1, 1)";
    dropdownMenu.children[0].style.opacity = "1";
  } else {
    dropdownMenu.style.transform = "scale(1, 0)";
    dropdownMenu.children[0].style.opacity = "0";
  }
}
