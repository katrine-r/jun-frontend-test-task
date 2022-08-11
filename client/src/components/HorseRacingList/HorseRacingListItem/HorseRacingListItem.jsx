import React from "react";
import "./HorseRacingListItem.css"

const HorseRacingListItem = ({ name, distance }) => {
    return (
        <div className="HorseRacingListItem">
            <li>
                <span>{name}</span>
                <span>{distance}</span> 
            </li>
        </div>
    )
}

export default HorseRacingListItem