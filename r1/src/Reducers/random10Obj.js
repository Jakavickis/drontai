import { RAND_NUMBERS, SORT_RAND_10 } from "../Constants/017";
import rand from "../Functions/rand";


function random10Obj(state, action) {
    let newState = [...state]

    switch (action.type) {
        case RAND_NUMBERS:
            newState = [];
            [...Array(10)].forEach(() => {
                let numbers = rand(1, 9);
                newState.push({ numbers, line: !(numbers % 2) })
            })
            break
        case SORT_RAND_10:
            newState.sort((a, b) => a - b)
            break
        default:
    }

    return newState;
}

export default random10Obj;