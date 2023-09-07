import {useNavigate} from "react-router-dom";
import styled from "styled-components";
import TextInput from "../ui/TextInput";
import Button from "../ui/Button";
import { useState } from "react";
import "../../style.css";
import Kakao from "../ui/Kakao";

const Wrapper = styled.div`
    padding: 16px;
    width: calc(100% - 32px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Container = styled.div`
    width: 100%;
    max-width: 720px;
    
    & > * {
        :not(:last-child) {
            margin-bottom: 16px;
        }
    }
`;

function PostWritePage(props) {
    const navigate = useNavigate();

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    return(
        <div className="login-wrapper">
        <h2>Login</h2>
        <form method="post" action="서버의url" id="login-form">
          <input type="text" name="userName" placeholder="Email" />
          <input type="password" name="userPassword" placeholder="Password" />
          <label htmlFor="remember-check">
            <input type="checkbox" id="remember-check" />아이디 저장하기
          </label>
          <input type="submit" value="Login" />
          <Kakao></Kakao>
        </form>
      </div>
    )
}

export default PostWritePage;