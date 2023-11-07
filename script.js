// toggel aktif

const navbarNav = document.querySelector(".navbar-nav");

// ketika dokumen menu di klik
document.querySelector("home").onclick = () => {
  navbarNav.classList.toggle("active");
};
