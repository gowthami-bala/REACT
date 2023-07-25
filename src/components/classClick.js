import { Component } from "react";

class Clicking extends Component{

    clickEvent(){
        console.log("button clicked");
    }
     
    render(){
        return(
            <div>
                <button onClick={this.clickEvent}>click</button>
            </div>
        )
    }
}
export default Clicking