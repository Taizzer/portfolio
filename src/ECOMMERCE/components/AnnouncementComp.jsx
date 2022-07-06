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
      <code style={{ marginLeft: "10px", color: "black" }}>
        <a
          target="_blank"
          href="https://github.com/Taizzer/portfolio/tree/main/src/TrackShopApp"
        >
          https://github.com/Taizzer/portfolio/tree/main/src/ECOMMERCE
        </a>{" "}
        <span style={{ fontSize: "11px" }}>(Under Construction)</span>
      </code>
      <span
        style={{ color: "#ff9090", fontWeight: 100, marginLeft: "0px" }}
      ></span>
    </Container>
  );
};

export default AnnouncementComp;
