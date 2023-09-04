import React from "react";
import "./Card.css";

const Card = (props) => {
    const{ image, title, sub1, sub2 } = props;
    return (
        <div className="card-wrapper">
            <div className="card">
                <div className="image-content">
                    <img src="https://user-images.githubusercontent.com/114990364/259046932-5247fc18-4137-46b3-b65d-78fede9b1660.png" alt="demo" className="card-img"></img>
                </div>

                <div className="card-content">
                    <h2 className="name">test</h2>
                    <h3 className="subtitle">test</h3>
                </div>
            </div>
        </div>
    );
}

export default Card;