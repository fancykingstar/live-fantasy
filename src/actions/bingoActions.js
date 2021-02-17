import { getEmptyStringArray } from "../utility/shared";

export const BINGO_GAME_IN_PROGRESS = '[BINGO GAME] BINGO_GAME_IN_PROGRESS';
export const BINGO_GAME_RESET = '[BINGO GAME] BINGO_GAME_RESET';
export const BINGO_MATCHED_NUMBERS = '[BINGO GAME] BINGO_MATCHED_NUMBERS';

export const DEFAULT_STATE = {
    gameInitialValues: {
        b: getEmptyStringArray(12), i: getEmptyStringArray(12), n: getEmptyStringArray(12), g: getEmptyStringArray(12), o: getEmptyStringArray(12)
    },
    matchedNumbers: [],
}


export function resetBingo() {
    return dispatch => {
        return dispatch({
            type: BINGO_GAME_RESET,
            payload: DEFAULT_STATE
        })
    }
}

export function bingoInProgress(payload) {
    return dispatch => {
        dispatch({
            type: BINGO_GAME_IN_PROGRESS,
            payload
        })
    }
}

export function setMatchedNumbers(payload) {
    return dispatch => dispatch({
        type: BINGO_MATCHED_NUMBERS,
        payload,
    })
}