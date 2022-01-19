import React from 'react';
import './Footer.css';
import { ReactComponent as Dogs } from '../../Assets/dogs-footer.svg';

const Footer = () => {
    return (
        <footer className='footer'>
            <Dogs />
            <p>Dogs. Alguns direitos reservados.</p>
        </footer>
    )
}

export default Footer
