import React from "react";
import "./HorseRacingList.css"
import { useSelector } from "react-redux";
import HorseRacingListItem from "./HorseRacingListItem/HorseRacingListItem";

const HorseRacingList = () => {
    const { horseRacing } = useSelector((state) => state.horseRacing)
    return (
        <div className="HorseRacingList">
            <ul>
                { horseRacing.map((i, index) => {
                    return (
                        <HorseRacingListItem
                            key={index}
                            name={i.name}
                            distance={i.distance}
                        />
                    )
                })
                }
            </ul>
        </div>
    )
}

export default HorseRacingList