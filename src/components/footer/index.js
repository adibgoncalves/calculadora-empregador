import React from 'react';
import Container from 'react-bootstrap/Container';
import LogoFbc from '../../assets/fbc-logo.jpeg';
import './index.css';

function Footer() {
  return (
    <footer>
        <Container>
            <div className='footer-content'>
                <img src={LogoFbc} alt="Logo iWof"/>
                <span>Copyright © FBC Finanças 2022 | Desenvolvido por FBC Finanças</span>
            </div>
        </Container>
    </footer>
  );
}

export default Footer;