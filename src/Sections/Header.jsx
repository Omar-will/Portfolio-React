import React from 'react';
import '../Header.scss';
import SmokeEffect from "../components/Smoke";
import navData from '../Sections.json'; 

function Header() {

  const { navItems } = navData;

  return (
    <header className="header" id="header">
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
            <i className='bx bx-moon change-theme change-theme-button' id="theme-button"></i>
            <SmokeEffect />
        </nav>
    </header>
  );
}

export default Header;
