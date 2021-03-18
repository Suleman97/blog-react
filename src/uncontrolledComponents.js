import React, { Component } from 'react';

class uncontrolledComponents extends Component {
    constructor(){
        super();
        this.name=React.createRef();
        this.password=React.createRef();
    }
    submitHandle(event){
        event.preventDefault();
    }
    render() {
        return (
            <div>
                <form onSubmit={(event)=>{this.submitHandle(event)}}>
                    <input type="text" placeholder="enter name" ref={this.name} /> <br /> <br />
                    <input type="password" placeholder="enter password" ref={this.password} /><br /><br />
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}

export default uncontrolledComponents;