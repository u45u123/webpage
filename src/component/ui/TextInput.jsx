import styled from "styled-components";

const StyledTextarea = styled.textarea`
    width: 100px;
    height: 100px;
    padding: 16px;
    font-size: 16px;
    line-height: 20px;
`;

function TextInput(props) {
    const { value, onChange} = props;

    return <StyledTextarea value={value} onChange={onChange} />;
}

export default TextInput;