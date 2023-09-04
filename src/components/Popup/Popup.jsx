import "./Popup.css"
import { FaTimes } from "react-icons/fa";

function Popup(props) {
    return (props.trigger) ? (
        <div className="popup-wrapper">
            <div className="inner">
                <button className="close-btn" onClick={() => props.setTrigger(false)}>
                    <FaTimes className="close-icon" />
                </button>
                { props.children }
            </div>
        </div>
    ) : "";
}

export default Popup;