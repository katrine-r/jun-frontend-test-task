import { GET_HORSERACING_RESULTS } from "../types";

const initialState = {
    horseRacing: []
}

const horseRacingReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_HORSERACING_RESULTS:
            return {
                ...state,
                horseRacing: payload
            };
        default:
            return state;
    }
}

export default horseRacingReducer