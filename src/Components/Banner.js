import React from "react";
import styled from "styled-components";

const BannerContainer = styled.div`
  width: 100%;
  height: 9rem;
  background-color: ${(props) => (props.reverse ? "#f7f3fa" : props.theme.colors.main)};
  border-radius: 8px;
  margin: 1rem auto;
  border: 1px solid ${({theme:{colors}}) => colors.main};
`;

const TextContainer = styled.div`
  top: 9px;
  left: 20px;
  position: relative;
  font-size: 1.2rem;
  line-height: 1.4em;
  font-weight: 400;
`;

const Text = styled.div`
  color: ${(props) => (props.reverse ? props.theme.colors.main : "#f7f3fa")};
`;

const TextBold = styled.span`
  font-weight: bold;
`;

const Banner = ({reverse}) => {
  return (
    <BannerContainer reverse={reverse}>
      <TextContainer>
        <Text reverse={reverse}>함께 달릴 준비 되셨나요?</Text>
        <Text reverse={reverse}>
          <TextBold>두윗</TextBold>과 함께 <TextBold>달려봐요!</TextBold>
        </Text>
      </TextContainer>
    </BannerContainer>
  );
};

export default Banner;
