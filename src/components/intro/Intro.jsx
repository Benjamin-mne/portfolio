import './intro.css';
import { Cta } from '../header/Cta'

export const Intro = () => {
    return (
    <div className='intro'>
        <h4 className='intro-hi'>¡Hi there! <label style={{fontStyle: 'normal'}}>👋</label> My name is</h4>
        <h1 className='intro-name'>Benjamín Delgado</h1>
        <p className="intro-desc">
            I develop and design web applications and services for clients around the world.
        </p>
        <Cta/>
    </div>
  )
}
