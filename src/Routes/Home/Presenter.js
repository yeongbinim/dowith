import React from "react";
import styled from "styled-components";
import ImageContainer from "Components/Image";
import BannerContainer from "Components/Banner";

const Container = styled.div`
  padding: 1rem;
`;

const Presenter = () => (
  <Container>
    <ImageContainer />
    <BannerContainer />
  </Container>
);

// Presenter.propTypes = {
// };

export default Presenter;
