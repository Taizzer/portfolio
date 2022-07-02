import React from "react";

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
