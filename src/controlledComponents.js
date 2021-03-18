import React, { Component } from 'react';

class controlledComponents extends Component {
    constructor(){
        super();
        this.state={
            name:"",
            password:"",
        }
    }
    submited(){
        console.warn(this.state)
    }
    render() {
        return (
            <div>
                <h1>
                    Controlled Components form control
                </h1>
                <input type="text" placeholder="Enter Name" 
                onChange={(event)=>{this.setState({name: event.target.value})}} /> <br /> <br />
                <input type="password" placeholder="Enter Password" 
                onChange={(event)=>{this.setState({password:event.target.value})}}/><br /> <br />
                <button onClick={this.submited()}>Submit</button>
            </div>
        );
    }
}

export default controlledComponents;