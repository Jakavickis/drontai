import { useContext } from "react";
import DataPlus from "./DataPlus";

function L3({ stars }) {

    const { pluses } = useContext(DataPlus)

    return (
        <div className="star">
            <h2>{stars}</h2>
            <h1>{pluses}</h1>
        </div>
    )
}

export default L3;