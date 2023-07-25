import { Component } from "react";

class Counter extends Component{
    constructor(){
    super()
    this.state ={
        count : 0
    }
    }

    increment(){
    this.setState({
        count : this.state.count + 1
    })
    }

    decrement(){
        this.setState({
            count : this.state.count - 1
        })
        }

    render(){
    return(
        <div>
        <div>Count - {this.state.count}</div>
        <button onClick={()=>this.increment()}>+</button>
        <button onClick={()=>this.decrement()}>-</button>
        </div>
    )
    }
}

export default Counter