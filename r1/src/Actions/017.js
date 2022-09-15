import { BORDER_INPUT, COLOR_3, COLOR_3_BORDER_STYLE, MINUS_BUT, PLUS_BUT, RAND_NUMBERS, SORT_RAND_10, SQ_SIZE } from "../Constants/017";

export function actionColor3() {
    return {
        type: COLOR_3
    }
}
export function actionSqSize() {
    return {
        type: SQ_SIZE
    }
}
export function actionBorder(border) {
    return {
        type: BORDER_INPUT,
        payload: border
    }
}
export function actionColor3BorderStle(border) {
    return {
        type: COLOR_3_BORDER_STYLE,
        payload: border
    }
}
// export function actionPlusMinus(number) {
//     return {
//         type: PLUS_MINUS_NUMBER,
//         payload: number
//     }
//}
export function actionPlusBut(numbers) {
    return {
        type: PLUS_BUT,
        payload: numbers
    }
}
export function actionMinusBut(number) {
    return {
        type: MINUS_BUT,
        payload: number
    }
}
export function actionRand() {
    return {
        type: RAND_NUMBERS
    }
}

export function actionSortRand10() {
    return {
        type: SORT_RAND_10
    }
}
