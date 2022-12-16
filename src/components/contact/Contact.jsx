import './contact.css'
import { TfiEmail } from 'react-icons/tfi'
import { AiOutlineWhatsApp } from 'react-icons/ai'
import { useRef } from 'react'
import emailjs from '@emailjs/browser';

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_chhze7d', 'template_n85q7uv', form.current, 'EXy5dgOf8EgM6yG7r')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    
      e.target.reset()
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <TfiEmail className="contact__option-icon"/>
            <h4>Email</h4>
            <h5>benjamindelgado.contact@gmail.com</h5>
            <a href="mailto:benjamindelgado.contact@gmail.com">Send a message</a>
          </article>
          <article className="contact__option">
            <AiOutlineWhatsApp className="contact__option-icon"/>
            <h4>WhatsApp</h4>
            <h5>+54 3446-400156</h5>
            <a href="http://api.whatsapp.com/send?phone=543446400156" target='_blank' >Send a message</a>
          </article>
        </div>
        <form action='' ref={form} onSubmit={sendEmail}>
          <input type="text" name="user_name" placeholder='Your Full Name' required/>
          <input type="email" name="user_email" placeholder='Your Email' required/>
          <textarea name="message" rows="7" placeholder='Your Message...' required></textarea>
          <div className='button__container'>
            <button type="submit" value="Send" className='btn btn-primary'>Send Message</button>
          </div>
        </form>
      </div>
    </section>
  )
}
