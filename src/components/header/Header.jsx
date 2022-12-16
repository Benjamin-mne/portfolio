import { Intro } from "../intro/Intro"
import { HeaderSocials } from "./HeaderSocials";
import './header.css';
import { Cta } from "./Cta";

export const Header = () => {
  return (
    <header>
        <div className="container header__container">
            <Intro/>
            <Cta/>
            <HeaderSocials/>
            <a href="#contact" className='scroll__down'>Scroll Down</a>
        </div>
    </header>
  )
}
