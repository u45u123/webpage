import React from "react";
import styled from "styled-components";

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`;

const TopSection = styled.div`
  background: linear-gradient(to right, #ff6b6b, #ffb88c);
  width: 100%;
  height: 530px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 80px;
`;

const Title = styled.h1`
  font-size: 90px;
  color: white;
  margin: 0;
  margin-bottom: 20px;
`;

const ImageContainer = styled.div`
  text-align: center;
  margin-bottom: 20px;
`;

const Image = styled.img`
  width: 518px;
  height: 33px;
`;

const Text = styled.p`
  font-size: 18px;
  margin: 10px 0;
`;

const MiddleContent = styled.div`
  text-align: center;
  margin-bottom: 20px;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const Button = styled.button`
  width: 505px;
  height: 179px;
  background-color: white;
  border: 2px solid black;
  font-size: 24px;
  font-weight: bold;
  color: black;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #ccc;
  }
`;

const Divider = styled.div`
  width: 100%;
  text-align: center;
  font-size: 24px;
  font-weight: bold;
  color: black;
  margin-bottom: 90px;
`;

function First() {
  return (
    <PageContainer>
      <TopSection>
        <Title>화양연화</Title>
        <MiddleContent>
          <Image src="/Firstlogo.png" alt="Sample" />
          <Text>깊은 삶에서 전하고 배우는 아름다운 가치</Text>
        </MiddleContent>
      </TopSection>

      <Divider>회원 유형 선택</Divider>

      <ButtonContainer>
        <Button>전함이(어르신 회원)</Button>
        <Button>배움이(누구나 회원)</Button>
      </ButtonContainer>
    </PageContainer>
  );
}

export default First;
