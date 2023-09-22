import { useState } from "react";
import ModalButton from "../components/ModalButton";
import Modal from "../components/Modal";

export default function Home(){
    const [isActive, setIsActive] = useState(false)
    return <>
        <h2>This is a test html page.</h2>
        <ModalButton isActive={isActive} setIsActive={setIsActive}></ModalButton>
        <Modal isActive={isActive} setIsActive={setIsActive}></Modal>
    </>
}