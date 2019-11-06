import React, { Component } from 'react'
import { connect } from 'react-redux'

class D extends Component {
    render() {
        return (
            <div>
                D, w = {this.props.w} 
                <br></br>
                <button onClick={this.props.incrementW}>Increment ODD from x</button>
            </div>
        )
    }
}

//redux specific mappers

const mapStateToProps = (state) => ({
  w:state.w
});

const mapDispatchToProps=(dispatch) =>({
    incrementW:()=>dispatch({
        type:'INCREMENT_W'
    })
})

//export
export default connect(mapStateToProps, mapDispatchToProps)(D)

