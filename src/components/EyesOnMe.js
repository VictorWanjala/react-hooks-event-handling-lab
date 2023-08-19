// Code EyesOnMe Component Here
function EyesOnMe(){
    function focus(event){
        event.preventDefault()
        console.log('Good!')

    }

    function blur(event){
        event.preventDefault()
        console.log('Hey! Eyes on me!')

    }
    return(<div>
        <button onFocus={focus} onBlur={blur}>Eyes on me</button>
    </div>)
}

export default EyesOnMe