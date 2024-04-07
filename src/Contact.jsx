import React from 'react';
import emailjs from 'emailjs-com';
import './Contact.scss';
import RainyImage from './components/RainyDay'

function ContactSection() {
  const sendMail = () => {
    emailjs.init("8DPURZQ6Wq5Ge97Ek"); 

    var params = {
      sendername: document.querySelector("#sendername").value,
      to: document.querySelector("#to").value,
      subject: document.querySelector("#subject").value,
      message: document.querySelector("#message").value,
    };

    var serviceID = "service_ztthwyc";
    var templateID = "template_p984jv5";

    emailjs.send(serviceID, templateID, params)
      .then(res => {
        alert("Email Sent Successfully");

        // Effacez les champs après l'envoi de l'e-mail
        document.querySelector("#sendername").value = "";
        document.querySelector("#to").value = "";
        document.querySelector("#subject").value = "";
        document.querySelector("#message").value = "";

      })
      .catch(error => {
        console.error("Error sending email:", error);
      });
  };
  

  return (
      <section className="contact section" id="contact">
        {/* <span className="section__subtitle">Get in touch</span> */}
        
        <h3 className="section__title">Comment me contacter ? </h3>

        <div className="contact__container container grid">
          <div className="contact__content">
            <h3 className="contact__title contact__title-info">Joignabilité</h3>

            <div className="contact__info">
              <div className="contact__card">
              <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24">
                                <path fill="#a395e9" d="M20 4H6c-1.103 0-2 .897-2 2v5h2V8l6.4 4.8a1.001 1.001 0 0 0 1.2 0L20 8v9h-8v2h8c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm-7 6.75L6.666 6h12.668L13 10.75z"/>
                                <path fill="#a395e9" d="M2 12h7v2H2zm2 3h6v2H4zm3 3h4v2H7z"/>
                            </svg>
                <h3 className="contact__card-title">Email</h3>

                <a href="mailto:omar.bengoudifa@outlook.fr" target="_blank"  rel="noopener noreferrer" className="contact__button">
                  écrivez moi <i className='bx bx-right-arrow contact__button-icon'></i>
                </a>
              </div>

              <div className="contact__card">
                <svg xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 448 512">
                                
                                <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
                            </svg>
                <h3 className="contact__card-title">Whatsapp</h3>
                <span className="contact__card-data">0602040932</span>

                <a href="https://api.whatsapp.com/send?phone=+33602040932&text=Hey%20there!" target="_blank"  rel="noopener noreferrer" className="contact__button">
                  écrivez moi <i className='bx bx-right-arrow contact__button-icon'></i>
                </a>
              </div>

              <div className="contact__card">
              <svg xmlns="http://www.w3.org/2000/svg" height="1.5em" viewBox="0 0 512 512">
                                
                                <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"/></svg>
                           
                <h3 className="contact__card-title">Twitter</h3>
                <span className="contact__card-data">OmarBengoudifa</span>

                <a href="https://twitter.com/OmarBengoudifa" target="_blank"  rel="noopener noreferrer" className="contact__button">
                  écrivez moi <i className='bx bx-right-arrow contact__button-icon'></i>
                </a>
              </div>
            </div>
          </div>

          <div className="contact__content">
            <h3 className="contact__title contact__title-form">Poser votre question</h3>
            
            <div className="contact__form-div">
              <label htmlFor="sendername" className="contact__form-tag">Nom</label>
              <input type="text" id="sendername" name="sendername" placeholder="Entrez votre nom" className="contact__form-input" autoComplete="name" />
            </div>
            <div className="contact__form-div">
              <label htmlFor="to" className="contact__form-tag">Email</label>
              <input type="text" id="to" name="to" placeholder="Entrez votre email" className="contact__form-input" autoComplete="email" />
            </div>
            <div className="contact__form-div">
              <label htmlFor="subject" className="contact__form-tag">Titre</label>
              <input type="text" id="subject" name="subject" placeholder="Ajouter un titre" className="contact__form-input" autoComplete="email" />
            </div>
            <div className="contact__form-div contact__form-area">
              <label htmlFor="message" className="contact__form-tag">Message</label>
              <textarea name="message" id="message" cols="30" rows="10" placeholder="écrire votre message" className="contact__form-input"></textarea>
            </div>                    

            <button className="button" onClick={sendMail}>Envoyer votre message</button>
          </div>
        </div>
        <RainyImage />
      </section>
  );
}

export default ContactSection;
