import React from 'react';
import {Link} from 'react-router-dom';

const Footer = (props) => {
    return(
        <footer>
            <Link to={`#`}>Back To Top</Link>
            <Link to={'/mypotlucks'}> My Potlucks </Link>
            <Link to={'/faq'}>F.A.Q.</Link>
            <Link to={'/contact'}>Contact Us</Link>
        </footer>
    )
}

export default Footer;