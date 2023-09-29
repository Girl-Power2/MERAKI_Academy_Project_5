import React from 'react'
import { NavLink } from 'react-router-dom'

const Login = () => {
  return (
    <div>
        <div>
        <NavLink to="/loginUser">Login user</NavLink>
</div>
<div>
        <NavLink to="/loginProvider">Login provider</NavLink>
</div>
    </div>
  )
}

export default Login