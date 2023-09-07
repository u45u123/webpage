import styled from "styled-components"

const Toplayer = styled.div`
    width: 100%;
    height: 51px;
    background: linear-gradient(to right, #ff6b6b, #ffb88c);
    top: 0;
    left: 0;
    z-index: 1;
`


function Login(props){
    return(
        <Toplayer/>
        
    )
}

export default Login;