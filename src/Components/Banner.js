import React from "react";
import styled from "styled-components";

const BannerContainer = styled.div`
  width: 320px;
  height: 95px;
  background-color: #3c68fa;
  border-radius: 8px;
`;

const TextContainer = styled.div`
  top: 9px;
  left: 20px;
  position: relative;

  font-size: 12px;
  font-family: Pretendard;
  font-weight: normal;
  line-height: 20px;
  color: #000;
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
