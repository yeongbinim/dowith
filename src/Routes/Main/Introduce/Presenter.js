import React from "react";
import styled from "styled-components";
import Helmet from "react-helmet";
import ButtonLink from "Components/LinkButton";

const Container = styled.div`
  position: relative;
  padding: 2rem;
  overflow-x: hidden;
  max-width: 1000px;
  margin: 0 auto;
`;

const Section = styled.section`
  position: relative;
  z-index: 1;
  & > ul {
    margin-bottom: 5rem;
  }
`;

const SectionBox = styled.section`
  border-bottom: 2px solid #f0f0f0;
  margin-bottom: 3rem;
`;

const Centerspan = styled.div`
  font-size: ${({ theme: { fontSizes } }) => fontSizes.normal};
  line-height: 2rem;
  text-align: center;
`;

const Button = styled.div`
  margin: 0 auto;
  margin-top: 6rem;
  width: 80%;
  position: relative;
`;

const Img = styled.img`
  width: 100%;
`;

const Presenter = () => (
  <>
    <Helmet>
      <title>Introduce | Dowith</title>
    </Helmet>
    {/* <IllustSection reverse={false} create={true} contents={[]} /> */}
    <Img src={require("assets/Introduce/1.png").default}></Img>
    <Container>
      <Img src={require("assets/Introduce/2.png").default}></Img>
      <hr />
      <Img src={require("assets/Introduce/3.png").default}></Img>
      <hr />
      <Img src={require("assets/Introduce/4.png").default}></Img>
      <br />
      <br />
      <br />
      <br />
      <Section>
        <SectionBox>
          <Centerspan
            style={{ fontWeight: "500", color: "#3c68fa", fontSize: "1.4rem" }}
          >
            두윗과 함께 목표를 향해 달릴 준비 되셨나요?
            <br />
            <span
              style={{
                fontWeight: "700",
                fontSize: "1.4rem",
              }}
            >
              <strong>두윗을 시작해보세요!</strong>
            </span>
          </Centerspan>

          <Button>
            <ButtonLink url="/" contents={["메인 화면으로 돌아가기"]} />
            <ButtonLink url="/challenge" contents={["전체 챌린지 둘러보기"]} />
            <ButtonLink
              url="/createchallenge"
              contents={["챌린지 만들러가기"]}
            />
          </Button>
        </SectionBox>
      </Section>
    </Container>
  </>
);

// Presenter.propTypes = {
// };

export default Presenter;
