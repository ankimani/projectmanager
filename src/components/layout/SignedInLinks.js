import React from 'react'
import { NavLink } from 'react-router-dom'
const SignedInLinks = () => {
    return (
        <ul className="right">
            <li id="list"><NavLink to='/create'>Create Project</NavLink></li>
            <li id="list"><NavLink to='/' className="btn btn-primary "><span className="badge badge-light ">AK</span></NavLink></li>
            <li id="list"><NavLink to='/'>SignOut</NavLink></li>
        </ul>
    )
}
export default SignedInLinks 