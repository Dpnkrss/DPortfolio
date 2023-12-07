import React from 'react';
import './navbar.css';
import logo from '../../assets/logo2.png';
// import contactImage from '../../assets/contact.png';
import contactImageC from '../../assets/address-book-regular.svg';
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <img src={logo} alt='Logo' className='logo' />
      <div className='desktopMenu'>
        <Link
          activeClass='active'
          to='intro'
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className='desktopMenuListItem'
        >
          Home
        </Link>
        <Link
          activeClass='active'
          to='skills'
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className='desktopMenuListItem'
        >
          About
        </Link>
        <Link
          activeClass='active'
          to='works'
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className='desktopMenuListItem'
        >
          Portfolio
        </Link>
        <Link
          activeClass='active'
          to='contact'
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className='desktopMenuListItem'
        >
          Contact
        </Link>
      </div>
      <button
        className='desktopMenuBtn'
        onClick={() =>
          document
            .getElementById('contact')
            .scrollIntoView({ behavior: 'smooth' })
        }
      >
        <img src={contactImageC} alt='' className='desktopMenuImg' />
        Contact Me
      </button>
    </nav>
  );
};

export default Navbar;
