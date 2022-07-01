import React from "react";
import styled from "styled-components";
import ArrowLeftOutlinedIcon from "@mui/icons-material/ArrowLeftOutlined";
import ArrowRightOutlinedIcon from "@mui/icons-material/ArrowRightOutlined";

const Container = styled.div`
  border: 1px solid red;
`;
const ContainerWrap = styled.div`
  border: 1px solid blue;
  width: 50%;
  height: 40vh;
  margin: auto;
`;
const Arrow = styled.div``;
const SliderComp = () => {
  return (
    <Container>
      <ContainerWrap>
        <Arrow direction="left">
          <ArrowLeftOutlinedIcon />
        </Arrow>
        <Arrow direction="right">
          <ArrowRightOutlinedIcon />
        </Arrow>

        {/* <Wrap>
        <Slide>
          <ImgContainer>
            <Image src="" />
          </ImgContainer>

          <InfoContainer></InfoContainer>
        </Slide>
      </Wrap> */}
      </ContainerWrap>
    </Container>
  );
};

export default SliderComp;
