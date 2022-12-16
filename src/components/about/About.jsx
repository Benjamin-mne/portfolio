import './about.css'
import { ImBooks } from 'react-icons/im'
import { useState } from 'react'
import { MdPiano } from 'react-icons/md'
import { GiStairsGoal } from 'react-icons/gi'
import Me from '../../img/about-me.png'

export const About = () => {

  const [current, setCurrent] = useState('studies');

  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className='container about__container'>
        <div className='about__me' >
          <img src={Me} alt="about-img" className='hobbyes about__me-image'/>
          <div className='about__me-img-icon' >
              {current === 'studies' && <ImBooks className='about__icon' style={{fontSize:'10rem'}}/>}
              {current === 'hobbyes' && <MdPiano className='about__icon' style={{fontSize:'10rem'}}/>}
              {current === 'goals' && <GiStairsGoal className='about__icon' style={{fontSize:'10rem'}}/>}
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card' onMouseEnter={() => setCurrent('studies')}>
              <ImBooks className='about__icon' />
              <h5>Studies</h5>
              <small>1  Year Math Teacher</small><br/>
              <small>2 Years Engineering</small>
            </article>
            <article className='about__card' onMouseEnter={() => setCurrent('hobbyes')}>
              <MdPiano className='about__icon' />
              <h5>Hobbyes</h5>
              <small>Musical Production</small><br/>
              <small>Play Chess</small>
            </article>
            <article className='about__card' onMouseEnter={() => setCurrent('goals')}>
              <GiStairsGoal className='about__icon'/>
              <h5>Goals</h5>
              <small>Economic Stability</small><br/>
              <small>Keep Learning</small>
            </article>
          </div>
          { current === 'studies' && 
          <p style={{minHeight:'76px'}}>I studied <a>Information Systems Engineering</a> for more than two years at the National Technological University, where I found a love for mathematics and programming. In 2022 I returned to my hometown to start the <a>Mathematics Teaching</a> career that I am currently studying.</p>
          }
          { current === 'hobbyes' && 
          <p style={{minHeight:'76px'}}>In my free time I like to <a>listen and produce music</a> <small><a href='https://open.spotify.com/artist/0SyapgohHwceqcP7mJpAkq?si=JP0g923JTYi5dqgQlHLm6g' target='_blank' >(listen on Spotify)</a></small> I also enjoy playing <a>video games</a> or <a>board games</a> with friends, reading a <a>book</a>, watching a <a>movie, video</a> or <a>serie</a>.</p>
          }
          { current === 'goals' && 
          <p style={{minHeight:'76px'}}>My goals for the future are: achieve <a>economic stability</a>, master more <a>programming paradigms</a>, investigate other <a>fields of mathematics</a>, finish the courses and above all <a>keep learning.</a></p>
          }
          <div style={{display:'flex', justifyContent:'flex-end' }} >
            <a href="#contact" className='btn btn-primary'>Let's Talk</a>
          </div>
        </div>
      </div>      
    </section>
  )
}
