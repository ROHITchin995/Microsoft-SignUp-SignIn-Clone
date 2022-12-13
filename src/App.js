import { useState } from 'react';
import './App.css';
import Signin from './Components/SignIn';
import SignUp from './Components/SignUp';

function App() {
  const [showSignIn, setshowSignIn] = useState(true)

  return (
    <div>
      {showSignIn?(
      //  sign In component
       <Signin />  
      ):(
        // sign Up component
        <SignUp />
      )}
    </div>
  );
}

export default App;
