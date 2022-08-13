import React from "react";
import "./HorseRacingList.scss"
import { useSelector } from "react-redux";
import HorseRacingListItem from "./HorseRacingListItem/HorseRacingListItem";

const HorseRacingList = ({ colorItem }) => {

    const { filteredList } = useSelector((state) => state.horseRacing)

    return (
        <div className="HorseRacingList">
            <ul>
                { filteredList.map((i, index) => {
                    return (
                        <HorseRacingListItem
                            key={index}
                            horse={i}
                            name={i.name}
                            distance={i.distance}
                            colorItem={colorItem}
                        />
                    )
                  })
                }
            </ul>
        </div>
    )
}

export default HorseRacingList