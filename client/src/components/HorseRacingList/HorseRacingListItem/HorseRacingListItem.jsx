import React from "react";
import ProgressBar from "../../UI/ProgressBar/ProgressBar";
import "./HorseRacingListItem.scss"

const HorseRacingListItem = ({ name, distance, ColorItem }) => {
    return (
        <div className="HorseRacingListItem">
            <li>
                <label htmlFor="fileProgress">{name}</label>
                <ProgressBar value={distance} max={1000} color="red" width="600px" />
            </li>
        </div>
    )
}

export default HorseRacingListItem