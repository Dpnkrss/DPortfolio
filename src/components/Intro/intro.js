import React from 'react';
import './intro.css';
import bg from '../../assets/image-PhotoRoom.png';
import btnImg from '../../assets/hireme.svg';
import { Link } from 'react-scroll';

const Intro = () => {
  return (
    <section id='intro'>
      <div className='introContent'>
        <span className='hello'>Hello,</span>
        <span className='introText'>
          I'm <span className='introName'>Deepankar</span> <br />
          Website Developer
        </span>
        <p className='introPara'>
          I am a skilled and passionate web developer with experience in
          creating <br /> visually appealing and user-responsive websites.
        </p>
        <Link>
          <button className='btn'>
            <img src={btnImg} alt='hireme' className='btnImg' />
            <span
              className='Hire'
              onClick={() =>
                document
                  .getElementById('contact')
                  .scrollIntoView({ behavior: 'smooth' })
              }
            >
              Hire Me
            </span>
          </button>
        </Link>
      </div>
      <img src={bg} alt='Profile' className='bg' />
    </section>
  );
};

export default Intro;
