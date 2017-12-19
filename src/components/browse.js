import React, { Component } from 'react'

export default class Browse extends Component {
    render() {
        return(
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
            </div>
        )
    }
}