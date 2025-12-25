import React from 'react'

const LoginPage = () => {
  return (
    <div>
        <form className='bkgroundLogin'>
            <div className='outerLogin'>
                <h2>Login</h2>
    
                
                    <label className='formLabel' htmlFor="email">Email</label>
                    <input className='formInput' type="email" placeholder='Enter your Email' required/>
                
                
                
                    <label className='formLabel' htmlFor="password">Password</label>
                    <input className='formInput' type="password" placeholder='Enter your Password' required/>
                

                <button type='submit' className='loginBtn'>LogIn</button>
                
            </div>
            
        </form>
        </div>
  )
}

export default LoginPage