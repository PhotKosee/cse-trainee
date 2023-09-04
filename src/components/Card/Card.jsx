import React from "react";
import "./Card.css";

const Card = (props) => {
    const{ image, title, sub1, sub2 } = props;
    return (
        <div className="card-wrapper">
            <div className="card">
                <div className="image-content">
                </div>

                <div className="card-content">
                    Hi
                </div>
            </div>
        </div>
    );
}

export default Card;