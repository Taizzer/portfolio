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

const Title = styled.h1``;

const Form = styled.form``;

const Input = styled.input``;

const Button = styled.button``;
const Link = styled.a``;
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
