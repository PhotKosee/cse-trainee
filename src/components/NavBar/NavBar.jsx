import "./NavBar.css";
import { FaBars, FaTimes } from "react-icons/fa";
import { BiChevronDown, BiUser } from "react-icons/bi";
import { useRef } from "react";

function NavBar() {
    const navRef = useRef();
    const showNavBar = () => {
        navRef.current.classList.toggle("responsive_nav");
    };

    return (
        <header>
            <h3>CSESoc</h3>
            <nav ref={navRef}>
                <button className="drop_btn">Site Info<BiChevronDown className="icon" /></button>
                <button className="drop_btn"><BiUser className="icon" /> About Me?<BiChevronDown className="icon" /></button>
                <button className="play_btn">
                    Play Now
                </button>
            </nav>
            <button className="nav_btn" onClick={showNavBar}>
                <FaBars className="icon" />
            </button>
        </header>
    );
};

export default NavBar;