import React, { Component } from 'react'

export default class Compception extends Component {
    render(){
        return(
            <div>
                <p>My compception component.</p>
                {/* COMP 36E & COMP 38D */}
                <h1>Props: {this.props.myProps}</h1>
            </div>
        )
    }
}