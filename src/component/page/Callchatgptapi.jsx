import axios from "axios";

async function Callchatgptapi(inputTextArray) {
    try {
        const response = await axios.post('/api/v1/chat-gpt', {
            prompts: inputTextArray // 배열로 전달
        });
        const generatedText = response.data.choices[0].text;
        return generatedText;
    } catch (error) {
        console.error('API 호출 중 오류가 발생했습니다:', error);
        throw error;
    }
}

export default Callchatgptapi;
