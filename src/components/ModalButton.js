import { useEffect, useState } from "react";

export default function ModalButton(){
    const [isActive, setIsActive] = useState(false)
    const [buttonText, setButtonText] = useState("Click Me!");

    function buttonOnClick(e){
        e.preventDefault();
        setIsActive(!isActive);
    }

    useEffect(() => {
        if(isActive === true){
            setButtonText("Click Me Again!");
        }
        else{
            setButtonText("Click Me!");
        }
    },[isActive])

    return <button onClick={buttonOnClick}>{buttonText}</button>
}