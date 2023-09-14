import React from 'react'
import Login from './Login'
import Browse from './Browse'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import Header from './Header'

const Body = () => {

    const approuter=createBrowserRouter([
        {
            path:"/",
            element:<Login/>,
        },

        {
            path:"/browse",
            element:<Browse/>,
        },
        {
            path:"/header",
            element:<Header/>,
        }


    ]);

  return (
    <div>  
       <RouterProvider  router={approuter}/> 
    </div>
  )
}

export default Body

