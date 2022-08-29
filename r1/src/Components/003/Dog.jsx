import rand from '../../Functions/rand.js'

function Dog() {

    if (rand(0, 1)) {
        return null
    }

    return (
        <>
            <h2 className="h2" style={{
                color: ['green', 'red', 'blue'][rand(0, 2)],
                fontSize: rand(0, 1) ? '50px' : null
            }}>Cat {false ? 'Jo' : 'GoGo'}</h2>
            <h3 className={rand(0, 1) ? 'cat' : 'dog'}>Big {rand(100, 999)}</h3>
        </>
    );

}

export default Dog;