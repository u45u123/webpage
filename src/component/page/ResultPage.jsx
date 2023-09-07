import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const GeneratedTextContainer = styled.div`
  max-width: 90%;
  text-align: center;
  padding: 20px;
  background-color: #f0f0f0;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
`;

const GeneratedText = styled.div`
  font-size: 18px;
`;

function ResultPage({ generatedText }) {
  return (
    <Container>
      <GeneratedTextContainer>
        <GeneratedText>{generatedText}</GeneratedText>
      </GeneratedTextContainer>
    </Container>
  );
}

export default ResultPage;
