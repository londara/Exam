import React, { Component } from 'react'
import { connect } from 'net';

import {getPost} from '../../redux/actions/postAction/postAction'
class ListPost extends Component {
    render() {
        console.log(this.props)
        // this.props.getPost()
        return (
            <div>
                
            </div>
        )
    }
}


const mapStateProps = (state)=>{
    return {
        data:state.data
    }
}

const mapActionProps = () =>{
    return {getPost}
}

// Param 1: state or store
// Param 2: action
export default connect(mapStateProps,mapActionProps)(ListPost)