import React, {useState} from 'react';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';
import { jsPDF } from "jspdf";
import './index.css'

function Clt() {
  const [salarioMensal, setSalarioMensal] = useState(0)
  const [gerarArquivoPdf, setGerarArquivoPdf] = useState(false)

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

  const ajusteValor = (valor) => {
    return valor.toLocaleString('pt-br', {maximumFractionDigits: 2, minimumFractionDigits: 2})
  }

  const calcular = () => {
    setA1(ajusteValor(salarioMensal * 0.20))
    setA2(ajusteValor(salarioMensal * 0.08))
    setA3(ajusteValor(salarioMensal * 0.03))
    setA4(ajusteValor(salarioMensal * 0.025))
    setA5(ajusteValor(salarioMensal * 0.015))
    setA6(ajusteValor(salarioMensal * 0.01))
    setA7(ajusteValor(salarioMensal * 0.006))
    setA8(ajusteValor(salarioMensal * 0.002))

    setAGeral((salarioMensal * 0.20) 
      + (salarioMensal * 0.08)
      + (salarioMensal * 0.03) 
      + (salarioMensal * 0.025) 
      + (salarioMensal * 0.015) 
      + (salarioMensal * 0.01)
      + (salarioMensal * 0.006)
      + (salarioMensal * 0.002)
    )

    setB1(ajusteValor(salarioMensal * 0.2277))
    setB2(ajusteValor(salarioMensal * 0.1492))
    setB3(ajusteValor(salarioMensal * 0.1120))
    setB4(ajusteValor(salarioMensal * 0.006))
    setB5(ajusteValor(salarioMensal * 0.0011))
    setB6(ajusteValor(salarioMensal * 0.009))
    setB7(ajusteValor(salarioMensal * 0.0075))

    setBGeral((salarioMensal * 0.2277) 
      + (salarioMensal * 0.1492)
      + (salarioMensal * 0.1120) 
      + (salarioMensal * 0.006) 
      + (salarioMensal * 0.0011) 
      + (salarioMensal * 0.009)
      + (salarioMensal * 0.0075)
    )

    setC1(ajusteValor(salarioMensal * 0.1176))
    setC2(ajusteValor(salarioMensal * 0.0537))
    setC3(ajusteValor(salarioMensal * 0.0116))

    setCGeral((salarioMensal * 0.1176) 
      + (salarioMensal * 0.0537)
      + (salarioMensal * 0.0116)
    )

    setD1(ajusteValor(salarioMensal * 0.1886))
    setD2(ajusteValor(salarioMensal * 0.0024))
    setD3(ajusteValor(salarioMensal * 0.0089))
    setD4(ajusteValor(salarioMensal * 0.0009))
    setD5(ajusteValor(salarioMensal * 0.0307))

    setDGeral((salarioMensal * 0.1886) 
      + (salarioMensal * 0.0024)
      + (salarioMensal * 0.0089) 
      + (salarioMensal * 0.0009) 
      + (salarioMensal * 0.0307)
    )

    setSubTotalSocial(salarioMensal * 1.295)

    setE1(ajusteValor(salarioMensal * 0.2303))
    setE2(ajusteValor(salarioMensal * 0.1596))
    setE3(ajusteValor(salarioMensal * 0.0371))
    setE4(ajusteValor(salarioMensal * 0.0068))
    setE5(ajusteValor(salarioMensal * 0.0023))

    setEGeral((salarioMensal * 0.2303) 
      + (salarioMensal * 0.1596)
      + (salarioMensal * 0.0371) 
      + (salarioMensal * 0.0068) 
      + (salarioMensal * 0.0023)
    )

    setTotalSocial(salarioMensal * 1.731)

    setGerarArquivoPdf(true)
  }

  const gerarPdf = () => {
    const doc = new jsPDF('p', 'pt');
    doc.text(`Estimativa dos custos do funcion??rio para a empresa`, 300, 20, { align: 'center'});

    var headers = ['Descri????o', 'Porcentagem', 'Valor']
    var data = [
      {
        'Descri????o': 'Encargos sociais b??sicos',
        'Porcentagem': '',
        'Valor': ''
      },
      {
        'Descri????o': 'Previd??ncia Social - INSS',
        'Porcentagem': '20%',
        'Valor': a1
      },
      {
        'Descri????o': 'Fundo de Garantia por Tempo de Servic??o - FGTS',
        'Porcentagem': '8,00%',
        'Valor': a2
      },
      {
        'Descri????o': 'Seguro contra Acidente de Trabalho - SAT',
        'Porcentagem': '3,00%',
        'Valor': a3
      },
      {
        'Descri????o': 'Sal??rio Educa????o',
        'Porcentagem': '2,50%',
        'Valor': a4
      },
      {
        'Descri????o': 'Servi??o Social da Ind??stria - SESI',
        'Porcentagem': '1,50%',
        'Valor': a5
      },
      {
        'Descri????o': 'Servi??o Nacional de Aprendizagem Industrial - SENAI',
        'Porcentagem': '1,00%',
        'Valor': a6
      },
      {
        'Descri????o': 'Servi??o de Apoio ?? Pequena e M??dia Empresa - SEBRAE',
        'Porcentagem': '0,60%',
        'Valor': a7
      },
      {
        'Descri????o': 'Instituto Nacional de Coloniza????o e Reforma Agr??ria - INCRA',
        'Porcentagem': '0,20%',
        'Valor': a8
      },
      {
        'Descri????o': 'Encargos sociais trabalhistas',
        'Porcentagem': '',
        'Valor': ''
      },
      {
        'Descri????o': 'Repouso Semanal Remunerado e Refiados',
        'Porcentagem': '22,77%',
        'Valor': b1
      },
      {
        'Descri????o': 'F??rias',
        'Porcentagem': '14,92%',
        'Valor': b2
      },
      {
        'Descri????o': '13?? Sal??rio',
        'Porcentagem': '11,20%',
        'Valor': b3
      },
      {
        'Descri????o': 'Aux??lio-Enfermidade',
        'Porcentagem': '0,60%',
        'Valor': b4
      },
      {
        'Descri????o': 'Licen??a-Paternidade',
        'Porcentagem': '0,11%',
        'Valor': b5
      },
      {
        'Descri????o': 'Acidentes de Trabalho',
        'Porcentagem': '0,90%',
        'Valor': b6
      },
      {
        'Descri????o': 'Faltas Justificadas',
        'Porcentagem': '0,75%',
        'Valor': b7
      },
      {
        'Descri????o': 'Encargos sociais indenizat??rios',
        'Porcentagem': '',
        'Valor': ''
      },
      {
        'Descri????o': 'Aviso-Pr??vio Indenizado',
        'Porcentagem': '11,76%',
        'Valor': c1
      },
      {
        'Descri????o': 'Multa por rescis??o de contrato de trabalho',
        'Porcentagem': '5,37%',
        'Valor': c2
      },
      {
        'Descri????o': 'Indeniza????o Adicional',
        'Porcentagem': '1,16%',
        'Valor': c3
      },
      {
        'Descri????o': 'Encargos sociais cumulativas',
        'Porcentagem': '',
        'Valor': ''
      },
      {
        'Descri????o': 'Incid??ncia dos Encargos B??sicos sobre os encargos Trabalhistas',
        'Porcentagem': '18,86%',
        'Valor': d1
      },
      {
        'Descri????o': 'Incid??ncias dos Encargos Sociais B??sicos sobre o Aviso Pr??vio Trabalhado',
        'Porcentagem': '0,24%',
        'Valor': d2
      },
      {
        'Descri????o': 'Incid??ncia do FGTS sobre o aviso Pr??vio Indenizado',
        'Porcentagem': '0,89%',
        'Valor': d3
      },
      {
        'Descri????o': 'Incid??ncia do FGTS sobre Indeniza????o Adicional',
        'Porcentagem': '0,09%',
        'Valor': d4
      },
      {
        'Descri????o': 'Efeitos do Aviso Pr??vio',
        'Porcentagem': '3,07%',
        'Valor': d5
      },
      {
        'Descri????o': 'Sub total de encargos sociais',
        'Porcentagem': '',
        'Valor': ''
      },
      {
        'Descri????o': 'Sub total de encargos sociais',
        'Porcentagem': '129,5%',
        'Valor': `R$ ${ajusteValor(subTotalSocial)}`
      },
      {
        'Descri????o': 'Encargos Intersindicais',
        'Porcentagem': '',
        'Valor': ''
      },
      {
        'Descri????o': 'Alimenta????o (Almo??o e Caf?? da Manh??)',
        'Porcentagem': '23,03%',
        'Valor': e1
      },
      {
        'Descri????o': 'Vale Transporte',
        'Porcentagem': '15,96%',
        'Valor': e2
      },
      {
        'Descri????o': 'Equipamento de Prote????o Individual (EPI) e Fardamento',
        'Porcentagem': '3,71%',
        'Valor': e3
      },
      {
        'Descri????o': 'Exame M??dico Admissional e Demissional',
        'Porcentagem': '0,68%',
        'Valor': e4
      },
      {
        'Descri????o': 'Seguro de Vida em Grupo',
        'Porcentagem': '0,23%',
        'Valor': e5
      },
      {
        'Descri????o': 'Total geral dos encargos sociais',
        'Porcentagem': '',
        'Valor': ''
      },
      {
        'Descri????o': 'Total geral dos encargos sociais',
        'Porcentagem': '173,1%',
        'Valor': `R$ ${ajusteValor(totalSocial)}`
      },
      {
        'Descri????o': 'Custo final',
        'Porcentagem': '',
        'Valor': ''
      },
      {
        'Descri????o': 'Custo final (encargos + sal??rios)',
        'Porcentagem': '',
        'Valor': `R$ ${ajusteValor(parseInt(salarioMensal)+totalSocial)}`
      },
    ]

    var config = {
      margins: {
        top: 30
      },
      fontSize: 11
    }
    doc.table(40, 30, data, headers, config);
    doc.save("calculo.pdf");
  }

  return (
    <>
      <div className='container'>
        <h2>CLT</h2>
        <Form>
          <Form.Group className="mb-3 col-6" controlId="formSalarioMensal">
            <Form.Label className='h5'>Sal??rio mensal</Form.Label>
            <Form.Control onChange={(e) => {setSalarioMensal(e.target.value)}} value={salarioMensal} className='form-control' type="number" placeholder="Valor sal??rio mensal" />
          </Form.Group>

          <Button variant="primary" onClick={calcular} className='btn mt-3'>
            Calcular
          </Button>
        { gerarArquivoPdf ? 
          <Button variant="secondary" onClick={gerarPdf} className='btn mt-3 gerarPdf'>
            Gerar PDF
          </Button>
        : ""}
        </Form>

        <div className='mt-5 mb-3'>
          <h2>Estimativa dos custos do funcion??rio para a empresa</h2>
        </div>

        <div>
          <h4>Encargos sociais b??sicos</h4>
        </div>
        <Table striped bordered hover className='mb-5'>
          <thead>
            <tr>
              <th>Descri????o</th>
              <th>Porcentagem</th>
              <th>Valor</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Previd??ncia Social - INSS</td>
              <td>20%</td>
              <td>R$ {a1}</td>
            </tr>
            <tr>
              <td>Fundo de Garantia por Tempo de Servic??o - FGTS</td>
              <td>8,00%</td>
              <td>R$ {a2}</td>
            </tr>
            <tr>
              <td>Seguro contra Acidente de Trabalho - SAT</td>
              <td>3,0%</td>
              <td>R$ {a3}</td>
            </tr>
            <tr>
              <td>Sal??rio Educa????o</td>
              <td>2,50%</td>
              <td>R$ {a4}</td>
            </tr>
            <tr>
              <td>Servi??o Social da Ind??stria - SESI</td>
              <td>1,50%</td>
              <td>R$ {a5}</td>
            </tr>
            <tr>
              <td>Servi??o Nacional de Aprendizagem Industrial - SENAI</td>
              <td>1,0%</td>
              <td>R$ {a6}</td>
            </tr>
            <tr>
              <td>Servi??o de Apoio ?? Pequena e M??dia Empresa - SEBRAE</td>
              <td>0,60%</td>
              <td>R$ {a7}</td>
            </tr>
            <tr>
              <td>Instituto Nacional de Coloniza????o e Reforma Agr??ria - INCRA</td>
              <td>0,20</td>
              <td>R$ {a8}</td>
            </tr>
            <tr>
              <td><strong>Total de encargos</strong></td>
              <td><strong>36,80%</strong></td>
              <td><strong>R$ {ajusteValor(aGeral)}</strong></td>
            </tr>
          </tbody>
        </Table>

        <div>
          <h4>Encargos sociais trabalhistas</h4>
        </div>
        <Table striped bordered hover className='mb-5'>
          <thead>
            <tr>
              <th>Descri????o</th>
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
              <td>F??rias</td>
              <td>14,92%</td>
              <td>R$ {b2}</td>
            </tr>
            <tr>
              <td>13?? Sal??rio</td>
              <td>11,20%</td>
              <td>R$ {b3}</td>
            </tr>
            <tr>
              <td>Aux??lio-Enfermidade</td>
              <td>0,60%</td>
              <td>R$ {b4}</td>
            </tr>
            <tr>
              <td>Licen??a-Paternidade</td>
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
              <td><strong>51,24%</strong></td>
              <td><strong>R$ {ajusteValor(bGeral)}</strong></td>
            </tr>
          </tbody>
        </Table>

        <div>
          <h4>Encargos sociais indenizat??rios</h4>
        </div>
        <Table striped bordered hover className='mb-5'>
          <thead>
            <tr>
              <th>Descri????o</th>
              <th>Porcentagem</th>
              <th>Valor</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Aviso-Pr??vio Indenizado</td>
              <td>11,76%</td>
              <td>R$ {c1}</td>
            </tr>
            <tr>
              <td>Multa por rescis??o de contrato de trabalho</td>
              <td>5,37%</td>
              <td>R$ {c2}</td>
            </tr>
            <tr>
              <td>Indeniza????o Adicional</td>
              <td>1,16%</td>
              <td>R$ {c3}</td>
            </tr>
            <tr>
              <td><strong>Total de encargos</strong></td>
              <td><strong>18,30%</strong></td>
              <td><strong>R$ {ajusteValor(cGeral)}</strong></td>
            </tr>
          </tbody>
        </Table>

        <div>
          <h4>Encargos sociais cumulativas</h4>
        </div>
        <Table striped bordered hover className='mb-5'>
          <thead>
            <tr>
              <th>Descri????o</th>
              <th>Porcentagem</th>
              <th>Valor</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Incid??ncia dos Encargos B??sicos sobre os encargos Trabalhistas</td>
              <td>18,86%</td>
              <td>R$ {d1}</td>
            </tr>
            <tr>
              <td>Incid??ncias dos Encargos Sociais B??sicos sobre o Aviso Pr??vio Trabalhado</td>
              <td>0,24%</td>
              <td>R$ {d2}</td>
            </tr>
            <tr>
              <td>Incid??ncia do FGTS sobre o aviso Pr??vio Indenizado</td>
              <td>0,89%</td>
              <td>R$ {d3}</td>
            </tr>
            <tr>
              <td>Incid??ncia do FGTS sobre Indeniza????o Adicional</td>
              <td>0,09%</td>
              <td>R$ {d4}</td>
            </tr>
            <tr>
              <td>Efeitos do Aviso Pr??vio</td>
              <td>3,07%</td>
              <td>R$ {d5}</td>
            </tr>
            <tr>
              <td><strong>Total de encargos</strong></td>
              <td><strong>23,15%</strong></td>
              <td><strong>R$ {ajusteValor(dGeral)}</strong></td>
            </tr>
          </tbody>
        </Table>
        <div>
          <h4>Sub total de encargos sociais</h4>
        </div>
        <Table striped bordered hover className='mb-5'>
          <thead>
            <tr>
              <th>Descri????o</th>
              <th>Porcentagem</th>
              <th>Valor</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Sub total de encargos sociais</strong></td>
              <td><strong>129,5%</strong></td>
              <td><strong>R$ {ajusteValor(subTotalSocial)}</strong></td>
            </tr>
          </tbody>
        </Table>
        <div>
          <h4>Encargos Intersindicais</h4>
        </div>
        <Table striped bordered hover className='mb-5'>
          <thead>
            <tr>
              <th>Descri????o</th>
              <th>Porcentagem</th>
              <th>Valor</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Alimenta????o (Almo??o e Caf?? da Manh??)</td>
              <td>23,03%</td>
              <td>R$ {e1}</td>
            </tr>
            <tr>
              <td>Vale Transporte</td>
              <td>15,96%</td>
              <td>R$ {e2}</td>
            </tr>
            <tr>
              <td>Equipamento de Prote????o Individual (EPI) e Fardamento</td>
              <td>3,71%</td>
              <td>R$ {e3}</td>
            </tr>
            <tr>
              <td>Exame M??dico Admissional e Demissional</td>
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
              <td><strong>R$ {ajusteValor(eGeral)}</strong></td>
            </tr>
          </tbody>
        </Table>
        <div>
          <h4>Total geral dos encargos sociais</h4>
        </div>
        <Table striped bordered hover className='mb-5'>
          <thead>
            <tr>
              <th>Descri????o</th>
              <th>Porcentagem</th>
              <th>Valor</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Total geral dos encargos sociais</strong></td>
              <td><strong>173,1%</strong></td>
              <td><strong>R$ {ajusteValor(totalSocial)}</strong></td>
            </tr>
          </tbody>
        </Table>
        <div>
          <h4>Custo final</h4>
        </div>
        <Table striped bordered hover className='mb-5'>
          <thead>
            <tr>
              <th>Descri????o</th>
              <th>Valor</th>
            </tr>
          </thead>
          <tbody>
          <tr>
            <td><strong>Custo final (encargos + sal??rios)</strong></td>
            <td><strong>R$ {ajusteValor(parseInt(salarioMensal)+totalSocial)}</strong></td>
          </tr>
          </tbody>
        </Table>
      </div>
    </>
  );
}

export default Clt;