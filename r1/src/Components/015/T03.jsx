function T03({ circleHop, move }) {
    return (
        <>

            {/* {
                circleHop ? <div className="ap" onClick={move}></div> : <div className="ap" style={{ backgroundColor: 'white' }}></div>
            } */}
            {
                !circleHop ? <div className="ap" style={{ backgroundColor: 'white' }}></div> : <div className="ap" onClick={move}></div>
            }

        </>
    )
}

export default T03;