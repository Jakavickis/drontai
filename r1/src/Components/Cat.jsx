import rand from "../Functions/rand";

function Cat() {

    return rand(0, 1) ? <h1>Pilkis</h1> : <h2>Vokis</h2>
}

export default Cat;