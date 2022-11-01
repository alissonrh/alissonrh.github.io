import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import './contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import { BsWhatsapp } from 'react-icons/bs'

const Contact = () => {

    const form = useRef();
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_j1ck2ns', 'template_ngfmsce', form.current, 'EPxqQqrA8e1X7OJCc')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });

        e.target.reset()
    };

  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className='contact_option' >
            <MdOutlineEmail className='contact_option-icon' />
            <h4>Email</h4>
            <h5>alisson.honorato@live.com</h5>
            <a href="mailto:alisson.honorato@live.com" rel="noreferrer" target='_blank'>Send a message</a>
          </article>
          <article className='contact_option' >
            <MdOutlineEmail className='contact_option-icon' />
            <h4>Messenger</h4>
            <h5>alisson.honorato@live.com</h5>
            <a href="mailto:alisson.honorato@live.com" rel="noreferrer" target='_blank'>Send a message</a>
          </article>
          <article className='contact_option' >
            <BsWhatsapp className='contact_option-icon'/>
            <h4>Whatapp</h4>
            <h5>123456789</h5>
            <a href="https://api.whatsapp.com/send?phone=5548998264596" rel="noreferrer" target='_blank'>Send a message</a>
          </article>
        </div>
        {/* END OF CONTACT */}
        <form ref={form} onSubmit={sendEmail} >
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required/>
          <textarea name='message'rows='7' placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary' >Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
