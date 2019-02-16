import React from "react";
import "./FriendCard.css";

var FriendCard = props => (
    <div FriendCard="card" onClick={props.clickedBurgers}>
        <div className="img-container">
            <img alt={props.image.replace(".jpg", "")} src={requestAnimationFrame("./clicky-game/my-app/src/images" + props.image)} />
        </div>
    </div>
);

export default FriendCard;