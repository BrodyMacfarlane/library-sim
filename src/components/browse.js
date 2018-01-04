// COMP 37E-1
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Compception from './compception'

// COMP 37E-2
export default class Browse extends Component {
    // COMP 36I
    constructor(){
        super();
        // COMP 36C
        this.state = {
            myName: "Brody",
            myGreeting: "Please type in a greeting into the input above and press send",
            inputText: ""
        }
        // COMP 37C
        this.changeState = this.changeState.bind(this)
        this.handleGreet = this.handleGreet.bind(this)
        this.updateInputValue = this.updateInputValue.bind(this)
    }
    // COMP 44E
    componentDidMount(){
        console.log("component has loaded/mounted")
    }
    // COMP 37D
    changeState = () => {
        // COMP 36D
        this.setState({
            myName: "Mason"
        })
    }
    handleGreet(){
        // COMP 44C
        axios.post('http://localhost:9001/api/getGreeting', 
            {text: this.state.inputText})
            // COMP 44D
            .then((response) => {
            this.setState({myGreeting: response.data})
        })
    }
    updateInputValue(e){
        this.setState({
            inputText: e.target.value
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
                {/* COMP 42E */}
                <Link to="/">Login/Register</Link>
                <div>
                    <input type="text" name="greeting" value={this.state.inputText} onChange={e => this.updateInputValue(e)}/><button type="submit" onClick={this.handleGreet}>SEND</button>
                </div>
                <div>{this.state.myGreeting}</div>
            </div>
        )
    }
}