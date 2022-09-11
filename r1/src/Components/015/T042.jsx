function T042({ addSquare }) {
    return (
        <>
            <div className="container">
                {
                    addSquare.map((n, i) => <div className={n} style={{
                        backgroundColor: 'crimson'
                    }} key={i}></div>)
                }
            </div>
        </>
    )
}

export default T042;