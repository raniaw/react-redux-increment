import React, { Component } from 'react'

export default class A extends Component {
    render() {
        return (
            <div>
                hi, I'm 'A-Component', x={this.props.x}
                <button onClick={this.props.incrementX}>Increment X</button>
            </div>
        )
    }
}
