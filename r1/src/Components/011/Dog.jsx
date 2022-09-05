import { useEffect } from "react";

function Dog({ i }) {



    useEffect(() => {
        console.log('New Dog');
        return () => {
            console.log('Dog Gone');
        }
    }, []);

    return (
        <>
            <div>{i}</div>
        </>
    )
}

export default Dog;