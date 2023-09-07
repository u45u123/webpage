import React, { useState } from "react";

function ConfirmButton(props){
    const [isconfirmed, setIsConfirmed] = useState(false);

    const handleConfirm = () => {
        setIsConfirmed((prevIsConfirmed) => !prevIsConfirmed);
    };

    return (
        <button onClick={handleConfirm} disable={isconfirmed}>
            {isconfirmed ? "확인됨" : "확인하기"}
        </button>
    );
}

export default ConfirmButton;