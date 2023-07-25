import React from "react";

// function Greet(){
//     return(
//         <h1>
//             Welcome!!!
//         </h1>
//     )
// }

// const Greet = ()=> <h1>Functional component</h1>

const Greet = (props) => {
    return (
        <h1>Functional component {props.name} {props.children}</h1>
    )
}

export default Greet


// export const Greet = ()=> <h1>Welcome!!!</h1> ???

