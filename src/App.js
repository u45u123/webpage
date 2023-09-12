import React from "react";
import {
<<<<<<< HEAD
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import styled from "styled-components";
import Chat from "./component/page/Chat";
import Question from "./component/page/Question";
import ResultPage from "./component/page/ResultPage";


const MainTitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  color: red;
  font-size: 30;
  font-family: 'Jeju Myeongjo', serif;
 }
`;

const MainTitleText = styled.p`
  font-size: 30px;
  font-weight: bold;
  text-align: left;
  margin: 0;
  padding-left: 300px;
  padding-top: 30px;
  padding-bottom: 30px;
`;

const ImagesContainer = styled.div`
  display: flex;
  align-items: center;
  padding-right: 300px;
`;

const Image = styled.img`
  width: 30px;
  height: 30px;
  margin-left: 20px;
`;



function App(props) {
  return (
    <BrowserRouter>
      <MainTitleContainer>
        <MainTitleText>화양연화</MainTitleText>
        <ImagesContainer>
          <Image src="/home.png" alt="Image 1" />
          <Image src="/menu.png" alt="Image 2" />
        </ImagesContainer>
      </MainTitleContainer>
      <Routes>
        <Route index element={<Question />} />
        <Route path="/result" element={<Chat />}/>
      </Routes>
    </BrowserRouter>
  );
}



export default App;
=======
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import styled from "styled-components";
// Pages
import MainPage from './component/page/Question';
import PostWritePage from './component/page/PostWritePage';
import PostViewPage from './component/page/PostViewPage';
import Login from "./component/page/Login";
import Question from "./component/page/Question";

const MainTitleText = styled.p`
    margin-top: 2.5%;
    font-size: 24px;
    font-weight: bold;
    text-align: center;
`;

function App(props) {
    return (
        <BrowserRouter>
            <MainTitleText>화양연화</MainTitleText>
            <Routes>
                <Route index element={<Question />} />
                <Route path="post-write" element={<PostWritePage />} />
                <Route path="post/:postId" element={<PostViewPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
>>>>>>> 6097a3fd850383b99c2f9dc42ad0d8858806edac
