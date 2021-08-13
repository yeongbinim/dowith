import React from "react";
import styled from "styled-components";

import logo from "assets/dowith-motion.gif";

const Background = styled.div`
  background-color: #000;
  width: 100%;
  height:100vh;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 2000;
  margin:0 auto;
  display:flex;
  justify-content:center;
  align-items:center;
  img{
	width:80%;
  	max-width:800px;
  }
`;

const Presenter = () => {
 
  <>
    <Background>
      <img src={logo} alt="loading logo" />
	</Background>
  </>

};

// Presenter.propTypes = {
// };

export default Presenter;