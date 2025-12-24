import React from 'react'

const SignUp = () => {
  return (
    <div>
        <form className='bkgroundSignup'>
            
            <div className='outerSignup'>
                <h2>SignUp</h2>
                {/* <div className='form'> */}
                    <label className='formLabel' htmlFor="username">Username</label>
                    <input className='formInput' type="username" placeholder='Enter your Username' required/>
                {/* </div> */}

                {/* <div className='form'> */}
                    <label className='formLabel' htmlFor="email">Email</label>
                    <input className='formInput' type="email" placeholder='Enter your Email' required/>
                {/* </div> */}
                
                {/* <div className='form'> */}
                    <label className='formLabel' htmlFor="password">Password</label>
                    <input className='formInput' type="password" placeholder='Enter your Password' required/>
                {/* </div> */}

                <button type='submit' className='signupBtn'>Create Account</button>
                
            </div>
            
        </form>
        

    </div>
  )
}

export default SignUp