function T032({ circleHop, move }) {
    return (
        <>

            {/* {
                circleHop ? <div className="ap" style={{ backgroundColor: 'white' }}></div> : <div className="ap" onClick={move}></div>
            } */}
            {
                circleHop ? <div className="ap" style={{ backgroundColor: 'white' }}></div> : <div className="ap" onClick={move}></div>
            }

        </>
    )
}

export default T032;