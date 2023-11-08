import { Intro } from "../intro/Intro"
import { HeaderSocials } from "./HeaderSocials";

import './header.css';

export const Header = () => {
  return (
    <header>
        <div className="container header__container">
            <Intro/>
            <HeaderSocials/>
            <a href="#contact" className='scroll__down'>Scroll Down</a>
        </div>
    </header>
  )
}
