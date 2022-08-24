import rand from '../../src/Functions/rand.js'

function Dog() {

    return (
        <>
            <h2 style={{
                color: ['green', 'red', 'blue'][rand(0, 2)],
                fontSize: '50px'
            }}>Cat {false ? 'Jo' : 'GoGo'}</h2>
            <h3 className="dog">Big {rand(100, 999)}</h3>
        </>
    );

}

export default Dog;