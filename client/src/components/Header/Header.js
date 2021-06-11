import { Link } from 'react-router-dom';
import './Header.scss';

function Header() {
    return (
        <>
        <header className="header">
            <nav className="header__nav">
                <div>Menu</div>
                <Link to={'/'} className="header__nav-link">
                    RECORDS
                </Link>
                <div>User</div>
            </nav>
        </header>
        </>
    )
}

export default Header;