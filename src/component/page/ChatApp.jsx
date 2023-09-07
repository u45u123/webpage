

import React, { useState, useEffect } from "react";

import styled from "styled-components";

import axios from "axios";

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

background-color: #ffc4c4; /* 채팅 메시지 영역 배경색 */

overflow-y: scroll;

`;

const UserInput = styled.div`

width: 1070px;

background-color: #fff; /* 사용자 입력 영역 배경색 */

display: flex;

justify-content: flex-end; /* 입력창을 오른쪽에 위치시키기 위해 */

align-items: center;

`;

const InputField = styled.textarea`

flex: 1;

padding: 5px;

border: 1px solid;

border-radius: 5px;

resize: none; /* 사용자 크기 조정 비활성화 */

min-height: 60px; /* 최소 높이 조정 */

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

function SignalSender() {

const sendSignalToBackend = () => {

const serverUrl = '/api/v1/chat-gpt/getCardData'

const signalData = {

action: 'start',

message: '시작',

};

axios

.post(serverUrl, signalData)

.then((response) => {

console.log('서버 응답:', response.data);

// 서버 응답을 처리합니다.

})

.catch((error) => {

console.error('에러 발생:', error);

// 에러를 처리합니다.

});

};

}

const handleOpenNewTab = (url) => {

window.open(url, "_blank", "noopener, noreferrer");

};

function ChatApp() {

const [messages, setMessages] = useState([]);

const [inputMessage, setInputMessage] = useState("");

const sendMessage = async () => {

if (inputMessage) {

const newUserMessage = { text: inputMessage, sender: "user" };

setMessages([...messages, newUserMessage]);

setInputMessage("");

try {

const response = await axios.post("/api/v1/chat-gpt/older", {

messages: [...messages, newUserMessage],

});

const aiResponse = response.data.messages[0].text;

const newAIMessage = { text: aiResponse, sender: "ai" };

setMessages([...messages, newAIMessage]);

} catch (error) {

console.error("OpenAI와 통신 중 오류가 발생했습니다.", error);

}

}

};

const [cardData, setCardData] = useState([]);

useEffect(() => {

// 서버에서 JSON 데이터를 가져오는 비동기 함수 호출

fetchData();

}, []);

// 서버에서 JSON 데이터를 가져오는 비동기 함수

const fetchData = async () => {

try {

// 서버 API 엔드포인트로 GET 요청을 보내 JSON 데이터를 받아옴

const response = await axios.get('/api/getCardData'); // 서버 API 호출

const jsonData = response.data;

// 받아온 JSON 데이터를 상태에 저장

setCardData(jsonData);

} catch (error) {

console.error('데이터 가져오기 오류:', error);

}

};

return (

<>

<Header />

<Container>

<ChatContainer>

<ChatMessages>

{messages.map((message, index) => (

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

<div><button onClick={sendSignalToBackend}>사진만들기</button></div>

</ChatContainer>

</Container>

<img src={card.imageURL}></img>

</>

);

}

export default ChatApp;