import React from 'react';

import './main.scss';
import Header from './Header';
import Home from './Home';
import About from './About';
import Skills from './Skills';
import Services from './Services';
import Work from './Work';
import Contact from './Contact';
import Footer from './Footer';
import reportWebVitals from './reportWebVitals';
import { createRoot } from 'react-dom/client'; 

const root = createRoot(document.getElementById('root')); 
root.render(
  <React.StrictMode>
    <Header />
    <Home />
    <About />
    <Skills />
    <Services />
    <Work />
    <Contact />
    <Footer />
  </React.StrictMode>
);

reportWebVitals();
