import styled from "styled-components";
import Story from "./Story";

const StyledBackpage = styled.div`
    width: 700px;
    background-color: #e9e9e9;
    height: 2000px;
    padding: 16px;
    text-align: center;
    color: black;
    
`;


function Backpage(props){
    return(
        <StyledBackpage>당신의 이야기를 들려주세요</StyledBackpage>
    )
}

export default Backpage;