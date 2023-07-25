
const FunClick = ()=>{
    function clickEvent(){
        console.log("button clicked");
    }
    return(
        <button onClick={clickEvent}>click</button>
    )
}

export default FunClick