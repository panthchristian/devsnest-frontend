import React from "react";
import "./card.styles.css";
export const Card = (props) => (
  <div className="card-container">
    <img
      src="https://i.imgflip.com/2kuh6f.jpg"
      height="300px"
      width="500px"
      alt="monster"
    />
    <h2>Meme Card</h2>
  </div>
);

export default Card;
