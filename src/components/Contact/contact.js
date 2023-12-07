import React from 'react';
import instagram from '../../assets/square-instagram.svg';
import facebook from '../../assets/facebook.svg';
import github from '../../assets/github.svg';
import youtube from '../../assets/youtube.svg';

import './contact.css';

const Contact = () => {
  return (
    <section id='contactPage'>
      <div id='contact'>
        <h1 className='contactPageTitle'>Contact Me</h1>
        <span className='contactDesc'>
          Please fill out the form below to discuss any work oppertunities.
        </span>
        <form className='contactForm'>
          <input type='text' className='name' placeholder='Your Name' />
          <input type='email' className='email' placeholder='Your Email' />
          <textarea
            className='msg'
            name='message'
            rows='5'
            placeholder='Your Message '
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
