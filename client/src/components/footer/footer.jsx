import { useHistory } from "react-router-dom";

import './footer.styles.scss';

import logo from '../../img/logo-gradient-dark.png';
import { ReactComponent as LogoFacebook } from '../../img/logo-facebook.svg';
import { ReactComponent as LogoTwitter } from '../../img/logo-twitter.svg';
import { ReactComponent as LogoLinkedin } from '../../img/logo-linkedin.svg';
import { ReactComponent as LogoInstagram } from '../../img/logo-instagram.svg';

const Footer = () => {

    let history= useHistory();

    const handleLinkedinClick = () => {
        window.open('https://www.linkedin.com/in/reut-lichtenfeld-50b956143/');
    };

    const handleLogoClick = () => {
        history.push('/');
        window.scrollTo(0, 0);
    }

    return(
    <div className="footer">
        <div className="footer__logo-container">
            <img src={logo} alt='Logo' className='footer__logo-img' onClick={handleLogoClick}/>
        </div>
        <div className="footer__content">
            <div className="footer__section">
                <h1>Learn More<br/></h1>
                <p>Company<br/></p>
                <p>Contact Us<br/></p>
                <p>Careers<br/></p>
                <p>Private Policy<br/></p>
                <p>Terms</p>
            </div>
            <div className="footer__section">
                <h1>Follow Us</h1>
                <div className="footer__social-logos">
                    <LogoFacebook className="facebook-logo"/>
                    <LogoTwitter className="twitter-logo"/>
                    <LogoLinkedin className="likedin-logo" onClick={handleLinkedinClick} />
                    <LogoInstagram className="instagram-logo"/>
                </div>
                {/* <button className="footer__sign-up">
                    SIGN UP
                </button> */}
            </div>
        </div>
        <div className="footer__rights"> © 2021 by Reut Lichtenfeld. </div>
    </div>
    )
};

export default Footer;