import React, { useEffect, useRef } from 'react';
import '../Scss/Header.scss';
import SmokeEffect from "../components/Smoke";
import navData from '../Sections.json'; 


function Header() {
  const { navItems } = navData;
  const themeButtonRef = useRef(null);
  const lightTheme = "light-theme";
  const iconTheme = "bx-sun";

  const getCurrentTheme = () =>
    document.body.classList.contains(lightTheme) ? "light" : "dark";
  const getCurrentIcon = () =>
    themeButtonRef.current.classList.contains(iconTheme) ? "bx bx-moon" : "bx bx-sun";

  const applyTheme = () => {
    const selectedTheme = localStorage.getItem("selected-theme") || "dark";
    const selectedIcon = localStorage.getItem("selected-icon") || "bx bx-moon";

    document.body.classList.toggle(lightTheme, selectedTheme === "light");
    themeButtonRef.current.classList.toggle(iconTheme, selectedIcon === "bx bx-sun");
  };

  useEffect(() => {
    applyTheme();

    const themeButton = themeButtonRef.current;
    const toggleTheme = () => {
      document.body.classList.toggle(lightTheme);
      themeButton.classList.toggle(iconTheme);

      const currentTheme = getCurrentTheme();
      const currentIcon = getCurrentIcon();

      localStorage.setItem("selected-theme", currentTheme);
      localStorage.setItem("selected-icon", currentIcon);
    };

    themeButton.addEventListener("click", toggleTheme);
    return () => themeButton.removeEventListener("click", toggleTheme);
  }, []);

  return (
    <header className="header" id="header">
      <img className="sun" src="../assets/img/sun.webp" alt="Sun" />
        <h1>Mon Portfolio</h1>
        <nav className="nav container">
            {/* <a href="#" class="nav__logo" aria-label="Omar">Omar</a> */}
            <div className="nav__menu">
                <ul className="nav__list">
                    {navItems.map((item, index) => (
                      <li className="nav__item" key={index}>
                        <a href={item.link} className="nav__link" aria-label={item.label}>
                          <i className={`bx ${item.icon}`}></i>
                        </a>
                      </li>
                    ))}
                </ul>
            </div>

            {/* <!--=============== theme change button ===============--> */}
            <i
          ref={themeButtonRef}
          className='bx bx-moon change-theme change-theme-button'
          id="theme-button"
        ></i>
            <SmokeEffect />
        </nav>
    </header>
  );
}

export default Header;
