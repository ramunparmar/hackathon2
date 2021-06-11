import { Link } from 'react-router-dom';
import './Header.scss';




function Header() {
    return (
        <>
        <header className="header">
            <nav className="header__nav">
                <Link to={'/'} className="header__nav-link">
                    Home
                </Link>
                <Link to={'/explore'} className="header__nav-link">
                    Explore
                </Link>
                <Link to={'/artist'} className="header__nav-link">
                    Artist
                </Link>
                <Link to={'/auction'} className="header__nav-link">
                    Auction
                </Link>
                <Link to={'/payment'} className="header__nav-link">
                    Payment
                </Link>
            </nav>
        </header>
        </>
    )
}

export default Header;