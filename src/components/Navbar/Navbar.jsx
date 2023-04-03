import './navbar.css';
import Container from '../UI/Container/Container';
import { useState } from 'react';

const Navbar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <nav className={isMenuOpen && 'open'}>
            <Container>
                <ul className="nav-list">
                    <li onClick={() => setIsMenuOpen(!isMenuOpen)} className="nav-menu">
                        <div className="menu-icon"></div>
                    </li>
                    <li className="nav-item">
                        <a href="#">
                            WORKS
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#">
                            ABOUT
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#">
                            SERVICES
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#">
                            BLOG
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#">
                            CONTACT
                        </a>
                    </li>
                </ul>
            </Container>
        </nav>
    );
}

export default Navbar;