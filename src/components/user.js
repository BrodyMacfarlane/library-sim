import React, { Component } from 'react'

export default class User extends Component {
    constructor(props){
        super(props);
        // COMP 42J
        this.state = {
            // COMP 42K
            user: props.match.params.user
        }
    }
    render(){
        return(
            <div>{this.state.user}</div>
        )
    }
}