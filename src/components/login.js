import React, { Component } from 'react'
// COMP 54E
import maroonLogo from '../assets/maroon-logo.svg'

export default class Login extends Component {
    render() {
        return(
            // COMP 54C
            <div className="component login-component">
                <div className="main-container">
                    <div className="content-container">
                        {/* COMP 54G */}
                        {/* COMP 54J */}
                        <img className="maroon-logo" src={maroonLogo}/>
                        <div className="login-title">BOOK EXCHANGE</div>
                        <div id="credentials-container">
                            <div className="credentials">
                                <div>Username</div>
                                <input type="text"/>
                            </div>
                            <div className="credentials">
                                <div>Password</div>
                                <input type="password"/>
                            </div>
                            <div className="credentials-btn">
                                <button>REGISTER</button>
                                {/* COMP 54H */}
                                <a href="/#/browse">
                                    <button>LOGIN</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}