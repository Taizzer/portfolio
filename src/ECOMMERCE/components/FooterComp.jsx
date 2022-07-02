import React from "react";
import styled from "styled-components";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import RoomIcon from "@mui/icons-material/Room";
import { mobile } from "../responsive";
const Container = styled.div`
  display: flex;
  background: #eae6e6;
  color: #5a5656;
  ${mobile({ flexDirection: "column" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 18px;
`;

const Logo = styled.h1``;

const Descr = styled.p`
  margin: 18px 0px;
`;

const SocialWrap = styled.div`
  display: flex;
`;

const IconsWrap = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const Center = styled.div`
  padding: 18px;
  flex: 1;
  ${mobile({ display: "none" })}
`;

const Title = styled.h3`
  margin-bottom: 25px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 8px;
`;

const Right = styled.div`
  flex: 1;
  padding: 18px;
  ${mobile({ backgroundColor: "#e7dfdf" })}
`;

const ContactWrap = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
  width: 45%;
`;

const FooterComp = () => {
  return (
    <Container>
      <Left>
        <Logo>Shop</Logo>
        <Descr>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
          amet mollitia non atque libero corporis laborum quod eligendi labore
          accusantium.
        </Descr>
        <SocialWrap>
          <IconsWrap color="ee7171">
            <InstagramIcon />
          </IconsWrap>
          <IconsWrap color="e81a1a">
            <FacebookOutlinedIcon />
          </IconsWrap>
          <IconsWrap color="71a8ee">
            <TwitterIcon />
          </IconsWrap>
        </SocialWrap>
      </Left>
      <Center>
        <Title>Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactWrap>
          <RoomIcon style={{ marginRight: "5px" }} /> USA , NYC 10001
        </ContactWrap>
        <ContactWrap>
          <PhoneIphoneIcon stysle={{ marginRight: "5px" }} /> +1 210 321 12
        </ContactWrap>
        <ContactWrap>
          <MailOutlineOutlinedIcon style={{ marginRight: "10px" }} />
          contact@email.com
        </ContactWrap>
        <Payment src="https://www.citypng.com/public/uploads/preview/-11597193844xtj2mnv37b.png" />
      </Right>
    </Container>
  );
};

export default FooterComp;
