import React from 'react';
import './footer.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright, faHeart } from '@fortawesome/free-solid-svg-icons'
function Footer() {
    return (
        <section className='footer'>
            <FontAwesomeIcon className='icon' icon={faCopyright} />
            <span>Designed With <FontAwesomeIcon className='heart' icon={faHeart} />  By <a href="https://wa.me/+201064907076"><b>Ahmed Gabr</b></a> </span>
        </section>
    );
}

export default Footer;