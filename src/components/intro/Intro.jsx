import './intro.css';
import Me from '../../img/out.png';
import { Cta } from '../header/Cta'

export const Intro = () => {
  return (
    <div className='intro'>
        <div className ='intro-left'>
            <div className='intro-left-wrapper'>
                <h2 className='intro-hi'>Hi, My name is</h2>
                <h1 className='intro-name'>Benjamín Delgado</h1>
                <div className='intro-title'>
                    <div className='intro-title-wrapper'>
                        <div className="intro-title-item">Web Developer</div>
                        <div className="intro-title-item">Student</div>
                        <div className="intro-title-item">Producer</div>
                        <div className="intro-title-item">Artist</div>
                        <div className="intro-title-item">Programmer</div>
                    </div>
                </div>
                <p className="intro-desc">
                I develop and design web applications and services for clients around the world.
                </p>
                <Cta/>
            </div>
        </div>
        <div className ='intro-right'>
            <div className='intro-bg'></div>
            <img src={Me} alt="" className="intro-img" />
        </div>
    </div>
  )
}
