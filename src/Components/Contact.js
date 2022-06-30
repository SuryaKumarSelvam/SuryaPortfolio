import React from 'react'
import '../Components/Contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import  { useRef } from 'react';
import emailjs from 'emailjs-com'


const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();


    emailjs.sendForm('service_6u65o9c', 'template_meos68f', form.current, 'CznZIxc9jIkAqJiX4')
    e.target.result();
  };

  return (
    <section id='contact'>
    <h5>Get In Touch</h5>
    <h2>Contact Me</h2>
    <div className='container contact_continer'>
      <div className='contact_options'>
        <article className='contact_option'>
          <MdOutlineEmail className='contact_icons'/>
          <h4>Email</h4>
          <h5>slsuryakumar20@gmail.com</h5>
          <a href='mailto:slsurykumar20@gmail.com' target='_blank'>Send a Message</a>
        </article>
        <article className='contact_option'>
          <RiMessengerLine className='contact_icons'/>
          <h4>Messenger</h4>
          <h5>Surya Kumar</h5>
          <a href='https://m.me/' target='_blank'>Send a Message</a>
        </article>
        <article className='contact_option'>
          <BsWhatsapp className='contact_icons'/>
          <h4>WhatsAPP</h4>
          <h5>+91 8056500243</h5>
          <a href='https://api.whatsapp.com/send?+918056500243' target='_blank'>Send a Message</a>
        </article>
      </div>
      <form ref={form} onSubmit={sendEmail}>
        <input type='text' name='name' placeholder='Your Full Name' required/>
        <input type='text' name='email' placeholder='Your Email' required />
        <textarea name='message' rows='7' placeholder='Your Message' required></textarea>
        <button type='submit' className='btn btn-primary'>Send Message</button>
      </form>
    </div>
    </section>
  )
}

export default Contact