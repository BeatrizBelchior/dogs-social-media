import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { ReactComponent as Dogs } from '../../Assets/dogs.svg'
import { UserContext } from '../../UserContext';

const Header = () => {
    const { data } = React.useContext(UserContext);

    return (
        <header className="header">
            <nav className="nav container">
                <Link className="logo" to="/" area-label="Dogs - Home">
                    <Dogs />
                </Link>
                {data ? (<Link className="login" to="/conta">{data.nome}</Link>) :
                    (<Link className="login" to="/login">Login / Criar</Link>)}
            </nav>
        </header>
    )
}

export default Header;
