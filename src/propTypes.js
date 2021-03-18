import React, { Component } from 'react';
import PropHelp from './propHelp'

class propTypes extends Component {
    render() {
        return (
            <div>
                <h1>Prop Types in React</h1>
                <PropHelp age={20}/>
                <h2>hello</h2>
                <h3>hello g</h3>
            </div>
        );
    }
}

export default propTypes;