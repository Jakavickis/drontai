import { RAND_NUMBERS } from "../Constants/017";
import rand from "../Functions/rand";


function random10(state, action) {
    let newState = [...state]

    switch (action.type) {
        case RAND_NUMBERS:
            newState = [];
            [...Array(10)].forEach(() => newState.push(rand(1, 9)))
            break
        default:
    }

    return newState;
}

export default random10;