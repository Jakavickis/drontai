import { ADD_ONE, ADD_TWO, REMOVE_ONE, REMOVE_TWO, ADD_FIVE, REMOVE_FIVE, RAND_COLOR, RAND_FONT, BORDER_S_H, SQUARE, REM_SQUARE } from '../Constants/actions';

export function add1() {
    return {
        type: ADD_ONE
    }
}

export function rem1() {
    return {
        type: REMOVE_ONE
    }
}

export function add2() {
    return {
        type: ADD_TWO
    }
}

export function rem2() {
    return {
        type: REMOVE_TWO
    }
}

export function add5() {
    return {
        type: ADD_FIVE
    }
}

export function rem5() {
    return {
        type: REMOVE_FIVE
    }
}
export function randomColor() {
    return {
        type: RAND_COLOR
    }
}

export function randomFont() {
    return {
        type: RAND_FONT
    }
}

export function borderShowHide() {
    return {
        type: BORDER_S_H
    }
}
export function addSquare() {
    return {
        type: SQUARE
    }
}
export function remSquare() {
    return {
        type: REM_SQUARE
    }
}