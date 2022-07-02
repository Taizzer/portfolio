import React from "react";
import styled from "styled-components";

const Container = styled.div`
  /* background: #979797; */

  color: #10b19f;
  font-weight: 100;
  height: 25px;
  /* border-bottom: 1px solid black; */
`;
const AnnouncementComp = () => {
  return (
    <Container>
      AnnouncementComp my github <span style={{ color: "#ff9090" }}>Sale</span>
    </Container>
  );
};

export default AnnouncementComp;
