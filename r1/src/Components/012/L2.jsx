import { useContext } from "react";
import DataPlus from "./DataPlus";
import L3 from "./L3";

function L2({ stars }) {

    const { minuses } = useContext(DataPlus)

    return (
        <div className="star">

            <L3 stars={stars} />
            <h2>{minuses}</h2>
        </div>
    )
}

export default L2;