import { useState } from 'react';
import './App.css';
import logo from './logo2.jpg'


function App() {
  const [showSignIn, setshowSignIn] = useState(false)

  const changeForm = ()=>{
    setshowSignIn(!showSignIn)
  }




  return (
    <div>
      {showSignIn?(
      //  sign In component
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
        <span> New User ?  <span className='formChanger' onClick={changeForm}>Create account</span>  
            </span>
        <button>Continue</button>
       </form>
       </div>
    </div> 
      ):(
        // sign Up component
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
        <span> Account already exist ? <span className='formChanger' onClick={changeForm}> Continue </span>
        </span>
        <button>Create</button>
       </form>
       </div>
    </div>
      )}
    </div>
  );
}

export default App;
