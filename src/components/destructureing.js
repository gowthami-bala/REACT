// const Destruct = (props) => {
//     return (
//         <h1>Hello {props.name}</h1>
//     )
// }

import { Component } from "react"


// destructuring funcational component

// const Destruct = ({name}) => {
//     return (
//         <h1>Hello {name}</h1>
//     )
// }

// const Destruct = (props) => {
//     const {name}=props
//     return (
//         <h1>Hello {name}</h1>
//     )
// }

// destructuring class component
class Destruct extends Component {
    render() {
        const { name } = this.props
        return (
            <h1>Hello {name}</h1>
        )
    }
}

export default Destruct