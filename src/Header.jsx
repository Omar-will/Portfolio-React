import React from 'react';
import './Header.scss';


function Header() {
  return (
    <header className="header" id="header">
        <h1>Mon Portfolio</h1>
        <nav className="nav container">
            {/* <a href="#" class="nav__logo" aria-label="Omar">Omar</a> */}
            <div className="nav__menu">
                <ul className="nav__list">
                    <li className="nav__item ">
                        <a href="#home" className="nav__link" aria-label="Aller à l'accueil">
                            <i className='bx bx-home'></i>
                        </a>
                    </li>

                    <li className="nav__item ">
                        <a href="#about" className="nav__link" aria-label="Aller à about">
                            <i className='bx bx-user'></i>
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="#skills" className="nav__link" aria-label="Aller au skills">
                            <i className='bx bx-book'></i>
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="#project" className="nav__link" aria-label="Aller au projet">
                            <i className='bx bx-wrench'></i>
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="#work" className="nav__link" aria-label="Aller à work">
                            <i className='bx bx-briefcase-alt-2'></i>
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="#contact" className="nav__link" aria-label="Aller au contact">
                            <i className='bx bx-message-square-dots'></i>
                        </a>
                    </li>
                </ul>
            </div>

            {/* <!--=============== theme change button ===============--> */}
            <i className='bx bx-moon change-theme change-theme-button' id="theme-button"></i>

        </nav>
    </header>
  );
}

export default Header;
