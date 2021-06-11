import { Link } from 'react-router-dom';
import './Footer.scss';

function Footer() {
    return (
        <>
        <footer className="footer">
            <nav className="footer__nav">
                <Link to={'/'} className="footer__nav-link">
                    Marketplace
                </Link>
                <Link to={'/explore'} className="footer__nav-link">
                    Explore
                </Link>
                <Link to={'/artist'} className="footer__nav-link">
                    Collection
                </Link>
            </nav>
        </footer>
        </>
    )
}

export default Footer;