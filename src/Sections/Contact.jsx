import React from 'react';
import emailjs from 'emailjs-com';
import '../Scss/Contact.scss';
import RainyImage from '../components/RainyDay';
import jsonData from '../Sections.json';

function ContactSection() {
  const { contact } = jsonData;

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
      <h3 className="section__title">{contact.title}</h3>
      <div className="contact__container container grid">
        {contact.info.map((info, index) => (
          <div className="contact__content" key={index}>
            <h3 className="contact__title contact__title-info">{info.title}</h3>
            <div className="contact__info">
              {info.methods.map((method, methodIndex) => (
                <div className="contact__card" key={methodIndex}>
                  <svg className="contact__icon" xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 448 512">
                    <path d={method.icon}></path>
                  </svg>
                  <h3 className="contact__card-title">{method.name}</h3>
                  {method.data && <span className="contact__card-data">{method.data}</span>}
                  <a href={method.link} target="_blank" rel="noopener noreferrer" className="contact__button">
                    écrivez moi <i className='bx bx-right-arrow contact__button-icon'></i>
                  </a>
                </div>
              ))}
            </div>
          </div>
        ))}
        <div className="contact__content">
          <h3 className="contact__title contact__title-form">{contact.formTitle}</h3>
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
