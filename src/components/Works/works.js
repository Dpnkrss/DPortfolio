import React from 'react';
import './works.css';
import Portfolio1 from '../../assets/Portfolio1.png';
import Portfolio2 from '../../assets/Portfoilo2.png';
import Portfolio3 from '../../assets/Portfolio3.png';
import Portfolio4 from '../../assets/Portfolio4.png';
import Portfolio5 from '../../assets/Portfolio5.png';
import Portfolio6 from '../../assets/portfolio6.png';

const Works = () => {
  const portfolioItems = [
    {
      image: Portfolio1,
      description: 'Forkify- Joy of cooking',
      url: 'https://github.com/Dpnkrss/Forkify.git',
    },
    {
      image: Portfolio2,
      description: 'Mapty - navigator',
      url: 'git push -u origin master',
    },
    {
      image: Portfolio3,
      description: 'Doctors Application - MERN',
      url: 'https://github.com/Dpnkrss/perfect-heal-clinic.git',
    },
    {
      image: Portfolio4,
      description: 'Spotify-clone',
      url: 'https://github.com/Dpnkrss/spotify-clone.git',
    },
    {
      image: Portfolio5,
      description: 'CrownClothing - Ecommerce',
      url: 'https://github.com/Dpnkrss/dcrwn-clothing.git',
    },
    {
      image: Portfolio6,
      description: 'Banking Game',
      url: 'https://github.com/yourusername/forkify',
    },
  ];

  return (
    <section id='works'>
      <h2 className='worksTitle'>My Portfolio</h2>
      <span className='worksDesc'>
        I take pride in paying attention to the smallest details and making sure
        that my work is pixel perfect. I am excited to bring my skills and
        experience to help businessess achieve their goals and create a strong
        online presence.
      </span>

      <div className='workImgs'>
        {portfolioItems.map((item, index) => (
          <div className='portfolioItem' key={index}>
            <a href={item.url} target='_blank' rel='noopener noreferrer'>
              <img
                src={item.image}
                alt={`Portfolio ${index + 1}`}
                className='worksImg'
              />
            </a>
            <div className='portfolioDesc'>{item.description}</div>
          </div>
        ))}
      </div>
      <button
        className='workBtn'
        onClick={() => (window.location.href = 'https://github.com/Dpnkrss')}
      >
        See More
      </button>
    </section>
  );
};

export default Works;
