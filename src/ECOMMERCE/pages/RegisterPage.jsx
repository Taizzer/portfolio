import React from "react";
import styled from "styled-components";
const Container = styled.div`
  height: 90vh;
  width: 100vw;
  background: linear-gradient(-225deg, #2cd8d5 0%, #c5c1ff 56%, #ffbac3 100%),
    url("https://d3nn873nee648n.cloudfront.net/HomeImages/Concept-and-Ideas.jpg")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 35%;
  padding: 18px;
  background-color: white;
`;

const Title = styled.h1`
  font-weight: 400;
  font-size: 22px;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 32%;
  margin: 18px 8px 0px 0px;
  padding: 8px;
`;

const Agree = styled.span`
  font-size: 12px;
  margin: 18px 0px;
`;

const Button = styled.button`
  width: 30%;
  padding: 15px 20px;
  background-color: teal;
  border: none;
  cursor: pointer;
  color: white;
`;

const RegisterPage = () => {
  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input placeholder="name" />
          <Input placeholder="lastname" />
          <Input placeholder="username" />
          <Input placeholder="email" />
          <Input placeholder="password" />
          <Input placeholder="confirm password" />
          <Agree>
            Ta gree to <b>PRIVACY POLICY</b>
          </Agree>
          <Button>Sign up</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default RegisterPage;
