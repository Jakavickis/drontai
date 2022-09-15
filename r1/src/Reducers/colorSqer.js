import { BORDER_INPUT, COLOR_3, COLOR_3_BORDER_STYLE, SQ_SIZE } from "../Constants/017";

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
        case BORDER_INPUT:
            newState.borders = action.payload
            break
        case COLOR_3_BORDER_STYLE:
            newState.borderStyle = action.payload;
            break;
        default:
    }

    return newState;
}

export default colorSqer;