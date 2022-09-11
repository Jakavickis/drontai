function T042({ addSquare }) {
    return (
        <>
            <div className="container">
                {
                    addSquare.map((_, i) => <div className="kv" style={{
                        backgroundColor: 'crimson'
                    }} key={i}></div>)
                }
            </div>
        </>
    )
}

export default T042;