import React from 'react';
import '../Scss/Footer.scss';
import footerData from '../Sections.json'; 

function Footer() {
  return (
    <footer className="footer">
      <section id="up"></section>
      <section id="down"></section>
      <section id="left"></section>
      <section id="right"></section>
      <div className="footer__container container">
        <ul className="footer__list">
          {footerData.links.map((link, index) => (
            <li className="footer__item" key={index}>
              <a href={link.href} className="footer__link">{link.label}</a>
            </li>
          ))}
        </ul>
        <ul className="footer__social">
          {footerData.social.map((social, index) => (
            <li className="footer__social-item" key={index}>
              <a href={social.href} target="_blank" rel="noopener noreferrer" className="footer__social-link" aria-label={`mon ${social.name}`}>
                <i className={social.icon}></i>
              </a>
            </li>
          ))}
        </ul>
        <span className="footer__copy">
          {footerData.copyRight}
        </span>
      </div>
    </footer>
  );
}

export default Footer;
