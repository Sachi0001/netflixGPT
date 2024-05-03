import React, { useState } from 'react'
import Header from './Header'

const Login = () => {

const [isSignIn, setIsSigIn] = useState(true)

  return (
    <div>

<Header />

<div className='relative -z-10'>

<img src="https://assets.nflxext.com/ffe/siteui/vlv3/058eee37-6c24-403a-95bd-7d85d3260ae1/e10ba8a6-b96a-4308-bee4-76fab1ebd6ca/IN-en-20240422-POP_SIGNUP_TWO_WEEKS-perspective_WEB_db9348f2-4d68-4934-b495-6d9d1be5917e_large.jpg" alt="bodylogo" />

</div>

<div  className=' bg-black w-4/12 p-12 box-border absolute top-36 right-1/3 opacity-90 rounded-sm'>
<form>
    <h1 className=' text-white text-xl font-bold my-2 '>Sign In</h1>
    {!isSignIn && (
        <input type='text' placeholder='Full Name'  className=' p-4 mx-auto w-full my-2 bg-slate-700 box-border rounded-lg'  />
    )}
<input type="text" placeholder='Email' className=' p-4 mx-auto w-full my-2 bg-slate-700 box-border rounded-lg' />
<input type="password" placeholder='password'  className=' p-4 mx-auto w-full my-4 bg-slate-700 rounded-lg'/>
<button className='p-4 mx-auto my-6 bg-red-600 rounded-lg w-full'>{!isSignIn ? "Sign Up":"Sign In"}</button>

<p className='text-white cursor-pointer' onClick={()=>setIsSigIn(!isSignIn)}>{!isSignIn? "Already Have an account ? Sign In": "New to Netflix? Sign Up now."}</p>
</form>

</div>

    </div>
  )
}

export default Login