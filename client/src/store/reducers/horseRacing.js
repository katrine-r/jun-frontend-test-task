import { GET_HORSERACING_RESULTS } from "../types";
import { GET_FILTEREDLIST } from "../types"
import { SET_RATING_HORSERACING } from "../types"

const initialState = {
    horseRacing: [],
    filteredList: [],
    ratingHorseRacing: []
}

const horseRacingReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_HORSERACING_RESULTS:
            return {
                ...state,
                horseRacing: payload
            };
        case GET_FILTEREDLIST:
            return {
                ...state,
                filteredList: payload
            };
        case SET_RATING_HORSERACING:
            return {
                ...state,
                ratingHorseRacing: payload
            };
        default:
            return state;
    }
}

export default horseRacingReducer