import { Link } from 'react-router-dom';
import Logo from '../../assets/images/Logo/RECORDS.svg';
import User from '../../assets/icons/user.svg';
import Menu from '../../assets/icons/menu.svg';
import './Header.scss';

function Header() {
    return (
        <>
        <header className="header">
            <nav className="header__nav">
                <img className="header__icon" src={Menu} alt="menu"/>
                <Link to={'/'} className="header__nav-link">
                    <img className="header__logo" src={Logo} alt="logo"/>
                </Link>
                <img className="header__icon" src={User} alt="user"/>
            </nav>
        </header>
        </>
    )
}

export default Header;