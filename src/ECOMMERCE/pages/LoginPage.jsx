import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
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
  ${mobile({ width: "70%" })}
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
const Link = styled.a`
  margin-top: 1rem;
  cursor: pointer;
`;
const LoginPage = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Sign in</Title>
        <Form>
          <Input placeholder="username" />

          <Input placeholder="password" type="password" />
          <Link> Do not Remember the password</Link>
          <Link> Create a new account</Link>
          <Button>sign in</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default LoginPage;
