function Cat({ cat, i }) {

    return (
        <div style={{
            backgroundColor: i % 2 ? 'crimson' : null,
            displayNone: cat.weight > 4 ? '50%' : null,
            // display: cat.weight < 4 ? "none" : null
        }}>{cat.name} {cat.weight}</div>
    )
}

export default Cat;