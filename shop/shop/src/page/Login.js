import React from 'react'
import { Container,Button, Form} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


const Login = ({setAuthenticate}) => {
  const navigate = useNavigate();
  const loginUser = (event) => {
    event.preventDefault(); //기본 속성을 막아놓기
    /* console.log("뭐가 보일까요?"); */
    setAuthenticate(true); //로그인이 되면 true로 바꿔줌
    navigate('/') //메인페이지로 이동
  }
  return (
    <Container>
      <Form onSubmit={loginUser}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="이메일 다음에도 기억하기" />
      </Form.Group>
      <Button variant="danger" type="submit">
        login
      </Button>
    </Form>
    </Container>
  )
}

export default Login