import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class SignUP extends Component {
    state={
        firstname:"",
        lastname:"",
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
                    <h5 className="grey-text text-darken-3">Sign Up</h5>
                    <div className="input-field">
                        <label htmlFor="text">First Name</label>
                        <input type="text" id="firstname" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="text">Last Name</label>
                        <input type="text" id="laststname" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0">Sign Up</button>
                    </div>
                </form>
                <p>Alredy Registered? <span><Link to='/login' id="Link">Login</Link></span></p>
            </div>
        )
    }
}

export default SignUP
