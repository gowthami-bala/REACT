// reference link - https://www.youtube.com/watch?v=YCRuTT31qR0

import React, { Component, PureComponent } from "react";
import NormalComponent from "./normalcomponents";
import PureClassComponent from "./purecomponents";

class Parentcomponent extends PureComponent{
    constructor(){
        super()
        this.state={
            name:"teja"
        }
    }
    componentDidMount(){
        setInterval(()=>{
            this.setState({
                name:"tarun"
            })
        },2000)
    }
render(){
    console.log("parent");
    return(
        <>
        <div>
            <NormalComponent name={this.state.name}></NormalComponent>
            <PureClassComponent name={this.state.name}></PureClassComponent>
        </div>
        </>
    )
}
}

export default  Parentcomponent