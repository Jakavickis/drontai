
function Online({ setText, text }) {


    const control = e => {
        setText(e.target.value)
    }



    return (
        <>

            <div>
                <input type="text" onChange={control} value={text}></input>
            </div>
        </>
    )

}

export default Online;