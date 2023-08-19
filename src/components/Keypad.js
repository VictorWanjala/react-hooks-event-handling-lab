// Code Keypad Component Here

function Keypad (){
    function changeHandler(event){
        event.preventDefault()
        console.log('Entering password...')
    }
    return (
        <div>
            <input onChange={changeHandler} type="password" />
        </div>
        
    )
    
}


export default Keypad;