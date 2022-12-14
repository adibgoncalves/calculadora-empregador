import React, {useState} from 'react';

import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import Clt from './components/clt';
import Contrato from './components/contrato';
import Form from 'react-bootstrap/Form';
import Animation from '../src/assets/calculator.png'

function App() {
  const [tipoCalculo, setTipoCalculo] = useState();

  return (
    <>
    <Header />
    <div className="App">
      <div className='container'>
        <div className='type-calc-select'>
          <Form>
            <Form.Group>
              <Form.Label className='h5'>Selecione o tipo de cálculo</Form.Label>
              <Form.Select aria-label="Default select example" onChange={(e) => {setTipoCalculo(e.target.value)}} value={tipoCalculo}>
                <option>Tipo do cálculo</option>
                <option value="1">Contrato</option>
                <option value="2">CLT</option>
              </Form.Select>
            </Form.Group>
          </Form>
        </div>
        <div className='calculation-area'>
          {tipoCalculo === "1" ? <Contrato/> : tipoCalculo === "2" ? <Clt/> : 
            <div className='illustration'>
              <h4>Nenhum tipo de cálculo foi selecionado</h4>
              <span>Selecione um tipo para calcular</span>
              <img src={Animation} alt="Ilustração" />
            </div>}
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
}

export default App;
