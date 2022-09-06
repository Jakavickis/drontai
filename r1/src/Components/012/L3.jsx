import { useContext } from "react";
import DataPlus from "./DataPlus";

function L3({ stars }) {

    const { pluses, minuses } = useContext(DataPlus)

    return (
        <div className="star">
            <h2>{stars}</h2>
            <h1>{pluses}</h1>
            <h1>{minuses}</h1>
        </div>
    )
}

export default L3;