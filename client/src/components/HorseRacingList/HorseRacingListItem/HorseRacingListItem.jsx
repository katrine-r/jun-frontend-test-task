import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Horse from "../../../icons/Horse";
import { setRatingHorseRacing } from "../../../store/actions/horseRacing";
import ProgressBar from "../../UI/ProgressBar/ProgressBar";
import "./HorseRacingListItem.scss"

const listHorse = []

const HorseRacingListItem = ({ horse, name, distance, colorItem }) => {
    
    const dispatch = useDispatch()

    const selectColor = (name) => { 
        const findColor = colorItem.find(i => i.name === name)
        const color = findColor.color
        return color
    }

    const ratingHandler = (horse) => {
        if (horse.distance === 1000) {
            const findHorse = listHorse.find(i => i.name === horse.name)
            if (!findHorse) {
                listHorse.push(horse)
            }
            console.log('listHorse', listHorse)
        }
    }

    useEffect(() => {
        dispatch(setRatingHorseRacing(listHorse))
    }, [])

    return (
        <div className="HorseRacingListItem">
            <li>
                { ratingHandler(horse) }
                <div className="NameHorse">
                    <Horse fill={selectColor(name)} />
                    <label htmlFor="fileProgress">{name}</label>
                </div>
                <ProgressBar 
                    value={distance} 
                    max={1000} 
                    color={selectColor(name)}
                    width="600px"
                />
            </li>
        </div>
    )
}

export default HorseRacingListItem