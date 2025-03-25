export function iniciarMenuLateral() {
  const menuToggle = document.querySelector(".menu-toggle");
  const sidebar = document.querySelector(".sidebar");
  const closeMenu = document.querySelector(".close-menu");

  if (!menuToggle || !sidebar || !closeMenu) return;

  menuToggle.addEventListener("click", () => {
    sidebar.style.left = "0";
  });

  closeMenu.addEventListener("click", () => {
    sidebar.style.left = "-250px";
  });
}
