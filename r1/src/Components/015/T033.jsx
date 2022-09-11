function T033({ testDir, move2, dir }) {
    return (
        <>
            {
                (dir ? testDir : !testDir) ? <div className="ap" onClick={move2}></div> : <div className="ap" style={{ backgroundColor: 'white' }}></div>
            }

        </>
    )
}

export default T033;

