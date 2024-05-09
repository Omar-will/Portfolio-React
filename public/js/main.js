/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader() {
    const header = document.getElementById("header");
    if (this.scrollY >= 50) header.classList.add("scroll-header");
    else header.classList.remove("scroll-header");
  }
  window.addEventListener("scroll", scrollHeader);
  
  /*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
  
  const sections = document.querySelectorAll("section[id]");
  
  function scrollActive() {
    const scrollY = window.pageYOffset;
  
    sections.forEach((current) => {
      const sectionHeight = current.offsetHeight,
        sectionTop = current.offsetTop - 58,
        sectionId = current.getAttribute("id");
    
      const navLink = document.querySelector(".nav__menu a[href*=" + sectionId + "]");
      if (navLink) {
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          navLink.classList.add("active-link");
        } else {
          navLink.classList.remove("active-link");
        }
      }
    });
    
  }
  window.addEventListener("scroll", scrollActive);
  
  /*=============== LIGHT DARK THEME ===============*/
  const themeButton = document.getElementById("theme-button");
const lightTheme = "light-theme";
const iconTheme = "bx-sun";

const getCurrentTheme = () =>
  document.body.classList.contains(lightTheme) ? "light" : "dark";
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "bx bx-moon" : "bx bx-sun";

const applyTheme = () => {
  const selectedTheme = localStorage.getItem("selected-theme") || "light";
  const selectedIcon = localStorage.getItem("selected-icon") || "bx bx-sun";

  document.body.classList.toggle(lightTheme, selectedTheme === "light");
  themeButton.classList.toggle(iconTheme, selectedIcon === "bx bx-sun");
};

applyTheme(); 

themeButton.addEventListener("click", () => {
  document.body.classList.toggle(lightTheme);
  themeButton.classList.toggle(iconTheme);

  const currentTheme = getCurrentTheme();
  const currentIcon = getCurrentIcon();

  localStorage.setItem("selected-theme", currentTheme);
  localStorage.setItem("selected-icon", currentIcon);
});

  
  