import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { ReactComponent as Dogs } from '../../Assets/dogs.svg'

const Header = () => {
    return (
        <header className="header">
            <nav className="nav container">
                <Link className="logo" to="/" area-label="Dogs - Home">
                    <Dogs />
                </Link>
                <Link className="login" to="/login">Login/Cadastrar</Link>
            </nav>
        </header>
    )
}

export default Header;
