import { Link } from 'react-router-dom';
import Logo from '../../assets/images/Logo/RECORDS.svg';
import User from '../../assets/icons/user.svg';
import Menu from '../../assets/icons/menu.svg';
import './Header.scss';

function Header() {
    return (
        <header className="header">
            <div className="header__container">
                <nav className="header__nav">
                    <img className="header__icon" src={Menu} alt="menu"/>
                    <Link to={'/'} className="header__nav-link">
                        <img className="header__logo" src={Logo} alt="logo"/>
                    </Link>
                    <img className="header__icon" src={User} alt="user"/>
                </nav>
            </div>
        </header>
    )
}

export default Header;