
import React, { Component } from "react";

class State extends Component {

    constructor(){
        super()
            this.state =  
            {
                message : "welcome"
            }
    }

    changeData(){
        this.setState ({
            message : "Thank you"
        })
    }
    render(){
        return (
            <div>
            <h1>{this.state.message}</h1>
            <button onClick={()=> this.changeData()}>subscribe</button>
            </div>
        )
    }

}
export default State