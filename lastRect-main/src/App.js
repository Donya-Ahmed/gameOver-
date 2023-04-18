import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
 import Layout from './components/layout/Layout.jsx'
 import Login from './components/login/Login.jsx'
 import Register from './components/register/Register.jsx'
 import Home from './components/home/Home.jsx'
 import {LoginContextProvider} from './context/Context.js'
import Protected from './components/protected/Protected.jsx'

export default function App() {
  const routes=createBrowserRouter([
    {path:'',element:<Layout></Layout>,children:[
    {index:true,element:<Login></Login>},
    {path:'/register',element:<Register></Register>},
    {path:'/home',element:<Protected><Home></Home></Protected>},
    {path:'/login',element:<Login></Login>}

    ]}
  ])
  return (
    <LoginContextProvider>
      <RouterProvider router={routes}></RouterProvider>
    </LoginContextProvider>
  )
}
