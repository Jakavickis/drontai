import { RAND_NUMBERS, RAND_RAND, RAND_RESET, SORT_RAND_10, SORT_RAND_10_REVERSE, TRIPLE_SHOW_HIDE, TRIPLE_SHOW_RESET } from "../Constants/017";
import rand from "../Functions/rand";


function random10Obj(state, action) {
    let newState = [...state]

    switch (action.type) {
        case RAND_NUMBERS:
            newState = [];
            [...Array(10)].forEach((_, i) => {
                let numbers = rand(1, 9);
                newState.push({ row: i, show: true, numbers, line: !(numbers % 2) })
            })
            break
        case SORT_RAND_10:
            newState.sort((a, b) => a.numbers - b.numbers)
            break
        case SORT_RAND_10_REVERSE:
            newState.sort((a, b) => b.numbers - a.numbers)
            break
        case RAND_RESET:
            newState.sort((a, b) => a.row - b.row)
            break
        case RAND_RAND:
            newState.sort(() => rand(0, 1) ? -1 : 1);
            break
        case TRIPLE_SHOW_HIDE:
            newState = newState.map(n => ({ ...n, show: (n.numbers % 2 ? action.payload : !action.payload) }));
            break
        case TRIPLE_SHOW_RESET:
            newState = newState.map(n => ({ ...n, show: true }));
            break
        default:
    }

    return newState;
}

export default random10Obj;