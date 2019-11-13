import React, { Component } from 'react'
import {connect} from 'dva'
class Home extends Component {
    render() {
        console.log(this.props.home)
        return (
            <div>
                {this.props.title}
            </div>
        )
    }
}

export default connect(state=>state.home)(Home)