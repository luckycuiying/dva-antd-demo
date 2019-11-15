import React, { Component } from 'react'
import { connect} from 'react-redux'
import actions from '../store/action'
class Counter extends Component {
    render() {
        return (
            <div>
              <p>{this.props.number}</p>  
              <button onClick={this.props.add}>同步加一</button>
              <button onClick={this.props.thunkAdd}> thunk异步加一</button>
              <button onClick={this.props.sagaAdd}> saga同步加二</button>
            </div>
        )
    }
}

export default connect(
    state=>state,
    actions
)(Counter)
