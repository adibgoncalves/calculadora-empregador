import React, {useState} from 'react';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';

function Clt() {
  const [salarioMensal, setSalarioMensal] = useState(0)

  const [a1, setA1] = useState(0)
  const [a2, setA2] = useState(0)
  const [a3, setA3] = useState(0)
  const [a4, setA4] = useState(0)
  const [a5, setA5] = useState(0)
  const [a6, setA6] = useState(0)
  const [a7, setA7] = useState(0)
  const [a8, setA8] = useState(0)
  const [aGeral, setAGeral] = useState(0)

  const [b1, setB1] = useState(0)
  const [b2, setB2] = useState(0)
  const [b3, setB3] = useState(0)
  const [b4, setB4] = useState(0)
  const [b5, setB5] = useState(0)
  const [b6, setB6] = useState(0)
  const [b7, setB7] = useState(0)
  const [bGeral, setBGeral] = useState(0)

  const [c1, setC1] = useState(0)
  const [c2, setC2] = useState(0)
  const [c3, setC3] = useState(0)
  const [cGeral, setCGeral] = useState(0)

  const [d1, setD1] = useState(0)
  const [d2, setD2] = useState(0)
  const [d3, setD3] = useState(0)
  const [d4, setD4] = useState(0)
  const [d5, setD5] = useState(0)
  const [dGeral, setDGeral] = useState(0)

  const [subTotalSocial, setSubTotalSocial] = useState(0)

  const [e1, setE1] = useState(0)
  const [e2, setE2] = useState(0)
  const [e3, setE3] = useState(0)
  const [e4, setE4] = useState(0)
  const [e5, setE5] = useState(0)
  const [eGeral, setEGeral] = useState(0)

  const [totalSocial, setTotalSocial] = useState(0)

  const calcular = () => {
    setA1((salarioMensal * 0.20).toLocaleString('pt-br', {minimumFractionDigits: 2}))
    setA2((salarioMensal * 0.08).toLocaleString('pt-br', {minimumFractionDigits: 2}))
    setA3((salarioMensal * 0.03).toLocaleString('pt-br', {minimumFractionDigits: 2}))
    setA4((salarioMensal * 0.025).toLocaleString('pt-br', {minimumFractionDigits: 2}))
    setA5((salarioMensal * 0.015).toLocaleString('pt-br', {minimumFractionDigits: 2}))
    setA6((salarioMensal * 0.01).toLocaleString('pt-br', {minimumFractionDigits: 2}))
    setA7((salarioMensal * 0.006).toLocaleString('pt-br', {minimumFractionDigits: 2}))
    setA8((salarioMensal * 0.002).toLocaleString('pt-br', {minimumFractionDigits: 2}))

    setAGeral((salarioMensal * 0.20) 
      + (salarioMensal * 0.08)
      + (salarioMensal * 0.03) 
      + (salarioMensal * 0.025) 
      + (salarioMensal * 0.015) 
      + (salarioMensal * 0.01)
      + (salarioMensal * 0.006)
      + (salarioMensal * 0.002)
    )

    setB1((salarioMensal * 0.2277).toLocaleString('pt-br', {minimumFractionDigits: 2}))
    setB2((salarioMensal * 0.1492).toLocaleString('pt-br', {minimumFractionDigits: 2}))
    setB3((salarioMensal * 0.1120).toLocaleString('pt-br', {minimumFractionDigits: 2}))
    setB4((salarioMensal * 0.006).toLocaleString('pt-br', {minimumFractionDigits: 2}))
    setB5((salarioMensal * 0.0011).toLocaleString('pt-br', {minimumFractionDigits: 2}))
    setB6((salarioMensal * 0.009).toLocaleString('pt-br', {minimumFractionDigits: 2}))
    setB7((salarioMensal * 0.0075).toLocaleString('pt-br', {minimumFractionDigits: 2}))

    setBGeral((salarioMensal * 0.2277) 
      + (salarioMensal * 0.1492)
      + (salarioMensal * 0.1120) 
      + (salarioMensal * 0.006) 
      + (salarioMensal * 0.0011) 
      + (salarioMensal * 0.009)
      + (salarioMensal * 0.0075)
    )

    setC1((salarioMensal * 0.1176).toLocaleString('pt-br', {minimumFractionDigits: 2}))
    setC2((salarioMensal * 0.0537).toLocaleString('pt-br', {minimumFractionDigits: 2}))
    setC3((salarioMensal * 0.0116).toLocaleString('pt-br', {minimumFractionDigits: 2}))

    setCGeral((salarioMensal * 0.1176) 
      + (salarioMensal * 0.0537)
      + (salarioMensal * 0.0116)
    )

    setD1((salarioMensal * 0.1886).toLocaleString('pt-br', {minimumFractionDigits: 2}))
    setD2((salarioMensal * 0.0024).toLocaleString('pt-br', {minimumFractionDigits: 2}))
    setD3((salarioMensal * 0.0089).toLocaleString('pt-br', {minimumFractionDigits: 2}))
    setD4((salarioMensal * 0.0009).toLocaleString('pt-br', {minimumFractionDigits: 2}))
    setD5((salarioMensal * 0.0307).toLocaleString('pt-br', {minimumFractionDigits: 2}))

    setDGeral((salarioMensal * 0.1886) 
      + (salarioMensal * 0.0024)
      + (salarioMensal * 0.0089) 
      + (salarioMensal * 0.0009) 
      + (salarioMensal * 0.0307)
    )

    setSubTotalSocial(salarioMensal * 1.295)

    setE1((salarioMensal * 0.2303).toLocaleString('pt-br', {minimumFractionDigits: 2}))
    setE2((salarioMensal * 0.1596).toLocaleString('pt-br', {minimumFractionDigits: 2}))
    setE3((salarioMensal * 0.0371).toLocaleString('pt-br', {minimumFractionDigits: 2}))
    setE4((salarioMensal * 0.0068).toLocaleString('pt-br', {minimumFractionDigits: 2}))
    setE5((salarioMensal * 0.0023).toLocaleString('pt-br', {minimumFractionDigits: 2}))

    setEGeral((salarioMensal * 0.2303) 
      + (salarioMensal * 0.1596)
      + (salarioMensal * 0.0371) 
      + (salarioMensal * 0.0068) 
      + (salarioMensal * 0.0023)
    )

    setTotalSocial(salarioMensal * 1.731)
  }

  return (
    <>
      <div className='container'>
        <h2>CLT</h2>
        <Form>
          <Form.Group className="mb-3 col-6" controlId="formSalarioMensal">
            <Form.Label className='h5'>Salário mensal</Form.Label>
            <Form.Control onChange={(e) => {setSalarioMensal(e.target.value)}} value={salarioMensal} className='form-control' type="number" placeholder="Valor salário mensal" />
          </Form.Group>

          <Button variant="primary" onClick={calcular} className='btn mt-3'>
            Calcular
          </Button>
        </Form>

        <div className='mt-5 mb-3'>
          <h2>Estimativa dos custos do funcionário para a empresa</h2>
        </div>

        <div>
          <h4>Encargos sociais básicos</h4>
        </div>
        <Table striped bordered hover className='mb-5'>
          <thead>
            <tr>
              <th>Descrição</th>
              <th>Porcentagem</th>
              <th>Valor</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Previdência Social - INSS</td>
              <td>20%</td>
              <td>R$ {a1}</td>
            </tr>
            <tr>
              <td>Fundo de Garantia por Tempo de Servicço - FGTS</td>
              <td>8,00%</td>
              <td>R$ {a2}</td>
            </tr>
            <tr>
              <td>Seguro contra Acidente de Trabalho - SAT</td>
              <td>3,0%</td>
              <td>R$ {a3}</td>
            </tr>
            <tr>
              <td>Salário Educação</td>
              <td>2,50%</td>
              <td>R$ {a4}</td>
            </tr>
            <tr>
              <td>Serviço Social da Indústria - SESI</td>
              <td>1,50%</td>
              <td>R$ {a5}</td>
            </tr>
            <tr>
              <td>Serviço Nacional de Aprendizagem Industrial - SENAI</td>
              <td>1,0%</td>
              <td>R$ {a6}</td>
            </tr>
            <tr>
              <td>Serviço de Apoio à Pequena e Média Empresa - SEBRAE</td>
              <td>0,60%</td>
              <td>R$ {a7}</td>
            </tr>
            <tr>
              <td>Instituto Nacional de Colonização e Reforma Agrária - INCRA</td>
              <td>0,20</td>
              <td>R$ {a8}</td>
            </tr>
            <tr>
              <td><strong>Total de encargos</strong></td>
              <td><strong>36,80%</strong></td>
              <td><strong>R$ {aGeral.toLocaleString('pt-br', {minimumFractionDigits: 2})}</strong></td>
            </tr>
          </tbody>
        </Table>

        <div>
          <h4>Encargos sociais trabalhistas</h4>
        </div>
        <Table striped bordered hover className='mb-5'>
          <thead>
            <tr>
              <th>Descrição</th>
              <th>Porcentagem</th>
              <th>Valor</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Repouso Semanal Remunerado e Refiados</td>
              <td>22,77%</td>
              <td>R$ {b1}</td>
            </tr>
            <tr>
              <td>Férias</td>
              <td>14,92%</td>
              <td>R$ {b2}</td>
            </tr>
            <tr>
              <td>13º Salário</td>
              <td>11,20%</td>
              <td>R$ {b3}</td>
            </tr>
            <tr>
              <td>Auxílio-Enfermidade</td>
              <td>0,60%</td>
              <td>R$ {b4}</td>
            </tr>
            <tr>
              <td>Licença-Paternidade</td>
              <td>0,11%</td>
              <td>R$ {b5}</td>
            </tr>
            <tr>
              <td>Acidentes de Trabalho</td>
              <td>0,90%</td>
              <td>R$ {b6}</td>
            </tr>
            <tr>
              <td>Faltas Justificadas</td>
              <td>0,75%</td>
              <td>R$ {b7}</td>
            </tr>
            <tr>
              <td><strong>Total de encargos</strong></td>
              <td><strong>51,24</strong></td>
              <td><strong>R$ {bGeral.toLocaleString('pt-br', {minimumFractionDigits: 2})}</strong></td>
            </tr>
          </tbody>
        </Table>

        <div>
          <h4>Encargos sociais indenizatórios</h4>
        </div>
        <Table striped bordered hover className='mb-5'>
          <thead>
            <tr>
              <th>Descrição</th>
              <th>Porcentagem</th>
              <th>Valor</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Aviso-Prévio Indenizado</td>
              <td>11,76%</td>
              <td>R$ {c1}</td>
            </tr>
            <tr>
              <td>Multa por rescisão de contrato de trabalho</td>
              <td>5,37%</td>
              <td>R$ {c2}</td>
            </tr>
            <tr>
              <td>Indenização Adicional</td>
              <td>1,16%</td>
              <td>R$ {c3}</td>
            </tr>
            <tr>
              <td><strong>Total de encargos</strong></td>
              <td><strong>18,30%</strong></td>
              <td><strong>R$ {cGeral.toLocaleString('pt-br', {minimumFractionDigits: 2})}</strong></td>
            </tr>
          </tbody>
        </Table>

        <div>
          <h4>Encargos sociais cumulativas</h4>
        </div>
        <Table striped bordered hover className='mb-5'>
          <thead>
            <tr>
              <th>Descrição</th>
              <th>Porcentagem</th>
              <th>Valor</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Incidência dos Encargos Básicos sobre os encargos Trabalhistas</td>
              <td>18,86%</td>
              <td>R$ {d1}</td>
            </tr>
            <tr>
              <td>Incidências dos Encargos Sociais Básicos sobre o Aviso Prévio Trabalhado</td>
              <td>0,24%</td>
              <td>R$ {d2}</td>
            </tr>
            <tr>
              <td>Incidência do FGTS sobre o aviso Prévio Indenizado</td>
              <td>0,89%</td>
              <td>R$ {d3}</td>
            </tr>
            <tr>
              <td>Incidência do FGTS sobre Indenização Adicional</td>
              <td>0,09%</td>
              <td>R$ {d4}</td>
            </tr>
            <tr>
              <td>Efeitos do Aviso Prévio</td>
              <td>3,07%</td>
              <td>R$ {d5}</td>
            </tr>
            <tr>
              <td><strong>Total de encargos</strong></td>
              <td><strong>23,15%</strong></td>
              <td><strong>R$ {dGeral.toLocaleString('pt-br', {minimumFractionDigits: 2})}</strong></td>
            </tr>
          </tbody>
        </Table>
        <div>
          <h4>Sub total de encargos sociais</h4>
        </div>
        <Table striped bordered hover className='mb-5'>
          <thead>
            <tr>
              <th>Descrição</th>
              <th>Porcentagem</th>
              <th>Valor</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Sub total de encargos sociais</strong></td>
              <td><strong>129,5%</strong></td>
              <td><strong>R$ {subTotalSocial.toLocaleString('pt-br', {minimumFractionDigits: 2})}</strong></td>
            </tr>
          </tbody>
        </Table>
        <div>
          <h4>Encargos Intersindicais</h4>
        </div>
        <Table striped bordered hover className='mb-5'>
          <thead>
            <tr>
              <th>Descrição</th>
              <th>Porcentagem</th>
              <th>Valor</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Alimentação (Almoço e Café da Manhã)</td>
              <td>23,03%</td>
              <td>R$ {e1}</td>
            </tr>
            <tr>
              <td>Vale Transporte</td>
              <td>15,96%</td>
              <td>R$ {e2}</td>
            </tr>
            <tr>
              <td>Equipamento de Proteção Individual (EPI) e Fardamento</td>
              <td>3,71%</td>
              <td>R$ {e3}</td>
            </tr>
            <tr>
              <td>Exame Médico Admissional e Demissional</td>
              <td>0,68%</td>
              <td>R$ {e4}</td>
            </tr>
            <tr>
              <td>Seguro de Vida em Grupo</td>
              <td>0,23%</td>
              <td>R$ {e5}</td>
            </tr>
            <tr>
              <td><strong>Total de encargos</strong></td>
              <td><strong>43,6%</strong></td>
              <td><strong>R$ {eGeral.toLocaleString('pt-br', {minimumFractionDigits: 2})}</strong></td>
            </tr>
          </tbody>
        </Table>
        <div>
          <h4>Total geral dos encargos sociais</h4>
        </div>
        <Table striped bordered hover className='mb-5'>
          <thead>
            <tr>
              <th>Descrição</th>
              <th>Porcentagem</th>
              <th>Valor</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Total geral dos encargos sociais</strong></td>
              <td><strong>173,1%</strong></td>
              <td><strong>R$ {totalSocial.toLocaleString('pt-br', {minimumFractionDigits: 2})}</strong></td>
            </tr>
          </tbody>
        </Table>
      </div>
    </>
  );
}

export default Clt;
