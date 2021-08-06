import React from "react";
import styled from "styled-components";

const BannerContainer = styled.div`
  width: 100%;
  height: 9rem;
  background-color: ${(props) => (props.reverse ? "#3c68fa" : "#f7f3fa")};
  border-radius: 8px;
  margin: 1rem auto;
`;

const TextContainer = styled.div`
  top: 9px;
  left: 20px;
  position: relative;

  font-size: 1.2rem;
  line-height: 1.4em;
  font-weight: 400;
  color: ${(props) => (props.reverse ? "#fff" : "#3c68fa")};
`;

const Text = styled.div`
  color: #fff;
`;

const TextBold = styled.span`
  font-weight: bold;
`;

const Banner = () => {
  return (
    <BannerContainer>
      <TextContainer>
        <Text>함께 달릴 준비 되셨나요?</Text>
        <Text>
          <TextBold>두윗</TextBold>과 함께 <TextBold>달려봐요!</TextBold>
        </Text>
      </TextContainer>
    </BannerContainer>
  );
};

export default Banner;
