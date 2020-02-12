import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux'
import axios from 'axios'
import { Button, Card, CardBody, CardHeader, Col, Form, FormGroup, Input, Label, Pagination, PaginationItem, PaginationLink, Row } from 'reactstrap';

import DataTable from '../../../components/DataTable';
import Chart from '../../../components/Chart';

const Balance = props => {

  const st = useSelector(st => st)

  const [initialDate, setInitialDate] = useState(new Date())
  const [finalDate, setFinalDate] = useState('')
  const [data, setData] = useState([])

  let balance = st.balance / 100

  const url = `https://apidev.ewally.com.br/b2b/statement?initialDate=${initialDate}&finalDate=${finalDate}`


  function handleInputDate(e, field) {

    if (field === 0) return setInitialDate(e.target.value)

    return setFinalDate(e.target.value)
  }

  async function handleSubmit(e) {
    e.preventDefault()

    const response = await axios.get(url, {
      headers: { "Authorization": `Bearer ${st.token}` }
    })

    setData(response.data.statement)
  }

  useEffect(() => {
    setInitialDate("2018-03-13")
  }, [initialDate]);

  return (
    <div className="animated fadeIn">
      <Row>
        <Col>
          <Card>
            <CardHeader>
              <i className="fa fa-align-justify"></i> Saldo e Extrato
            </CardHeader>

            <CardBody>
              <p>Período:</p>
              <Form onSubmit={e => handleSubmit(e)} inline>
                <FormGroup className="pr-1">
                  <Label htmlFor="exampleInputName2" className="pr-1">De</Label>
                  <Input type="date" placeholder="De" onChange={(e) => handleInputDate(e, 0)} value={initialDate} required />
                </FormGroup>

                <FormGroup className="pr-1">
                  <Label htmlFor="exampleInputName2" className="pr-1">Até</Label>
                  <Input type="date" placeholder="Até" onChange={(e) => handleInputDate(e, 1)} required />
                </FormGroup>

                <Button type="submit" size="sm" color="primary" style={{ marginLeft: 5, marginTop: "-2px" }}><i className="fa fa-search"></i> Buscar</Button>
              </Form>
            </CardBody>

            <CardBody>
              {data.length > 0 && (
                <DataTable data={data} />
              )}
              <nav>
                <Pagination>
                  <PaginationItem><PaginationLink previous tag="button">Prev</PaginationLink></PaginationItem>
                  <PaginationItem active>
                    <PaginationLink tag="button">1</PaginationLink>
                  </PaginationItem>
                  {/* <PaginationItem><PaginationLink tag="button">2</PaginationLink></PaginationItem> */}
                  <PaginationItem><PaginationLink next tag="button">Next</PaginationLink></PaginationItem>
                </Pagination>
              </nav>
            </CardBody>
          </Card>

          <Card>
            <CardHeader>
              <i className="fa fa-align-justify"></i> Gráfico Diário
            </CardHeader>

            <CardBody>
              <p>Gráfico:</p>
              <Chart data={data}/>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>

  );
}

export default Balance;
