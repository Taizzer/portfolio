import React from "react";
import styled from "styled-components";
import ArrowLeftOutlinedIcon from "@mui/icons-material/ArrowLeftOutlined";
import ArrowRightOutlinedIcon from "@mui/icons-material/ArrowRightOutlined";

const Container = styled.div`
  border: 1px solid red;
  display: flex;
  background-image: linear-gradient(to top, #feada6 0%, #f5efef 100%);
`;

const ContainerWrap = styled.div`
  border: 1px solid blue;
  width: 50%;
  height: 40vh;
  /* center */
  margin: auto;
  display: flex;
  /* background-image: linear-gradient(to top, #feada6 0%, #f5efef 100%); */
  position: relative;
  background: white;
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  justify-content: center;
  align-items: center;

  background-color: white;
  border-radius: 50%;
  display: flex;
  position: absolute;
  top: 0;
  bottom: 0;
  /* margin auto center between the top and the bottom  */
  margin: auto;
  //using props to move the arrows
  //right  "true" then && active this '10px
  right: ${(props) => props.direction === "right" && "10px"};
  left: ${(props) => props.direction === "left" && "10px"};
  cursor: pointer;
  opacity: 0.6;
`;

const Wrap = styled.div`
  border: 2px solid green;
  height: 100%;
  /* width added */
  width: 100%;
`;
const Slide = styled.div`
  height: 100%;
`;
const ImgContainer = styled.div`
  height: 100%;
`;
const Image = styled.img`
  height: 100%;
`;
const InfoContainer = styled.div``;

const SliderComp = () => {
  return (
    <Container>
      <ContainerWrap>
        {/* adding props */}
        <Arrow direction="left">
          <ArrowLeftOutlinedIcon />
        </Arrow>
        <Arrow direction="right">
          <ArrowRightOutlinedIcon />
        </Arrow>

        <Wrap>
          <Slide>
            <ImgContainer>
              <Image src="https://m.media-amazon.com/images/I/713NOdX971L._AC_UY550_.jpg" />
            </ImgContainer>

            <InfoContainer></InfoContainer>
          </Slide>
        </Wrap>
      </ContainerWrap>
    </Container>
  );
};

export default SliderComp;
