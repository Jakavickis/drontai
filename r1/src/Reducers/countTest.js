import { MINUS_BUT, PLUS_BUT } from "../Constants/017";

function countTest(state, action) {
    let newState = { ...state };
    switch (action.type) {
        // case PLUS_MINUS_NUMBER:
        //     newState.count = action.payload
        //     break
        case PLUS_BUT:
            newState.count = newState.count += parseInt(action.payload)
            break
        case MINUS_BUT:
            newState.count = newState.count -= parseInt(action.payload)
            break
        default:
    }

    return newState
}

export default countTest;