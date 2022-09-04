
function OnlineInput({ text }) {

    return (
        <>

            <h2 style={{
                textTransform: text === "lowercase" ? "uppercase" : "uppercase",
            }}>TEKSTAS ONLINE: {text}
            </h2>
        </>
    )
}

export default OnlineInput;