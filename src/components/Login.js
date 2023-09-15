import React from 'react'
import Header from './Header'

const Login = () => {
  return (
    <div>
        <Header/>
        <img className='absolute' src='https://assets.nflxext.com/ffe/siteui/vlv3/dc1cf82d-97c9-409f-b7c8-6ac1718946d6/14a8fe85-b6f4-4c06-8eaf-eccf3276d557/IN-en-20230911-popsignuptwoweeks-perspective_alpha_website_medium.jpg'/>
        <div >
        <form className=" absolute top-20 left-5"> 
          <h3>Sign In</h3>
          <input type='text' placeholder='Email or phone number' className='p-2 m-2' />
          <input type='password' placeholder='Password' className='p-2 m-2'/>
          <button className='p-2 m-4'>SignIn</button>
        </form>
        </div>
    </div>
  )
}

export default Login