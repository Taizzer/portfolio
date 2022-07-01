import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background: #687168;
  color: #ffffff;
  font-weight: 100;
  height: 25px;
`;
const AnnouncementComp = () => {
  return (
    <Container>
      AnnouncementComp my github <span style={{ color: "#ff9090" }}>Sale</span>
    </Container>
  );
};

export default AnnouncementComp;
