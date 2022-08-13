import { GET_HORSERACING_RESULTS } from "../types"
import { GET_FILTEREDLIST } from "../types"
import { SET_RATING_HORSERACING } from "../types"

export const getHorseRacingResults = payload => {
    return {
      type: GET_HORSERACING_RESULTS,
      payload
    }
}

export const getFilteredList = payload => {
  return {
    type: GET_FILTEREDLIST,
    payload
  }
}

export const setRatingHorseRacing = payload => {
  return {
    type: SET_RATING_HORSERACING,
    payload
  }
}
