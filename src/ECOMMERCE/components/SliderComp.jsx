import React from "react";
import styled from "styled-components";
import ArrowLeftOutlinedIcon from "@mui/icons-material/ArrowLeftOutlined";
import ArrowRightOutlinedIcon from "@mui/icons-material/ArrowRightOutlined";

const SliderComp = () => {
  return (
    <Container>
      <Arrow direction="left">
        <ArrowLeftOutlinedIcon />
      </Arrow>
      <Arrow direction="right">
        <ArrowRightOutlinedIcon />
      </Arrow>

      <Wrap>
        <Slide>
          <ImgContainer>
            <Image src="" />
          </ImgContainer>

          <InfoContainer></InfoContainer>
        </Slide>
      </Wrap>
    </Container>
  );
};

export default SliderComp;
