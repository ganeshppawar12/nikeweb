import React, { useState } from 'react'

const Login = () => {
    const [errorMessages, setErrorMessages] = useState({});
const [isSubmitted, setIsSubmitted] = useState(false);

const renderErrorMessage = (name) =>
name === errorMessages.name && (
  <div className="error">{errorMessages.message}</div>
);
const handleSubmit = (event) => {
    // Prevent page reload
    event.preventDefault();
  };
  return (
 

         <div className="form" >
     <form onSubmit={handleSubmit}>
       <div className="input-container">
         <label>Username </label>
         <input type="text" name="uname" required />
         {renderErrorMessage("uname")}
       </div>
       <div className="input-container">
         <label>Password </label>
         <input type="password" name="pass" required />
         {renderErrorMessage("pass")}
       </div>
       <div className="button-container">
         <input type="submit" />
       </div>
     </form>
   </div>

  )
}

export default Login