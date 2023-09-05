import React from "react";
import "./Card.css";

const Card = (props) => {
    const{ image, title, sub } = props;
    return (
        <div className="card-wrapper">
            <div className="card">
                <div className="image-content">
                    <img src={image} alt="demo" className="card-img"></img>
                </div>

                <div className="card-content">
                    <h2 className="name">{title}</h2>
                    <h3 className="subtitle">{sub}</h3>
                </div>
            </div>
        </div>
    );
}

export default Card;