import React from 'react'
import logo from '../../src/logo2.jpg'
import './Style.css'

function SignUp() {
  return (
    <div className='main-container'>
        <div className="inside-container">
        <img alt="logo" className='logo' src={logo} />
        
       <div className="signInFont"> Create Account</div> 
       <form action="" >
        {/* input for Name */}
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" placeholder='Name'/>
        {/* input for email */}
        <label htmlFor="email">Email</label>
        <input type="text" name="email" id="email" placeholder='Email'/>
        {/* input for password  */}
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" placeholder='Password'/>
        {/* input for confirm Password  */}
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input type="password" name="confirmPassword" id="confirmPassword" placeholder='Confirm Password'/>
        Account already exist ? Continue
        <button>Create</button>
       </form>
       </div>
    </div>
  )
}

export default SignUp