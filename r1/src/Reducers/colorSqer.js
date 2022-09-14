import { COLOR_3, SQ_SIZE } from "../Constants/017";

function colorSqer(state, action) {
    const newState = { ...state }
    switch (action.type) {
        case COLOR_3:
            newState.color = newState.color === 3 ? 1 : newState.color + 1
            break
        case SQ_SIZE:
            newState.size = newState.size * 2 > 80 ? 20 : newState.size * 2;
            break;
        // case SQ_SIZE:
        //     newState.size = newState.size === 3 ? 1 : newState.size + 1
        //     break
        default:
    }

    return newState;
}

export default colorSqer;