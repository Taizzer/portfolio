import React, { useState } from "react";
import styled from "styled-components";
import ArrowLeftOutlinedIcon from "@mui/icons-material/ArrowLeftOutlined";
import ArrowRightOutlinedIcon from "@mui/icons-material/ArrowRightOutlined";
import { sliderItems } from "../data";
const Container = styled.div`
  /* border: 1px solid red; */
  display: flex;
  background: white;
  /* background-image: linear-gradient(to top, #feada6 0%, #f5efef 100%); */
  width: 100%;
`;

const ContainerWrap = styled.div`
  /* border: 1px solid blue; */
  width: 100%;
  height: 70vh;
  /* center */
  margin: auto;
  display: flex;
  /* background-image: linear-gradient(to top, #feada6 0%, #f5efef 100%); */
  position: relative;
  background: white;
  overflow: hidden;
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  justify-content: center;
  align-items: center;

  background-color: #323131;
  color: white;
  font-size: 2rem;
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
  border: 1px solid black;
  /* z is important */
  z-index: 2;
`;

const Wrap = styled.div`
  /* border: 2px solid green; */
  height: 100%;
  /* width added */
  /* !!#$$ width off Fixed big bug and now slider bottom will appear */
  /* width: 100%; */
  /* !!#$$ width off Fixed big bug and now slider bottom will appear */
  background-image: linear-gradient(to top, #feada6 0%, #f5efef 100%);
  display: flex;
  /* move slider to the right */
  /* transform: translateX(-100px); */
  /* transform: translateX(-70vw); */
  /* transform: translateX(-200vw); */
`;
const Slide = styled.div`
  /* border: 2px solid yellow; */
  /* width:100% */

  display: flex;
  align-items: center;
  width: 100vw;
  height: 100%;
  background-color: #${(props) => props.bg};
`;
const ImgContainer = styled.div`
  height: 100%;
  /* auto shrink  */

  flex: 1;

  /* border: 1px solid red; */
`;
const Image = styled.img`
  height: 100%;

  flex: 1;
  /* border: 1px solid red; */
  margin-left: 50%;
  opacity: 0.8;
`;
const InfoContainer = styled.div`
  flex: 1;
  /* border: 1px solid blue; */
  padding: 5rem;
`;

const Title = styled.h1`
  color: #de6e13;
  font-size: 40px;
  font-weight: 800;
  /* background: #e6e6e6; */
  padding: 1rem;
  border-radius: 10px;
  opacity: 0.8;
`;
const Desc = styled.p`
  font-size: 24px;
  font-weight: 600;
  margin: 4rem 0rem;
  opacity: 0.6;
`;

const Button = styled.button`
  padding: 0.5rem 2rem;
  background: transparent;
  border-radius: 10px;
  font-weight: bold;
  cursor: pointer;
`;

const SliderComp = () => {
  const [slide, setSlide] = useState(0);
  const handleClick = (direction) => {};

  return (
    <Container>
      <ContainerWrap>
        {/* adding props */}
        <Arrow direction="left" onClick={() => handleClick("left")}>
          <ArrowLeftOutlinedIcon />
        </Arrow>
        <Arrow direction="right" onClick={() => handleClick("right")}>
          <ArrowRightOutlinedIcon />
        </Arrow>

        <Wrap>
          {sliderItems.map((item) => {
            return (
              <Slide bg={item.bg}>
                <ImgContainer>
                  <Image src={item.img} />
                </ImgContainer>

                <InfoContainer>
                  <Title> {item.title}</Title>
                  <Desc>{item.desc}</Desc>
                  <Button>Shop</Button>
                </InfoContainer>
              </Slide>
            );
          })}
        </Wrap>
      </ContainerWrap>
    </Container>
  );
};

export default SliderComp;
