function Cat({ cat, i }) {

    return (
        <div style={{ backgroundColor: i % 2 ? 'crimson' : null }}>{cat.name} {cat.weight}</div>
    )
}

export default Cat;