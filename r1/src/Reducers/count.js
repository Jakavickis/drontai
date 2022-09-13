import { ADD_ONE, ADD_TWO, REMOVE_ONE, REMOVE_TWO, ADD_FIVE, REMOVE_FIVE, RAND_COLOR, RAND_FONT } from "../Constants/actions";
import rand from "../Functions/rand";
import randColor from "../Functions/randColor";

function count(state, action) {
    let newState = { ...state };
    switch (action.type) {
        case ADD_ONE:
            newState.number++;
            break;
        case REMOVE_ONE:
            newState.number--;
            break;
        case ADD_TWO:
            newState.number += 2;
            break;
        case REMOVE_TWO:
            newState.number -= 2;
            break;
        case ADD_FIVE:
            newState.number += 5;
            break;
        case REMOVE_FIVE:
            newState.number -= 5;
            break;
        case RAND_COLOR:
            newState.color = randColor();
            break
        case RAND_FONT:
            newState.fontSize = rand(10, 40) + 'px';
            break
        default:
    }

    return newState;
}

export default count;