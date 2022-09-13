import { SQUARE } from "../Constants/actions";

function sq(state, action) {
    let newState = [...state];
    switch (action.type) {
        case SQUARE:
            newState.push('')
            break
        default:
    }
    return newState
}

export default sq;