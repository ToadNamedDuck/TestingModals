import "../modals.css"
export default function Modal({isActive, setIsActive}){
    if(isActive === true){
        return <section className="modal">
            <div className="backgroundBlur"></div>
            <div className="modalBody">
                <h4>This is a modal!</h4>
                <button onClick={() => setIsActive(!isActive)}>Close Me!</button>
            </div>
        </section>
    }
    else{
        return null;
    }
}