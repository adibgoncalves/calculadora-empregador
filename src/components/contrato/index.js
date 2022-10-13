import React, {useState} from 'react';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';

function Contrato() {
  const [salarioMensal, setSalarioMensal] = useState(0)
  const [planoSaude, setPlanoSaude] = useState(0)
  const [valeTransporte, setValeTransporte] = useState(0)
  const [valeRefeicao, setValeRefeicao] = useState(0)
  const [outrosBeneficios, setOutrosBeneficios] = useState(0)

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

  const calcular = () => {
    setA1(salarioMensal * 0.20)
    setA2(salarioMensal * 0.08)
    setA3(salarioMensal * 0.03)
    setA4(salarioMensal * 0.025)
    setA5(salarioMensal * 0.015)
    setA6(salarioMensal * 0.01)
    setA7(salarioMensal * 0.006)
    setA8(salarioMensal * 0.002)

    setAGeral((salarioMensal * 0.20) 
      + (salarioMensal * 0.08)
      + (salarioMensal * 0.03) 
      + (salarioMensal * 0.025) 
      + (salarioMensal * 0.015) 
      + (salarioMensal * 0.01)
      + (salarioMensal * 0.006)
      + (salarioMensal * 0.002)
    )

    setB1(salarioMensal * 0.2277)
    setB2(salarioMensal * 0.1492)
    setB3(salarioMensal * 0.1120)
    setB4(salarioMensal * 0.006)
    setB5(salarioMensal * 0.0011)
    setB6(salarioMensal * 0.009)
    setB7(salarioMensal * 0.0075)

    setBGeral((salarioMensal * 0.2277) 
      + (salarioMensal * 0.1492)
      + (salarioMensal * 0.1120) 
      + (salarioMensal * 0.006) 
      + (salarioMensal * 0.0011) 
      + (salarioMensal * 0.009)
      + (salarioMensal * 0.0075)
    )
  }

  return (
    <>
        <p>Contrato</p>
      <div className='container'>
        <Form className='row'>
          <Form.Group className="mb-3 col-6" controlId="formSalarioMensal">
            <Form.Label className='h5'>Salário mensal</Form.Label>
            <Form.Control onChange={(e) => {setSalarioMensal(e.target.value)}} value={salarioMensal} className='form-control-lg' type="number" placeholder="Valor salário mensal" />
          </Form.Group>

          <Form.Group className="mb-3 col-6" controlId="formPlanoSaude">
            <Form.Label className='h5'>Plano de saúde (valor mensal)</Form.Label>
            <Form.Control onChange={(e) => {setPlanoSaude(e.target.value)}} value={planoSaude} className='form-control-lg' type="number" placeholder="Valor plano de saúde" />
          </Form.Group>

          <Form.Group className="mb-3 col-6" controlId="formValeTransporte">
            <Form.Label className='h5'>Vale transporte (valor mensal)</Form.Label>
            <Form.Control onChange={(e) => {setValeTransporte(e.target.value)}} value={valeTransporte} className='form-control-lg' type="number" placeholder="Valor vale transporte" />
          </Form.Group>

          <Form.Group className="mb-3 col-6" controlId="formValeRefeicao">
            <Form.Label className='h5'>Vale refeição (valor mensal)</Form.Label>
            <Form.Control onChange={(e) => {setValeRefeicao(e.target.value)}} value={valeRefeicao} className='form-control-lg' type="number" placeholder="Valor vale refeição" />
          </Form.Group>

          <Form.Group className="mb-3 col-6" controlId="formOutrosBeneficios">
            <Form.Label className='h5'>Outros benefícios</Form.Label>
            <Form.Control onChange={(e) => {setOutrosBeneficios(e.target.value)}} value={outrosBeneficios} className='form-control-lg' type="number" placeholder="Valor outros benefícios" />
          </Form.Group>

          <Button variant="primary" onClick={calcular} className='btn-lg mt-3'>
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
              <th>Prcentagem</th>
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
              <td><strong>R$ {aGeral}</strong></td>
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
              <th>Prcentagem</th>
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
              <td><strong>R$ {bGeral}</strong></td>
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
              <th>Prcentagem</th>
              <th>Valor</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Aviso-Prévio Indenizado</td>
              <td>11,76%</td>
              <td>R$ </td>
            </tr>
            <tr>
              <td>Multa por rescisão de contrato de trabalho</td>
              <td>5,37%</td>
              <td>R$ </td>
            </tr>
            <tr>
              <td>Indenização Adicional</td>
              <td>1,16%</td>
              <td>R$ </td>
            </tr>
            <tr>
              <td><strong>Total de encargos</strong></td>
              <td><strong>18,30%</strong></td>
              <td><strong>R$ </strong></td>
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
              <th>Prcentagem</th>
              <th>Valor</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Incidência dos Encargos Básicos sobre os encargos Trabalhistas</td>
              <td>18,86%</td>
              <td>R$ </td>
            </tr>
            <tr>
              <td>Incidências dos Encargos Sociais Básicos sobre o Aviso Prévio Trabalhado</td>
              <td>0,14%</td>
              <td>R$ </td>
            </tr>
            <tr>
              <td>Incidência do FGTS sobre o aviso Prévio Indenizado</td>
              <td>0,89%</td>
              <td>R$ </td>
            </tr>
            <tr>
              <td>Incidência do FGTS sobre Indenização Adicional</td>
              <td>0,09%</td>
              <td>R$ </td>
            </tr>
            <tr>
              <td>Efeitos do Aviso Prévio</td>
              <td>3,07%</td>
              <td>R$ </td>
            </tr>
            <tr>
              <td><strong>Total de encargos</strong></td>
              <td><strong>23,15%</strong></td>
              <td><strong>R$ </strong></td>
            </tr>
          </tbody>
        </Table>
      </div>
    </>
  );
}

export default Contrato;
