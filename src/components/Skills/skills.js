import React from 'react';
import './skilss.css';
import UIDesign from '../../assets/ux-design.png';
import WebDesign from '../../assets/graphic-designer.png';
import Appdesign from '../../assets/designer.png';
const Skills = () => {
  return (
    <section id='skills'>
      <span className='skillTitle'>What I do</span>
      <span className='skillDesc'>
        I am a skilled and passionate web developer with experience in creating
        visually appealing and user-responsive websitea.I have a strong
        understanding of design anda keen eye for details.I am proficent in
        HTML, CSS, JavaScript, React, Nodejd, ExpressJS, SQL, PostgressSQl, Git,
        AWS, Docker.
      </span>
      <div className='skillBars'>
        <div className='skillBar'>
          <img src={Appdesign} alt='UIDesign' className='skillBarImg' />
          <div className='skillBarText'>
            <h2>UI/UX design </h2>
            <p>
              Crafting intuitive and visually compelling user experiences
              tailored for engaging digital landscapes
            </p>
          </div>
        </div>

        <div className='skillBar'>
          <img src={WebDesign} alt='WebDesign' className='skillBarImg' />
          <div className='skillBarText'>
            <h2>Website design & Scripting </h2>
            <p>
              Building responsive and dynamic websites with a focus on seamless
              functionality and user-centric scriptingt
            </p>
          </div>
        </div>

        <div className='skillBar'>
          <img src={UIDesign} alt='Appdesign' className='skillBarImg' />
          <div className='skillBarText'>
            <h2>App Design</h2>
            <p>
              Designing sleek, user-friendly mobile responsive interfaces that
              streamline navigation and enhance user engagement
            </p>
          </div>
        </div>
      </div>

      <section id='skillList'>
        <div className='heading'>What I know</div>
        <div className='frontEnd'>
          <h2> Frontend </h2> <br />
          <div class='innerbox'>
            <span class='rounded-md '>HTML</span>
            <span class='rounded-md '>CSS</span>
            <span class='rounded-md b'>Tailwind</span> <br /> <br />
            <span class='rounded-md '>Javascript</span>
            <span class='rounded-md '>Typescript</span> <br /> <br />
            <span class='rounded-md'>React Js</span>
          </div>
        </div>

        <div className='frontEnd'>
          <h2> Backend </h2> <br />
          <div class='innerbox'>
            <span class='rounded-md '>NodeJs</span>
            <span class='rounded-md '>ExpressJs</span>
            <br /> <br />
            <span class='rounded-md '>Next Auth</span>
            <span class=' '> </span>
            <span class=' '> </span> <br /> <br />
            <span class=' '> </span> <br />
          </div>
        </div>

        <div className='frontEnd'>
          <h2> Database </h2> <br />
          <div class='innerbox'>
            <span class='rounded-md '>MySql</span>
            <span class='rounded-md '>PostgressSQl</span>
            <br /> <br />
            <span class='rounded-md '>Sql</span>
            <span class='rounded-md'>MangoDb </span>
            <span class=' '> </span> <br /> <br />
            <span class=' '> </span> <br />
          </div>
        </div>

        <div className='frontEnd'>
          <h2> Devops </h2> <br />
          <div class='innerbox'>
            <span class='rounded-md '>Docker</span>
            <span class='rounded-md '>Kubernetes</span>
            <br /> <br />
            <span class='rounded-md '>Jenkins</span>
            <span class='rounded-md'>AWS</span> <br />
            <br />
            <span class=' '> </span> <br />
          </div>
        </div>
      </section>
    </section>
  );
};

export default Skills;
