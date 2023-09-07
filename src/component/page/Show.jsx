import React, { useState } from "react";
import styled from "styled-components";

const Toplayer = styled.div`
  width: 100%;
  height: 51px;
  background: linear-gradient(to right, #ff6b6b, #ffb88c);
  top: 0;
  left: 0;
  z-index: 1;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  min-height: 100vh;
  padding: 20px;
  box-sizing: border-box;
`;

const Text = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 100px;
  text-align: center; /* 중앙 정렬 */
`;

const Image = styled.img`
  width: 1240px;
  height: 696px;
  margin-bottom: 20px;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 100px;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #ff6b6b;
  color: white;
  border: none;
  font-size: 18px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;
  height: 160px;
  width: 610px;

  &:hover {
    background-color: #ff4b4b;
  }
`;

const AdditionalContent = styled.div`
  display: ${(props) => (props.isVisible ? "block" : "none")};
  text-align: center; /* 중앙 정렬 */
`;

const StyledTextArea = styled.textarea`
  width: 1240px;
  height: 80px;
  padding: 10px;
  font-size: 16px;
  border: 2px solid black;
  margin-bottom: 20px;
`;

const TitleText = styled.div`
  font-size: 24px;
  font-weight: bold;
  text-align: center; /* 중앙 정렬 */
  margin-bottom: 50px;
`;

const NewText = styled.div`
  font-size: 24px;
  display: ${(props) => (props.isVisible ? "block" : "none")};
  margin-top: 20px;
  text-align: left; /* 왼쪽 정렬 */
`;

function Show() {
  const [isAdditionalContentVisible, setIsAdditionalContentVisible] = useState(
    false
  );

  const toggleAdditionalContent = () => {
    setIsAdditionalContentVisible(!isAdditionalContentVisible);
  };

  return (
    <Container>
      <Toplayer />
      <Text>당신의 이야기를 담은 영상 자서전이에요.</Text>
      <Image src="/Thumbnail.png" alt="Sample" />
      <ButtonContainer>
        <Button onClick={toggleAdditionalContent}>마음에 들어요:)</Button>
        <Button>다시 만들래요:(</Button>
      </ButtonContainer>
      <AdditionalContent isVisible={isAdditionalContentVisible}>
        <TitleText>제목을 입력해주세요.</TitleText>
        <StyledTextArea rows="1" />
        <NewText isVisible={isAdditionalContentVisible}>
          마음에 들어요 버튼을 눌러야 등장해요
        </NewText>
      </AdditionalContent>
    </Container>
  );
}

export default Show;
