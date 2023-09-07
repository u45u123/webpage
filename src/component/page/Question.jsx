import React, { useState } from "react";
import styled from "styled-components";
import Callchatgptapi from "./Callchatgptapi";
import { useNavigate } from "react-router-dom"; // useNavigate를 import

const Toplayer = styled.div`
  width: 100%;
  height: 51px;
  background: linear-gradient(to right, #ff6b6b, #ffb88c);
  top: 0;
  left: 0;
  z-index: 1;
`;

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
  font-size: 40px;
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

const SmallButton = styled.button`
  margin-top: 10px;
  background-color: #ff6b6b;
  color: white;
  font-size: 14px;
  padding: 5px 10px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
`;

function Question() {
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");
  const [text3, setText3] = useState("");
  const [generatedText, setGeneratedText] = useState("");
  const navigate = useNavigate(); // useHistory 대신 useNavigate를 사용하여 페이지 이동 처리

  const handleButtonClick = async () => {
    try {
      const response = await Callchatgptapi([text1, text2, text3]);
      setGeneratedText(response);
    } catch (error) {
      // 오류 처리
    }
  };

  const handleSmallButtonClick = () => {
    // 작은 버튼 클릭 시 /result로 이동
    navigate("/result");
  };

  return (
    <Container>
      <Toplayer />
      <TextareaContainer>
        <Title>영상 자서전 만들기</Title>
        <Text>1. 당신의 어린 시절은 어땠나요?</Text>
        <Textarea
          placeholder="300자 이내로 입력해주세요"
          value={text1}
          onChange={(e) => setText1(e.target.value)}
        />
        <Text>2. 당신의 가장 빛난 시절은 어땠나요?</Text>
        <Textarea
          placeholder="300자 이내로 입력해주세요"
          value={text2}
          onChange={(e) => setText2(e.target.value)}
        />
        <Text>3. 당신의 현재 시절은 어떤가요?</Text>
        <Textarea
          placeholder="300자 이내로 입력해주세요"
          value={text3}
          onChange={(e) => setText3(e.target.value)}
        />
        <GradientButton onClick={handleButtonClick}>다음으로</GradientButton>
        <SmallButton onClick={handleSmallButtonClick}>작은 버튼</SmallButton>
      </TextareaContainer>
    </Container>
  );
}

export default Question;
