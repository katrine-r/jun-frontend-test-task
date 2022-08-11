import { GET_HORSERACING_RESULTS } from "../types"

export const getHorseRacingResults = payload => {
    return {
      type: GET_HORSERACING_RESULTS,
      payload
    }
}