// COMP 37E-1
import React, { Component } from 'react'
import Compception from './compception'

// COMP 37E-2
export default class Browse extends Component {
    // COMP 36I
    constructor(){
        super();
        // COMP 36C
        this.state = {
            myName: "Brody"
        }
        // COMP 37C
        this.changeState = this.changeState.bind(this)
    }
    // COMP 37D
    changeState = () => {
        // COMP 36D
        this.setState({
            myName: "Mason"
        })
    }
    // COMP 36F
    render() {
        return(
            // COMP 36G
            <div className="component browse-component">
                Browse component
                {/* COMP 54D */}
                <section>
                    <h1>This is a section about HTML semantics</h1>
                    {/* COMP 55D & COMP 55E-1*/}
                    <p>web semantics is essentially the way to write code that is easy to read for both computers and humans.</p>
                    {/* COMP 55C & COMP 55E-2*/}
                    <p>in HTML, a tags name can be whatever you want it to be, but it is best practice to describe as specifically and efficiently as possible.</p>
                </section>
                <h1>This is name on state: <span style={{color: 'white'}}>{this.state.myName}</span></h1>
                {/* COMP 36J */}
                <button onClick={this.changeState}>CLICK ME TO CHANGE NAME ON STATE FROM BRODY TO MASON</button>
                {/* COMP 36H & COMP 38D */}
                <Compception myProps={"Da props"}/>
            </div>
        )
    }
}