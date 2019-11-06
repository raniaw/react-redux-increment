import React, { Component } from 'react'
import { connect } from 'react-redux'

class B extends Component {
    render() {
        return (
            <div>
                B, y = {this.props.y} 
                <br></br>
                <button onClick={this.props.incrementZ}>Increment Z</button>
            </div>
        )
    }
}

//redux specific mappers

const mapStateToProps = (state) => ({
  y:state.y
});

const mapDispatchToProps=(dispatch) =>({
    incrementZ:()=>dispatch({
        type:'INCREMENT_Z'
    })
})

//export
export default connect(mapStateToProps, mapDispatchToProps)(B)

