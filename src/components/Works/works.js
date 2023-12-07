import React from 'react';
import './works.css';
import Portfolio1 from '../../assets/Portfolio1.png';

const Works = () => {
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
        <img src={Portfolio1} alt='' className='worksImg' />
        <img src={Portfolio1} alt='' className='worksImg' />
        <img src={Portfolio1} alt='' className='worksImg' />
        <img src={Portfolio1} alt='' className='worksImg' />
        <img src={Portfolio1} alt='' className='worksImg' />
        <img src={Portfolio1} alt='' className='worksImg' />
      </div>
      <button className='workBtn'>See More</button>
    </section>
  );
};

export default Works;
