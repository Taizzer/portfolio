import React from "react";
import styled from "styled-components";
const Container = styled.div`
  height: 88vh;
  width: 100vw;
  /* background: linear-gradient(-225deg, #2cd8d5 0%, #c5c1ff 56%, #ffbac3 100%); */
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  /* background: white; */
  /* border: 1px solid red; */
`;

const Wrapper = styled.div`
  /* we can remove the height !! */
  height: 80%;
  /* added min- !! */
  min-width: 30%;
  padding: 30px;
  background-color: #fff8f8;
  border-radius: 16px;
  /* background: linear-gradient(-225deg, #47d1cf 0%, #c5c1ff 56%, #ffbac3 100%); */
`;

const Title = styled.h1`
  font-weight: 400;
  font-size: 22px;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 32%;
  margin: 18px 8px 0px 0px;
  padding: 8px;
  outline: none;
  border: none;
  border-bottom: 1px solid black;
`;

const Button = styled.button`
  width: 30%;
  padding: 15px 20px;
  background-color: teal;
  border: none;
  cursor: pointer;
  color: white;
  margin-top: 1rem;
  border-radius: 8px;
`;

const Agree = styled.span`
  font-size: 12px;
  margin: 18px 0px;
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
          <Input placeholder="email" type="email" />
          <Input placeholder="password" type="password" />
          <Input placeholder="confirm password" type="password" />
          <Agree>
            I agree to <b>PRIVACY POLICY</b>
          </Agree>
          <Button>Sign up</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default RegisterPage;
