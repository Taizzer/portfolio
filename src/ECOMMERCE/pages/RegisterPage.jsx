import React from "react";

const Container = styled.div`
  height: 90vh;
  width: 100vw;
`;

const Wrapper = styled.div``;

const Title = styled.h1``;

const Form = styled.form``;

const Input = styled.input``;

const Agree = styled.span``;

const Button = styled.button``;

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
