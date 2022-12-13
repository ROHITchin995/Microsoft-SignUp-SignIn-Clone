import React from 'react'
import logo from '../../src/logo2.jpg'
import './Style.css'

function Signin() {
  return (
    
    <div className='main-container'>
        <div className="inside-container">
        <img alt="logo" className='logo' src={logo} />
       
       <div className="signInFont"> Sign In</div> 
       <form action="" >
        {/* input for email */}
        <label htmlFor="email">Email</label>
        <input type="text" name="email" id="email" placeholder='Email'/>
        {/* input for password  */}
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" placeholder='Password'/>
        <span> New User ?  <span className='formChanger'>Create account</span>  
            </span>
        <button>Continue</button>
       </form>
       </div>
    </div>
  )
}

export default Signin