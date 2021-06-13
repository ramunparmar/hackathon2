import { Link } from 'react-router-dom';
import Marketplace from '../../assets/icons/marketplace.svg';
import Explore from '../../assets/icons/explore.svg';
import Collection from '../../assets/icons/collection.svg';
import './Footer.scss';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer__container">
                <nav className="footer__nav">
                    <Link to={'/'} className="footer__nav-link">
                        <div className="footer__button">
                            <img className="footer__icon" src={Marketplace} alt="marketplace"/>
                            <p>Marketplace</p>
                        </div>
                    </Link>
                    <Link to={'/explore'} className="footer__nav-link">
                        <div className="footer__button">
                            <img className="footer__icon" src={Explore} alt="marketplace"/>
                            <p>Explore</p>
                        </div>
                    </Link>
                    <Link to={'/artist'} className="footer__nav-link">
                        <div className="footer__button">
                            <img className="footer__icon" src={Collection} alt="marketplace"/>
                            <p>Collection</p>
                        </div>
                    </Link>
                </nav>
            </div>
        </footer>
    )
}

export default Footer;