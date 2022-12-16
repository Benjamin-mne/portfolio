import { ImFacebook2 } from 'react-icons/im';
import { AiFillInstagram } from 'react-icons/ai';
import { SiDiscord } from 'react-icons/si';
import './footer.css'

import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Toaster, toast } from 'react-hot-toast'
import { useState } from 'react';


export const Footer = () => {
    const [copied, setCopied] = useState(false);

  return (
    <footer>
        <a href="" className="footer__logo">BENJAMIN DELGADO</a>
        
        <ul className='permalinks'>
            <li><a href="#">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>

        <div className="footer__socials">
            <a href="https://www.facebook.com/yaSIoDtahW/" target='_blank'><ImFacebook2/></a>
            <a href="https://www.instagram.com/fdoignite/" target='_blank'><AiFillInstagram/></a>
            <CopyToClipboard text='Mnesicles.#0203' >
              <a onClick={() => toast('User Copy: Mnesicles.#0203', {style:{background:'var(--color-primary)'}})}><SiDiscord/></a>
            </CopyToClipboard>
        </div>
  
        <div className="footer__copyright">
            <small>&copy; Delgado Benjamín. All rights reserved.</small>
        </div>
        <Toaster/>
    </footer>
  )
}
