import React from "react";
import {
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
import Show from "./component/page/Show";
import First from "./component/page/First";
import Chat from "./component/page/Chat";

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
                <Route index element={<Chat />} />
                <Route path="post-write" element={<PostWritePage />} />
                <Route path="post/:postId" element={<PostViewPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;