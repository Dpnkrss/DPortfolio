import React, { useRef } from 'react';
import instagram from '../../assets/square-instagram.svg';
import facebook from '../../assets/facebook.svg';
import github from '../../assets/github.svg';
import youtube from '../../assets/youtube.svg';
import emailjs from '@emailjs/browser';

import './contact.css';

const Contact = () => {
  // eslint-disable-next-line no-undef
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_c0k5cl9',
        'template_ay9j8bi',
        form.current,
        'lE7sqL89kvu-QPGLU'
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
          alert('Email Sent!');
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <section id='contactPage'>
      <div id='contact'>
        <h1 className='contactPageTitle'>Contact Me</h1>
        <span className='contactDesc'>
          Please fill out the form below to discuss any work opportunities.
        </span>
        <form className='contactForm' ref={form} onSubmit={sendEmail}>
          <input
            type='text'
            className='name'
            placeholder='Your Name'
            name='from_name'
            required
          />
          <input
            type='email'
            className='email'
            placeholder='Your Email'
            name='to_name'
            required
          />
          <textarea
            className='msg'
            name='message'
            rows='5'
            placeholder='Your Message'
            required
          ></textarea>
          <button type='submit' value='send' className='submitBtn'>
            Submit
          </button>
          <div className='links'>
            <img src={instagram} alt='instagram' className='link' />
            <img src={facebook} alt='facebook' className='link' />
            <img src={github} alt='github' className='link' />
            <img src={youtube} alt='youtube' className='link' />
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
