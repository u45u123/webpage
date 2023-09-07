import React from "react";
import styled from "styled-components";

const Toplayer = styled.div`
    width: 100%;
    height: 51px;
    background: linear-gradient(to right, #ff6b6b, #ffb88c);
    top: 0;
    left: 0;
    z-index: 1;
`

const Container = styled.div`
  width: 100%;
  height: calc(100vh - 30%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const TextareaContainer = styled.div`
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  text-align: left;
`;

const Textarea = styled.textarea`
  width: 1070px;
  height: 250px;
  padding: 10px;
  font-size: 16px;
  border: 1px solid;
  margin-bottom: 50px;
`;

const Text = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 2px;
`;

const Title = styled.div`
  margin-bottom: 100px;
  font-size: 20px;
`;

const GradientButton = styled.button`
  width: 1070px;
  height: 80px;
  background: linear-gradient(to right, #ff6b6b, #ffa9a9); /* 분홍색 그라데이션 배경 */
  border: none;
  color: white;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.3s ease-in-out;

  &:hover {
    background: linear-gradient(to right, #ff4b4b, #ff8a8a); /* 호버 시 그라데이션 변경 */
  }
`;

function Question() {
  return (
    <Container>
      <Toplayer/>
      <TextareaContainer>
        <Title>영상 자서전 만들기</Title>
        <Text>1. 당신의 어린 시절은 어땠나요</Text>
        <Textarea placeholder="300자 이내로 입력해주세요"></Textarea>
        <Text>2. 당신의 가장 빛난 시절은 어땠나요?</Text>
        <Textarea placeholder="300자 이내로 입력해주세요"></Textarea>
        <Text>3. 당신의 현재 시절은 어떤가요?</Text>
        <Textarea placeholder="300자 이내로 입력해주세요"></Textarea>
        <GradientButton>다음으로</GradientButton>
      </TextareaContainer>
    </Container>
  );
}

export default Question;
