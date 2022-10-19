import React, {useState} from 'react';

import Form from 'react-bootstrap/Form';

function Contrato() {
  const [tipoFucao, setTipoFucao] = useState(0)
  const [valor, setValor] = useState(0)

  return (
    <>
      <div className='container'>
        <h2>Contrato</h2>
        <Form className=''>
          <Form.Label className='h5'>Selecione a função</Form.Label>
          <Form.Select aria-label="Selecionar função" onChange={(e) => {
            if(e.target.value === "1"){
              setValor(9.60 * 220)
            }else if(e.target.value === "2") {
              setValor(10.50 * 220)
            } else {
              setValor(0)
            }
            setTipoFucao(e.target.value)}
          }>
            <option>Função</option>
            <option value="1">ASG</option>
            <option value="1">EMBALADOR</option>
            <option value="1">AUXILIAR DE ESTACIONAMENTO</option>
            <option value="1">REPOSITOR DE MERCADORIAS</option>
            <option value="1">REPOSITOR DE HORTFRUIT</option>
            <option value="2">OPERADOR DE CAIXA</option>
            <option value="1">BALCONISTA DE AÇOUGUE</option>
            <option value="1">BALCONISTA DE PADARIA</option>
            <option value="1">AUXILIAR DE COZINHA</option>
            <option value="2">CAMAREIRA</option>
            <option value="1">CUMIM</option>
            <option value="2">GARÇOM</option>
            <option value="1">FISCAL DE LOJA</option>
            <option value="1">PANFLETEIRO</option>
            <option value="1">PORTEIRO</option>
            <option value="1">MONTADOR DE CESTA BÁSICA</option>
            <option value="1">COPEIRO</option>
          </Form.Select>
        </Form>

        <div className='mt-5 mb-3 resultado'>
          <h3>Estimativa dos custos: R$ {tipoFucao === "0" ? "--" : valor.toLocaleString('pt-br', {minimumFractionDigits: 2})} </h3>
          <span>Valor/Hora: R$ { tipoFucao === "1" ? "9,60" : tipoFucao === "2" ? "10,50" : "0"}</span>
        </div>
      </div>
    </>
  );
}

export default Contrato;
