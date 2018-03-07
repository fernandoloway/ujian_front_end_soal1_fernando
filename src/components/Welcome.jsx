import React, { Component } from 'react';

class Welcome extends Component {

    render() {

        return (
            <h3>Halo {this.props.outputName}</h3>
        );
    }
}

export default Welcome;