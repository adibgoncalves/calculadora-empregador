import React from 'react';
import Container from 'react-bootstrap/Container';
import LogoiWof from '../../assets/Logo-iWof.png'
import './index.css'

function Footer() {
  return (
    <footer>
        <Container>
            <div className='footer-content'>
                <img src={LogoiWof} alt="Logo iWof"/>
                <span>Copyright © iWolf 2022</span>
            </div>
        </Container>
    </footer>
  );
}

export default Footer;