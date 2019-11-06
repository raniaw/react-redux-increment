import React, { Component } from 'react'
import { connect } from 'react-redux'

class C extends Component {
    render() {
        return (
            <div>
                C, z = {this.props.z} 
                <br></br>
                <button onClick={this.props.incrementY}>Increment Y</button>
            </div>
        )
    }
}

//redux specific mappers

const mapStateToProps = (state) => ({
  z:state.z
});

const mapDispatchToProps=(dispatch) =>({
    incrementY:()=>dispatch({
        type:'INCREMENT_Y'
    })
})

//export
export default connect(mapStateToProps, mapDispatchToProps)(C)

