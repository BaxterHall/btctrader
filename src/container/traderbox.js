import React from 'react';
import {connect} from "react-redux";
import * as actionCreators from "../actions/index.js"
import Box from "../component/box.js";

class TraderBox extends React.Component{
    render(){
    return(
        <Box></Box>
    )
    }
}

const mapStateToProps=(state)=>{
    return state
}
export default connect (mapStateToProps, actionCreators)(TraderBox);