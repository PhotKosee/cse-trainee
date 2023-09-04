import "./NavBar.css";
import { FaBars } from "react-icons/fa";
import { BiChevronDown, BiUser } from "react-icons/bi";
import { useRef } from "react";

function NavBar(props) {
    const navRef = useRef();
    const showNavBar = () => {
        navRef.current.classList.toggle("responsive-nav");
    };

    return (
        <div className="header">
            <div className="brand">
                <h3>CSESoc</h3>
            </div>
            <img src="https://user-images.githubusercontent.com/114990364/259049774-4323e11a-1413-4ff7-9d2a-4feba95a8cbc.png" alt="Logo" className="logo"/>
            <nav ref={navRef}>
                <button className="drop-btn">Site Info<BiChevronDown className="icon" /></button>
                <button className="drop-btn"><BiUser className="icon" /> About Me?<BiChevronDown className="icon" /></button>
                <button className="play-btn" onClick={() => props.setTrigger(true)}>
                    Play Now
                </button>
            </nav>
            <button className="nav-btn" onClick={showNavBar}>
                <FaBars className="icon" />
            </button>
        </div>
    );
};

export default NavBar;