import rand from '../../src/Functions/rand.js'

function Dog() {

    return (
        <>
            <h2>Cat {false ? 'Jo' : 'GoGo'}</h2>
            <h3 className="dog">Big {rand(100, 999)}</h3>
        </>
    );

}

export default Dog;