import React from 'react';
import './Footer.scss';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container container">

        <ul className="footer__list">
          <li className="footer__item">
            <a href="#home" className="footer__link" >Home</a>
          </li>
          <li className="footer__item">
            <a href="#about" className="footer__link">About</a>
          </li>
          <li className="footer__item">
            <a href="#skills" className="footer__link">Skills</a>
          </li>
          <li className="footer__item">
            <a href="#project" className="footer__link">Project</a>
          </li>
          <li className="footer__item">
            <a href="#work" className="footer__link">Work</a>
          </li>
          <li className="footer__item">
            <a href="#contact" className="footer__link">Contact</a>
          </li>
        </ul>

        <ul className="footer__social">
          <li className="footer__social-item">
            <a href="https://www.facebook.com/Mr.momar.bg" target="_blank" rel="noopener noreferrer" className="footer__social-link" aria-label="mon facebook">
              <i className='bx bxl-facebook footer__social-icon'></i>
            </a>
          </li>
          <li className="footer__social-item">
            <a href="https://twitter.com/Omar09081988" target="_blank" rel="noopener noreferrer" className="footer__social-link" aria-label="mon twitter">
              <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
                
                <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"/>
              </svg>
            </a>
          </li>
          <li className="footer__social-item">
            <a href="https://www.linkedin.com/in/omar-bengoudifa-59a147151/" target="_blank" rel="noopener noreferrer" className="footer__social-link" aria-label="mon linkedin">
              <i className='bx bxl-linkedin footer__social-icon'></i>
            </a>
          </li>
          <li className="footer__social-item">
            <a href="https://www.instagram.com/omar.bengoudifa/" target="_blank" rel="noopener noreferrer" className="footer__social-link" aria-label="mon instagram">
              <i className='bx bxl-instagram footer__social-icon'></i>
            </a>
          </li>
        </ul>

        <span className="footer__copy">
          &#169; 2023. All rights reserved.
        </span>
      </div>
    </footer>
  );
}

export default Footer;
