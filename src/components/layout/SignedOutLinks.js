import React from 'react'
import { NavLink } from 'react-router-dom'
const SignedOutLinks = () => {
    return (
        <ul className="right">
            <li><NavLink to='/create'>Create Project</NavLink></li>
            <li><NavLink to='/signup'>SignUp</NavLink></li>
            <li><NavLink to='/login'>SignIn</NavLink></li>
        </ul>
    )
}
export default SignedOutLinks 