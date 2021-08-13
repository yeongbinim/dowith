import React from "react";
import styled from "styled-components";

import logo from "../../assets/dowith-motion.gif";

const Background = styled.div`
  background-color: #000;
  width: 100%;
  position: absolute;
  left: 0;
  top: 0;
  z-index: -1;
`;

const Container = styled.div`
  padding: 3rem;
  position: relative;
  margin: auto;
`;

const Presenter = () => (
  <>
    <Background />
    <Container>
      <img src={logo} alt="loading logo" />
    </Container>
  </>
);

// Presenter.propTypes = {
// };

export default Presenter;
