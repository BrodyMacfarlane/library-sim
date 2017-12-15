import React, { Component } from 'react'
import maroonLogo from '../assets/maroon-logo.svg'

export default class Login extends Component {
    render() {
        return(
            <div className="component login-component">
                <div className="main-container">
                    <div className="content-container">
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