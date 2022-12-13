import { useState } from 'react';
import './App.css';
import logo from './logo2.jpg'
import { emailValidation, passwordValidation } from './utils';

function App() {
  // State to handle input, message and changeform
  const [showSignIn, setshowSignIn] = useState(true)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [message, setMessage] = useState('')

  // function to change form to Sign Up or Sign In
  const changeForm = (e)=>{
    e.preventDefault()
    setMessage('')
    setEmail('')
    setName('')
    setConfirmPassword('')
    setPassword('')
    setshowSignIn(!showSignIn)
  }

  //Validate Sign In form
  const validateSignIn = (e)=>{
    setMessage('')
    e.preventDefault()
    let passwordMessage = passwordValidation(password)
    if(!emailValidation(email) || email.length < 1){
      setMessage('email invalid')
    }else if(!passwordMessage.condition){
      setMessage(passwordMessage.message);
    }
    else{
      setMessage('Login successfull')
    }
    
  }

  //Validate Sign Up form
  const validateSignUp =(e)=>{
    setMessage('')
    e.preventDefault()
    let passwordMessage = passwordValidation(password)
    if(name === ''){
      setMessage(`Name can't be blank`)
    } else if(!emailValidation(email) || email.length < 1){
      setMessage('email invalid')
    }else if(!passwordMessage.condition){
      setMessage(passwordMessage.message);
    }
   else if(!(password === confirmPassword)){
      setMessage(`Password and Confirm Password doesn't match`);
    } 
    
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
        <input type="text" name="signInEmail" id="signInEmail" placeholder='Email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
        {/* input for password  */}
        <label htmlFor="password">Password</label>
        <input type="password" name="signInPassword" id="signInPassword" placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
        <span> New User ?  <span className='formChanger' onClick={changeForm}>Create account</span>  
            </span>
        <button onClick={validateSignIn}>Continue</button>
       </form>
       
       </div>
    </div> 
    
      ):(
        // sign Up component
        <div className='main-container'>
        <div className="inside-container">
        <img alt="logo" className='logo' src={logo} />
        
       <div className="signInFont"> Create Account</div> 
       <form action="">
        {/* input for Name */}
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" placeholder='Name' value={name} onChange={(e)=>setName(e.target.value)}/>
        {/* input for email */}
        <label htmlFor="email2">Email</label>
        <input type="text" name="email" id="email" placeholder='Email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
        {/* input for password  */}
        <label htmlFor="password2">Password</label>
        <input type="password" name="password" id="password" placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
        {/* input for confirm Password  */}
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input type="password" name="confirmPassword" id="confirmPassword" placeholder='Confirm Password' value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)}/>
        <span> Account already exist ? <span className='formChanger' onClick={changeForm}> Continue </span>
        </span>
        <button onClick={validateSignUp} >Create</button>
       </form>
       </div>
       
    </div>
      )}
      <div className='message-container'>{message? (message):''}</div>
    </div>
  );
}

export default App;
