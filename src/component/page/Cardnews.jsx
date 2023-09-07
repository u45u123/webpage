import React, { useState, useEffect } from 'react';
import axios from 'axios'; // axios를 사용하여 서버와 통신
import '../../Card.css';
import styled from "styled-components";

const Toplayer = styled.div`
  width: 100%;
  height: 80px;
  background: radial-gradient(circle, #FFFFFF, #E1002A, #E1002A);
  //background: linear-gradient(to right, #E1002A, #ffb88c);
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

function CardNews() {
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
    <div>
        <Container>
        <Toplayer>
        <h1>카드</h1>
        <div className="card-container">
        {cardData.map((card, index) => (
          <div className="card" key={index}>
            <img src={card.imageURL} alt={`Card ${index + 1}`} />
            <p>{card.text}</p>
          </div>
        ))}
      </div>
    </Toplayer>
    </Container>
   
    </div>
  );
}

export default CardNews;