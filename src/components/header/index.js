import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import LogoiWof from '../../assets/Logo-iWof.png'
import './index.css'

function Header() {
  return (
    <Navbar expand="lg">
      <Container>
        <div className='header-content'>        
            <Navbar.Brand>
                <img src={LogoiWof} alt="Logo iWof"/> 
            </Navbar.Brand>
            <div className='line-divisor'></div>
            <h1>Calculadora<br/> do empregador</h1>
        </div>
      </Container>
    </Navbar>
  );
}

export default Header;