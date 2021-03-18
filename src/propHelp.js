import React, { Component } from 'react';
import propTypes from 'prop-types'

class propHelp extends Component {
    render() {
        return (
            <div>
                <h1>
                    checking proptypes in react
                </h1>
                <h2>{this.props.age}</h2>
            </div>
        );
    }
}

propHelp.propTypes={
    age:propTypes.number
}
export default propHelp;