import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class SignIn extends Component {
    state={
        email:"",
        password:""
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state)
    }
    handleChange=(e)=>{
        this.setState({
            [e.target.id]:e.target.value
        })
        
    }
    render() {
        return (
            <div className="container">
                <form className="white" onSubmit={this.handleSubmit}>
                    <h5 className="grey-text text-darken-3">Log In </h5>
                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0">Log in</button>
                    </div>
                    <p>Not Yet Registered? <span><Link to='/signup' id="Link">Sign Up</Link></span></p>
                </form>
            </div>
        )
    }
}

export default SignIn
