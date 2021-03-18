import React, { PureComponent } from 'react';

class pureComponentes extends PureComponent {
    constructor(){
        super();
        this.state={
            data: 10
        }
    }
    render() {
        return (
            <div>
                <h1>Pure Componentes: {this.state.data}</h1>
                <button onClick={()=>{this.setState({data:10})}}> Update state</button>
            </div>
        );
    }
}

export default pureComponentes;