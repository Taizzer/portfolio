import React from "react";
import styled from "styled-components";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 55vh;
  background-color: #e9fffc;
`;
const Title = styled.h1`
  font-size: 64px;
  margin-bottom: 18px;
  font-size: 24px;
  font-weight: 400;
  margin-bottom: 18px;
`;

const Descri = styled.div``;

const InputWrap = styled.div``;

const Input = styled.input``;

const Button = styled.button``;

const NewsletterComp = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Descri>Get updates...</Descri>
      <InputWrap>
        <Input placeholder="Your email" />
        <Button>
          <SendOutlinedIcon />
        </Button>
      </InputWrap>
    </Container>
  );
};

export default NewsletterComp;
