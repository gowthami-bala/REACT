import React, { Component } from "react";

class Forms extends Component {
    constructor() {
        super()
        this.state = {
            UserName: '',
            Comments: '',
            Topic: 'Angular',
        }
    }
    handlerchange = (event) => {
        this.setState({
            UserName: event.target.value
        })
    }
    handlerchangeComment = (event) => {
        this.setState({
            Comments: event.target.value
        })
    }
    handlerchangeTopic = (event) => {
        this.setState({
            Topic: event.target.value
        })
    }
    submitForm=(event)=>{
   console.log(this.state.UserName ,this.state.Comments, this.state.Topic);
   event.preventDefault()
    }
    render() {
        return (
            <div>
                <form onSubmit={this.submitForm}>
                    <div>
                        <label> Name : </label>
                        <input type="text"  placeholder="Enter Username" value={this.state.UserName} onChange={this.handlerchange}></input>
                    </div><br/>
                    <div>
                        <label> Comments : </label>
                        <textarea value={this.state.Comments} onChange={this.handlerchangeComment}></textarea>
                    </div><br/>
                    <div>
                        <label>Choose a topic : </label>
                        <select value={this.state.Topic} onChange={this.handlerchangeTopic}>
                            <option value="React">React</option>
                            <option value="Angular">Angular</option>
                            <option value="Vue">Vue</option>
                        </select>
                    </div><br/>
                    <div>
                        <button>Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Forms