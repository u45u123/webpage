import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import Callchatgptapi from "./Callchatgptapi";

const Header = styled.div`
  width: 100%;
  height: 50px;
  background: linear-gradient(to right, #ff3333, #ff8c8c);
`;

const Container = styled.div`
  margin-top: 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ChatContainer = styled.div`
  width: 1070px;
  height: 564px;
  background-color: #ffc4c4;
  border-radius: 5px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

const ChatMessages = styled.div`
  flex: 1;
  padding: 10px;
  background-color: #ffc4c4;
  overflow-y: scroll;
`;

const UserInput = styled.div`
  width: 1070px;
  background-color: #fff;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const InputField = styled.textarea`
  flex: 1;
  padding: 5px;
  border: 1px solid;
  border-radius: 5px;
  resize: none;
  min-height: 60px;
  margin-top: 20px;
`;

const SendButton = styled.button`
  background-color: #3498db;
  align-text: center;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 25px 10px;
  height: 40px;
  cursor: pointer;
`;

const Message = styled.div`
  margin-bottom: 10px;
  padding: 5px 10px;
  border-radius: 5px;
  background-color: ${(props) => (props.sender === "user" ? "#ffffff" : "#2ecc71")};
  
  align-self: ${(props) => (props.sender === "user" ? "flex-end" : "flex-start")};
`;

function Chat() {
  const [userMessages, setUserMessages] = useState([]); // 사용자가 입력한 메시지 배열
  const [inputMessage, setInputMessage] = useState(""); // 사용자가 입력 중인 메시지
  const [serverMessages, setServerMessages] = useState([]); // 서버에서 온 메시지 배열

  const sendMessage = async () => {
    if (inputMessage) {
      const newUserMessage = { text: inputMessage, sender: "user" };
      setUserMessages([...userMessages, newUserMessage]);
      setInputMessage("");

      try {
        const response = await axios.post("/api/v1/chat-gpt/older", {
          messages: [...userMessages, newUserMessage],
        });

        const aiResponse = response.data.messages[0].text;
        const newAIMessage = { text: aiResponse, sender: "ai" };
        setServerMessages([...serverMessages, newAIMessage]);
      } catch (error) {
        console.error("OpenAI와 통신 중 오류가 발생했습니다.", error);
      }
    }
  };

  return (
    <>
      <Header />
      <Container>
        <ChatContainer>
          <ChatMessages>
            {/* 사용자가 입력한 메시지를 표시 */}
            {userMessages.map((message, index) => (
              <Message key={index} sender={message.sender}>
                {message.text}
              </Message>
            ))}

            {/* 서버에서 온 메시지를 표시 */}
            {serverMessages.map((message, index) => (
              <Message key={index} sender={message.sender}>
                {message.text}
              </Message>
            ))}
          </ChatMessages>
          <UserInput>
            <InputField
              rows={3}
              placeholder="메시지를 입력하세요."
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
            />
            <SendButton onClick={sendMessage}>보내기</SendButton>
          </UserInput>
        </ChatContainer>
      </Container>
    </>
  );
}

export default Chat;
