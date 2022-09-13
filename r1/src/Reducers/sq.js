import { REM_SQUARE, SQUARE } from "../Constants/actions";

function sq(state, action) {
    let newState = [...state];
    switch (action.type) {
        case SQUARE:
            newState.push('')
            break
        case REM_SQUARE:
            newState.shift()
            break
        default:
    }
    return newState
}

export default sq;