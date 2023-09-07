import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios"; // axios 라이브러리 추가

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const ChatContainer = styled.div`
  border: 1px solid #ccc;
  border-radius: 5px;
  overflow: hidden;
  width: 300px;
`;

const MessageList = styled.div`
  padding: 10px;
  max-height: 300px;
  overflow-y: scroll;
`;

const Message = styled.div`
  margin-bottom: 10px;
  padding: 5px 10px;
  border-radius: 5px;
  background-color: ${(props) => (props.sender === "user" ? "#3498db" : "#2ecc71")};
  color: white;
  align-self: ${(props) => (props.sender === "user" ? "flex-end" : "flex-start")};
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  border-top: 1px solid #ccc;
`;

const InputField = styled.input`
  flex: 1;
  padding: 5px;
  border: none;
  border-radius: 5px;
  margin-right: 10px;
`;

const SendButton = styled.button`
  background-color: #3498db;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  cursor: pointer;
`;

function ChatApp() {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");

  // 메시지를 보내는 함수
  const sendMessage = async () => {
    if (inputMessage) {
      const newMessage = { text: inputMessage, sender: "user" };
      setMessages([...messages, newMessage]);
      setInputMessage("");

      try {
        // OpenAI API와 통신하여 대화를 진행하고 응답을 받아옵니다.
        const response = await axios.post("/api/v1/chat-gpt/older", {
          messages: [...messages, newMessage],
        });

        if (response.data && response.data.choices) {
          const aiResponse = response.data.choices[0].message.content;
          const aiMessage = { text: aiResponse, sender: "ai" };
          setMessages([...messages, aiMessage]);
        }
      } catch (error) {
        console.error("OpenAI와 통신 중 오류가 발생했습니다.", error);
      }
    }
  };

  return (
    <Container>
      <ChatContainer>
        <MessageList>
          {messages.map((message, index) => (
            <Message key={index} sender={message.sender}>
              {message.text}
            </Message>
          ))}
        </MessageList>
        <InputContainer>
          <InputField
            type="text"
            placeholder="메시지를 입력하세요."
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
          />
          <SendButton onClick={sendMessage}>보내기</SendButton>
        </InputContainer>
      </ChatContainer>
    </Container>
  );
}

export default ChatApp;
