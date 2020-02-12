import React, { useState } from 'react';
import axios from "axios"
import { useDispatch } from 'react-redux'
import { Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';


const Login = props => {

  const dispatch = useDispatch()
  const { history } = props;

  const [user, setUser] = useState("testFrontEwally")
  const [password, setPassword] = useState("123456")

  async function handleSubmit(e) {
    e.preventDefault();

    const responseLogin = await axios.post("https://apidev.ewally.com.br/user/login", {
      "username": user,
      "password": password
    })

    const responseBalance = await axios.get("https://apidev.ewally.com.br/account/balance",
      { headers: { "Authorization": `Bearer ${responseLogin.data.token}` } }
    )

    dispatch({ type: "LOGIN", token: responseLogin.data.token, balance: responseBalance.data.balance })

    history.push('/balance');
  }

  function handleUser(e) {
    setUser(e.target.value)
  }

  function handlePassword(e) {
    setPassword(e.target.value)
  }

  return (
    <div className="app flex-row align-items-center">
      <Container>
        <Row className="justify-content-center">
          <Col md="4">
            <CardGroup>
              <Card className="p-4">
                <CardBody>
                  <Form onSubmit={(e) => handleSubmit(e)}>
                    <h1>Login</h1>
                    <p className="text-muted">Entrar com usuário e senha</p>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-user"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="text" onChange={(e) => handleUser(e)} placeholder="Username" />
                    </InputGroup>
                    <InputGroup className="mb-4">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-lock"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="password" onChange={(e) => handlePassword(e)} placeholder="Password" />
                    </InputGroup>
                    <Row>
                      <Col xs="6">
                        <Button color="primary" className="px-4">Entrar</Button>
                      </Col>
                    </Row>
                  </Form>
                </CardBody>
              </Card>
            </CardGroup>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Login;
